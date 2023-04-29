'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@/lib/icons";

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), [setMounted]);

  if (!mounted) return null;

  const isLight = resolvedTheme === `light`;
  const oppositeTheme = isLight ? `dark` : `light`;

  const toggleTheme = () => setTheme(oppositeTheme);
  
  return (
    <button 
      type="button"
      onClick={toggleTheme}
      aria-label={`Change to ${oppositeTheme} mode`}
      title={`Change to ${oppositeTheme} mode`}
      className="p-2 rounded-md bg-slate-50/30 border border-transparent hover:border-white"
    >
      {oppositeTheme === 'light' ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )}
    </button>
  )
};