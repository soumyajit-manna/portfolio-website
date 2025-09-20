import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.debug("Theme set to dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.debug("Theme set to light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 rounded-full bg-purple-500/80 text-white hover:bg-purple-600 transition-colors"
      aria-label="Toggle Theme"
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ToggleTheme;
