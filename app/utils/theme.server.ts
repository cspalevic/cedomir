import { getCookie } from "./cookies";
import { CookieKeys, Theme } from "~/utils/constants";

export const detectTheme = (request: Request) => {
  const cookies = request.headers.get("Cookie");
  const theme = getCookie(CookieKeys.Theme, cookies);
  return theme === Theme.Dark ? Theme.Dark : Theme.Light;
};
