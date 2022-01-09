import React from "react";
import { default as NextLink } from "next/link";

const Link = ({ href = "#", text = "", className = "" }) => (
   <NextLink href={href}>
      <p className={`text-sky-600 cursor-pointer transition-all border-b-solid border-b-transparent border-b-2 hover:border-b-sky-600 ${className}`}>{text}</p>
   </NextLink>
);

export default Link;