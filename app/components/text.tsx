import React from "react";

type Props = {
  as: string;
  className?: string;
  chidlren: React.ReactNode;
  [rest: string]: any;
};

const classes = "text-gray-800 dark:text-gray-50";

const Text: React.FC<Props> = ({ as, className, children, rest }) => {
  const Component = as;
  let componentClassName = classes;
  if (className) componentClassName += ` ${className}`;
  return (
    <Component className={componentClassName} {...rest}>
      {children}
    </Component>
  );
};

export default Text;
