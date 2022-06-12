import React from "react";
import { Link as RemixLink } from "@remix-run/react";

type Props = {
  to: string;
  children?: React.ReactNode;
  [rest: string]: any;
};

const classes =
  "text-sky-600 mx-3 cursor-pointer transition-all border-b-solid border-b-transparent border-b-2 hover:border-b-sky-600";

export const Link: React.FC<Props> = ({ to, children, ...rest }) => {
  return (
    <RemixLink to={to} className={classes} {...rest}>
      {children}
    </RemixLink>
  );
};

export default Link;
