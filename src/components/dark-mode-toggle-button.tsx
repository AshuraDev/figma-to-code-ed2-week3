"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";

const DarkModeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "light" && (
        <Button variant="secondary" onClick={() => setTheme("dark")} className="rounded-">
          test
          <Image src={"./icons/sun.svg"} alt="sun" height={20} width={20} />
        </Button>
      )}
      {theme === "dark" && (
        <Button onClick={() => setTheme("light")}>
          test
          <Image src={"./icons/moon.svg"} alt="sun" height={20} width={20} />
        </Button>
      )}
    </div>
  );
};

export default DarkModeToggleButton;
