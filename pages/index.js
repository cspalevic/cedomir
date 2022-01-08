import React, { useState } from "react";
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
import { useConfig } from "../utils/config";

const Home = () => {
   const content = useContent("home");
   const config = useConfig("flags");
   const theme = useTheme();

   return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-neutral-50 dark:bg-neutral-800">
         <Head>
            <title>{content["title"]}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="flex sm:flex-col lg:flex-row items-center lg:w-[72rem] space-x-5">
            <div className="flex flex-col min-w-fit space-y-5">
               <img
                  alt={content["profilePictureAlt"]}
                  className="bg-auto bg-center rounded-full border-2 border-sky-500"
                  src="/me.jpg"
               />
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
               />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-10">
               <p className="flex-1 text-gray-800 dark:text-gray-50">
                  {content["introduction"]}
               </p>
               <div className="flex flex-row space-x-8">
                  {config.showResume && (
                     <Link href="/resume" text={content["resumeLinkText"]} />
                  )}
                  {config.showBlog && (
                     <Link href="/blog" text={content["blogLinkText"]} />
                  )}
                  {config.showProjects && (
                     <Link
                        href="/projects"
                        text={content["projectsLinkText"]}
                     />
                  )}
               </div>
            </div>
         </main>
      </div>
   );
};

export default Home;
