import React from "react";
import Icon from "./icon";
import type { Props as IconProps } from "./icon";

type Props = {
  onClick?: Function;
  iconProps: IconProps;
  [rest: string]: any;
};

const IconButton: React.FC<Props> = ({ onClick, iconProps, ...rest }) => (
  <button onClick={onClick} {...rest}>
    <Icon {...iconProps} />
  </button>
);

export default IconButton;
