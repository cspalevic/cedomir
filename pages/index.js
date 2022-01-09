import React from "react";
import Head from "next/head";
import {
  LocationMarkerIcon,
  AcademicCapIcon,
  OfficeBuildingIcon,
  AtSymbolIcon,
  CodeIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/solid";
import Text from "../components/Text";
import Toggle from "../components/Toggle";
import Link from "../components/Link";
import { useContent } from "../utils/content";
import { useTheme } from "../utils/theme";

const Home = () => {
  const content = useContent("home");
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>{content["title"]}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col md:flex-row items-center sm:mx-5 lg:w-[72rem] space-x-10 space-y-5">
        <div className="flex flex-row md:flex-col space-y-5 space-x-5 md:space-x-0 items-center md:items-baseline">
          <img
            alt={content["profilePictureAlt"]}
            className="h-auto min-w-175 max-w-325 rounded-full border-2 border-sky-500"
            src="/me.jpg"
          />
          <div className="space-y-5">
            <div className="space-y-1">
              <Text Icon={LocationMarkerIcon} text={content["location"]} />
              <Text Icon={AcademicCapIcon} text={content["college"]} />
              <Text Icon={OfficeBuildingIcon} text={content["job"]} />
              <Text Icon={AtSymbolIcon} text={content["email"]} />
              <Text Icon={CodeIcon} text={content["githbubUsername"]} />
            </div>
            <Toggle
              Icon={theme.isDarkMode ? MoonIcon : SunIcon}
              title={content["themeToggleTitle"]}
              onClick={theme.toggleTheme}
              className="hidden md:flex"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center space-y-10">
          <p className="flex-1 text-gray-800 dark:text-gray-50">
            {content["introduction"]}
          </p>
          <nav className="hidden md:flex flex-row space-x-8">
            <Link href="/resume" text={content["resumeLinkText"]} />
            <Link href="/blog" text={content["blogLinkText"]} />
            <Link href="/projects" text={content["projectsLinkText"]} />
          </nav>
        </div>
      </main>
    </>
  );
};

export default Home;
