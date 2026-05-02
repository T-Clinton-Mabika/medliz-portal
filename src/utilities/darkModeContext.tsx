/*
 * =========================== SCROLL FUNCTIONS ===========================
 * - Scroll to top function to reset page position to top of page as user navigates from page to page
 */

import React, { useEffect, useState, createContext, useContext } from "react";

interface DarkModeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const DarkModeContext = createContext<DarkModeToggleProps>({
  isDark: false,
  toggle: () => {},
});

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = storedTheme === "dark" || (!storedTheme && systemDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDark, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export function useDarkMode() {
  return useContext(DarkModeContext);
}
