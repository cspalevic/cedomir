import React from "react";

const Text = ({ Icon = null, text }) => (
   <div className="flex flex-row">
      {Icon ? <Icon className="w-6 text-gray-800 dark:text-gray-50 pr-1" /> : null}
      <span className="text-gray-800 dark:text-gray-50">{text}</span>
   </div>
);

export default Text;