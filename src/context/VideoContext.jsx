import React, { createContext, useState, useRef, useCallback } from "react";

export const VideoContext = createContext(null);

export const VideoProvider = ({ children }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  // Default to unmuted as requested (may be blocked by some browsers' autoplay policies)
  const [isMuted, setIsMuted] = useState(false);

  // helper to fade volume smoothly (to/from target) over duration ms
  const fadeVolume = useCallback((target = 1, duration = 400) => {
    const v = videoRef.current;
    if (!v) return;
    const start = v.volume || 0;
    const delta = target - start;
    if (duration <= 0) {
      v.volume = Math.max(0, Math.min(1, target));
      return;
    }
    const steps = 20;
    const stepTime = duration / steps;
    let currentStep = 0;
    const iv = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      v.volume = Math.max(0, Math.min(1, start + delta * progress));
      if (currentStep >= steps) {
        clearInterval(iv);
      }
    }, stepTime);
  }, []);

  const play = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    // if muted, ensure muted prop matches state
    v.muted = isMuted;
    v.volume = v.volume || 0.8;
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          // fade volume in if unmuted
          if (!isMuted) fadeVolume(0.8, 400);
        })
        .catch(() => {
          // autoplay with sound often blocked by browsers.
          // Fallback: mute and try autoplay again so video starts.
          try {
            v.muted = true;
            setIsMuted(true);
            v.play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(!v.paused));
          } catch (e) {
            setIsPlaying(!v.paused);
          }
        });
    } else {
      setIsPlaying(!v.paused);
      if (!isMuted) fadeVolume(0.8, 400);
    }
  }, [fadeVolume, isMuted]);

  const pause = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    // fade out audio quickly then pause
    if (!isMuted) {
      fadeVolume(0, 300);
      setTimeout(() => {
        v.pause();
        setIsPlaying(false);
      }, 320);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, [fadeVolume, isMuted]);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) play();
    else pause();
  }, [play, pause]);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const newMuted = !v.muted;
    // if unmuting, restore volume fade in
    if (!newMuted) {
      v.muted = false;
      setIsMuted(false);
      // small delay to ensure play state
      setTimeout(() => fadeVolume(0.8, 350), 60);
    } else {
      // muting: quick fade then mute
      fadeVolume(0, 200);
      setTimeout(() => {
        v.muted = true;
        setIsMuted(true);
      }, 220);
    }
  }, [fadeVolume]);

  return (
    <VideoContext.Provider
      value={{
        videoRef,
        isPlaying,
        isMuted,
        play,
        pause,
        togglePlay,
        toggleMute,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
