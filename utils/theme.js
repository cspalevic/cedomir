import { useState, useEffect } from "react";

export const useTheme = () => {
   const [isDarkMode, setIsDarkMode] = useState(false);

   useEffect(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
   }, []);

   const toggleTheme = () => {
      let fn = isDarkMode ? "remove" : "add";
      document.documentElement.classList[fn]("dark");
      setIsDarkMode(!isDarkMode);
   };

   return {
      isDarkMode,
      toggleTheme,
   };
};
