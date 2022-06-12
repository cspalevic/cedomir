import React from "react";
import {
  SunIcon,
  MoonIcon,
  LocationMarkerIcon,
  AcademicCapIcon,
  OfficeBuildingIcon,
  AtSymbolIcon,
  CodeIcon,
  ExternalLinkIcon,
  DownloadIcon,
} from "@heroicons/react/outline";

export enum IconName {
  Sun,
  Moon,
  Place,
  School,
  Office,
  Email,
  Code,
  ExternalLink,
  Download,
}

type IconSize = "sm" | "lg";

export type Props = {
  as: IconName;
  size?: IconSize;
  className?: string;
  [rest: string]: any;
};

const iconMap: { [iconName: IconName]: React.ReactNode } = {
  [IconName.Sun]: SunIcon,
  [IconName.Moon]: MoonIcon,
  [IconName.Place]: LocationMarkerIcon,
  [IconName.School]: AcademicCapIcon,
  [IconName.Office]: OfficeBuildingIcon,
  [IconName.Email]: AtSymbolIcon,
  [IconName.Code]: CodeIcon,
  [IconName.ExternalLink]: ExternalLinkIcon,
  [IconName.Download]: DownloadIcon,
};

const iconSize: { [size: IconSize]: string } = {
  sm: "w-8",
  lg: "w-10",
};

const classes = "pr-1 text-gray-800 dark:text-gray-50";

const Icon: React.FC<Props> = ({ as, size = "sm", className, ...rest }) => {
  if (!(as in iconMap)) return null;

  const Component = iconMap[as];
  let componentClassNames = `${iconSize[size]} ${classes}`;
  if (className) componentClassNames += ` ${className}`;
  return <Component className={componentClassNames} {...rest} />;
};

export default Icon;
