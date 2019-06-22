/**
 * Return a random phrase
 */
export const cleverBotPhrases = (): string => {
   let phrases = [
      'I got ya now, bot!',
      'Yeah, you thought you were clever, didn\'t you?',
      'Not today, satan!',
      'Naw',
      'No.',
      'Still, no.',
      'Hmmm, let me think about it... No.'
   ];
   return phrases[Math.floor(Math.random() * Math.floor(phrases.length))];
}

/**
* URL Encode your data
*/
export const encode = (data: { [key: string]: string }) => {
   return Object.keys(data).map((key: string) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
   }).join('&');
}

/**
* Get the value of a cookie given its name
*/
export const getCookie = (name: string): string => {
   let cookies = document.cookie.split('; ');
   let value = '';
   cookies.forEach((cookie) => {
      let x = cookie.split('=');
      if (x[0].trimLeft().trimRight().localeCompare(name) === 0) value = x[1];
   });
   return value;
}

/**
* Create a new cookie
*/
export const setCookie = (name: string, value: number, expirationDate: string = '') => {
   document.cookie = name + '=' + value + '; expires=' + expirationDate;
}