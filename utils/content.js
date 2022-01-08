export const useContent = (name) => {
   const content = require(`../content/${name}.json`);
   return content;
};
