import React, { createContext, useContext, useState, useEffect } from "react";

export type Theme = "light" | "dark";

interface SpacingTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}

interface FontSizes {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  body: string;
  sm: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  spacing: SpacingTokens;
  fontSize: FontSizes;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    text: string;
    textLight: string;
    background: string;
    surface: string;
    border: string;
    accent: string;
  };
  utils: {
    containerClass: string;
    sectionPadding: string;
    cardPadding: string;
    gap: string;
    gapLarge: string;
  };
}

const defaultThemeContext: ThemeContextType = {
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
  },
  fontSize: {
    h1: "20px",
    h2: "18px",
    h3: "16px",
    h4: "14px",
    body: "14px",
    sm: "12px",
  },
  colors: {
    primary: "#10b981", // Green
    primaryLight: "#d1fae5", // Light green
    primaryDark: "#047857", // Dark green
    text: "#222222",
    textLight: "#666666",
    background: "#ffffff",
    surface: "#f9fafb",
    border: "#e5e7eb",
    accent: "#06b6d4",
  },
  utils: {
    containerClass: "max-w-6xl mx-auto px-4",
    sectionPadding: "py-12 md:py-16",
    cardPadding: "p-6",
    gap: "gap-4",
    gapLarge: "gap-6",
  },
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = "light";
    setThemeState(initialTheme);
    applyTheme(initialTheme);
    setIsMounted(true);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const colors = {
    primary: "#10b981",
    primaryLight: "#d1fae5",
    primaryDark: "#047857",
    text: "#222222",
    textLight: "#666666",
    background: theme === "dark" ? "#1a1a1a" : "#ffffff",
    surface: theme === "dark" ? "#2d2d2d" : "#f9fafb",
    border: theme === "dark" ? "#404040" : "#e5e7eb",
    accent: "#06b6d4",
  };

  const value: ThemeContextType = {
      ...defaultThemeContext,
    theme,
    setTheme,
    toggleTheme,
  
    colors,
  };

  if (!isMounted) return <>{children}</>;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
