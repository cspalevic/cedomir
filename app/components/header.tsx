import React from "react";
import { useTheme } from "~/providers/theme";
import { IconName } from "./icon";
import IconButton from "./iconButton";
import Link from "./link";

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <header className="flex min-h-[4rem] w-full flex-row-reverse items-center justify-between px-[2rem]">
      <div className="flex items-center">
        <IconButton
          onClick={theme.toggleTheme}
          iconProps={
            theme.isDarkMode
              ? {
                  as: IconName.Sun,
                  size: "lg",
                  className: "transition dark:hover:text-yellow-600",
                }
              : {
                  as: IconName.Moon,
                  size: "lg",
                  className: "transition hover:text-gray-400",
                }
          }
        />
      </div>
      <nav className="flex items-center">
        {[
          { href: "/", text: "Home" },
          { href: "/resume", text: "Resume" },
          { href: "/blog", text: "Blog" },
        ].map(({ href, text }) => (
          <Link key={href} to={href}>
            {text}
          </Link>
        ))}
      </nav>
      <div></div>
    </header>
  );
};

export default Header;
