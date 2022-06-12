import React, { createContext, useContext, useState } from "react";
import { CookieKeys, Theme } from "~/utils/constants";
import { setCookie, deleteCookie, getCookie } from "~/utils/cookies";

type Context = {
  isDarkMode: boolean;
  toggleTheme: Function;
};

const ThemeContext = createContext<Context | undefined>(undefined);

type Props = {
  theme?: Theme;
  children: React.ReactNode;
};

const isDarkTheme = (theme?: Theme) => {
  if (!theme) return getCookie(CookieKeys.Theme) === Theme.Dark;
  return theme === Theme.Dark;
};

const ThemeProvider: React.FC<Props> = ({ theme, children }) => {
  const [isDarkMode, setIsDarkMode] = useState(isDarkTheme(theme));

  const toggleTheme = () => {
    if (isDarkMode) {
      deleteCookie(CookieKeys.Theme);
    } else {
      setCookie(CookieKeys.Theme, Theme.Dark);
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Context => {
  const theme = useContext<Context>(ThemeContext);
  return theme;
};

export default ThemeProvider;
