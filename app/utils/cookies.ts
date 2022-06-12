export const getCookie = (key, cookies = document.cookie) =>
  cookies
    ?.split("; ")
    .find((row) => row.startsWith(`${key}=`))
    ?.split("=")[1];

export const deleteCookie = (key) => {
  document.cookie = `${key}=; Max-Age=0;`;
};

export const setCookie = (key, value) => {
  document.cookie = `${key}=${value}; path=/;`;
};
