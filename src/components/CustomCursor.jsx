import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const tailRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Robust touch-device detection. Some desktops (touch laptops) expose
    // ontouchstart but still have a mouse — we only disable the custom cursor
    // when the device is primarily touch-based.
    if (typeof window === "undefined") return;

    const isTouchDevice =
      ("ontouchstart" in window && navigator.maxTouchPoints === 0
        ? false
        : "ontouchstart" in window) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches);

    const htmlEl = document.documentElement;
    // Defensive: if some earlier code added the no-custom-cursor class and
    // we detected this device is not touch-first, remove it so our custom
    // cursor can be used. Touch devices will still be protected below.
    if (htmlEl.classList.contains("no-custom-cursor") && !isTouchDevice) {
      htmlEl.classList.remove("no-custom-cursor");
    }

    if (isTouchDevice) {
      // Make sure native cursor remains visible on touch devices
      htmlEl.classList.add("no-custom-cursor");
      return;
    }

    const cursor = cursorRef.current;
    const tail = tailRef.current;
    if (!cursor || !tail) {
      // If the custom cursor elements aren't present, ensure native cursor is available
      document.documentElement.classList.add("no-custom-cursor");
      return;
    }

    // We're initializing custom cursor: ensure native cursor is hidden via CSS rule
    htmlEl.classList.remove("no-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let tailX = mouseX;
    let tailY = mouseY;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // show cursor when moving
      cursor.style.opacity = "1";
      tail.style.opacity = "1";
    };

    const onLeave = () => {
      cursor.style.opacity = "0";
      tail.style.opacity = "0";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const render = () => {
      tailX = lerp(tailX, mouseX, 0.12);
      tailY = lerp(tailY, mouseY, 0.12);

      // move main cursor directly
      cursor.style.transform = `translate3d(${mouseX - 8}px, ${
        mouseY - 8
      }px, 0)`;

      // tail lags behind
      tail.style.transform = `translate3d(${tailX - 12}px, ${tailY - 12}px, 0)`;

      rafRef.current = requestAnimationFrame(render);
    };

    render();

    // Hide cursor when focusing inputs: let native cursor appear
    const onFocusIn = (e) => {
      if (
        e.target.matches("input, textarea, select, [contenteditable='true']")
      ) {
        cursor.style.display = "none";
        tail.style.display = "none";
      }
    };
    const onFocusOut = (e) => {
      if (
        e.target.matches("input, textarea, select, [contenteditable='true']")
      ) {
        cursor.style.display = "block";
        tail.style.display = "block";
      }
    };

    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
      cancelAnimationFrame(rafRef.current);
      // restore native cursor when component unmounts
      document.documentElement.classList.add("no-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={tailRef} className="custom-cursor-tail" aria-hidden="true" />
      <div ref={cursorRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
