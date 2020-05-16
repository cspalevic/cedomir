import React from "react";
import { FaMoon, FaSun } from 'react-icons/fa';

interface Props {
   onClick: () => void;
}

const ThemeToggle: React.FC<Props> = (props: Props) => {
   return (
      <div className="theme-toggle-container">
         <div className="theme-toggle" onClick={() => props.onClick()}>
            <div className="theme-hider"></div>
            <FaSun size={24} className="sun-icon" />
            <FaMoon size={24} />
         </div>
      </div>
   )
}

export default ThemeToggle;