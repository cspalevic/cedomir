export const useConfig = (name) => {
   const config = require(`../config/${name}.json`);
   return config;
};
