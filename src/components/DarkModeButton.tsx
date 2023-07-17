"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <>
        <SunIcon
          className="h-8 w-8 cursor-pointer transition-all duration-200 hover:text-blue-300 "
          onClick={() => setTheme("light")}
        />
      </>
    );
  }

  return (
    <>
      <MoonIcon
        className="h-8 w-8 cursor-pointer transition-all duration-200 hover:text-orange-500"
        onClick={() => setTheme("dark")}
      />
    </>
  );
}
