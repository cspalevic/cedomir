import "../styles/globals.css";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import Toggle from "../components/Toggle";
import Link from "next/link";
import { useTheme } from "../utils/theme";
import { useContent } from "../utils/content";

const App = ({ Component, pageProps }) => {
  const theme = useTheme();
  const content = useContent("home");
  const sideBar = useRef(null);

  const toggleSidebar = () => {
    if (!sideBar.current) return;
    const isOpen = sideBar.current.getAttribute("state") === "open";
    sideBar.current.setAttribute("state", isOpen ? "closed" : "open");
  };

  return (
    <div className="h-screen w-full bg-neutral-50 dark:bg-neutral-900 relative flex flex-col md:flex-row justify-start md:justify-center items-center prose max-w-full">
      <header className="md:hidden w-full min-h-[4rem] mb-4 flex justify-end">
        <button onClick={toggleSidebar} title="Open sidebar">
          <MenuIcon className="w-10 text-gray-800 dark:text-gray-50 pr-1" />
        </button>
      </header>
      <Component {...pageProps} />
      <aside
        ref={sideBar}
        className="md:hidden h-screen absolute top-0 right-0 bg-neutral-300 dark:bg-neutral-800 shadow-[-3px_0_10px_0_rgba(0,0,0,0.3)] transition-all duration-500 w-0 overflow-hidden open:overflow-auto open:w-2/5 open:flex open:flex-col open:py-4 open:justify-between"
        state="closed"
      >
        <button
          className="pb-2 px-4 w-inherit"
          onClick={toggleSidebar}
          title="Close sidebar"
        >
          <XIcon className="w-12 text-gray-800 dark:text-gray-50 pr-1" />
        </button>
        <nav className="flex flex-col grow w-inherit">
          <div className="px-4 py-1 border-b-solid border-b-2 border-b-neutral-400 dark:border-b-neutral-600">
            <Link passHref={true} href="/">
              <p className="text-sky-600 m-0">{content["homeLinkText"]}</p>
            </Link>
          </div>
          <div className="px-4 py-1 border-b-solid border-b-2 border-b-neutral-400 dark:border-b-neutral-600">
            <Link passHref={true} href="/resume">
              <p className="text-sky-600 m-0">{content["resumeLinkText"]}</p>
            </Link>
          </div>
          <div className="px-4 py-1 border-b-solid border-b-2 border-b-neutral-400 dark:border-b-neutral-600">
            <Link passHref={true} href="/blog">
              <p className="text-sky-600 m-0">{content["blogLinkText"]}</p>
            </Link>
          </div>
          <div className="px-4 py-1 border-b-solid border-b-2 border-b-neutral-400 dark:border-b-neutral-600">
            <Link passHref={true} href="/projects">
              <p className="text-sky-600 m-0">{content["projectsLinkText"]}</p>
            </Link>
          </div>
        </nav>
        <div className="px-4 w-inherit">
          <Toggle
            Icon={theme.isDarkMode ? MoonIcon : SunIcon}
            title={content["themeToggleTitle"]}
            onClick={theme.toggleTheme}
          />
        </div>
      </aside>
    </div>
  );
};

export default App;
