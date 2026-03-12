import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";

export const ThemeToggle = (): JSX.Element => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      ) : (
        <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};