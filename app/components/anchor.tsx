import React from "react";

type Props = {
  href: string;
  className?: string;
  children?: React.ReactNode;
  [rest: string]: any;
};

const classes = "text-sky-600 mx-3";

export const Anchor: React.FC<Props> = ({
  href,
  className,
  children,
  ...rest
}) => {
  let anchorClassName = classes;
  if (className) anchorClassName += ` ${className}`;
  return (
    <a href={href} className={anchorClassName} {...rest}>
      {children}
    </a>
  );
};

export default Anchor;
