"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const DarkModeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "light" && (
        <div
          className="cursor-pointer font-medium border rounded-lg text-tokena_dark_gray text-sm flex items-center justify-center gap-1 p-3"
          onClick={() => setTheme("dark")}
        >
          <Moon className="w-5 h-5 text-foreground" />
        </div>
      )}
      {theme === "dark" && (
        <div
          className="cursor-pointer font-medium border rounded-lg text-tokena_dark_gray text-sm flex items-center justify-center gap-1 p-3"
          onClick={() => setTheme("light")}
        >
          <Sun className="w-5 h-5 text-foreground" />
        </div>
      )}
    </div>
  );
};

export default DarkModeToggleButton;
