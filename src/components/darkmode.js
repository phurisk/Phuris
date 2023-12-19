import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLightMode);
  }, [isLightMode]);

  return (
    <button
      onClick={() => setIsLightMode(!isLightMode)}
      className={`p-2 rounded-full ${
        isLightMode ? "bg-gray-800" : "bg-indigo-600"
      } hover:${isLightMode ? "bg-gray-700" : "bg-indigo-700"}`}
    >
      {isLightMode ? (
        <SunIcon className="w-5 h-5 text-yellow-500" />
      ) : (
        <MoonIcon className="w-5 h-5 text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;


