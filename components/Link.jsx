import React from "react";
import { default as NextLink } from "next/link";

const Link = ({ href, text }) => (
   <NextLink href={href}>
      <p className="text-sky-600 cursor-pointer transition-all border-b-solid border-b-transparent border-b-2 hover:border-b-sky-600">{text}</p>
   </NextLink>
);

export default Link;