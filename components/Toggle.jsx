import React from "react";

const Toggle = ({ Icon = null, title = "", className = "", onClick }) => (
   <div className={`flex flex-row ${className}`}>
      {Icon ? <Icon className="w-7 text-gray-800 dark:text-gray-50 pr-1" /> : null}
      <button
         onClick={onClick}
         className="dark:bg-sky-700 bg-gray-400 rounded-xl w-12 flex items-center mx-2 px-1 relative"
      >
         <div
            title={title}
            className="bg-white rounded-full w-5 h-5 absolute transition-all duration-300 left-1 dark:left-6"
         />
      </button>
   </div>
);

export default Toggle;