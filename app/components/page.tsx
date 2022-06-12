import React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./header";
import { useTheme } from "~/providers/theme";

type Props = {
  children?: React.ReactNode;
};

const classes = "h-full";

const Page: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  let className = classes;
  if (theme?.isDarkMode) className += " dark";
  return (
    <html lang="en" className={className}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex h-full flex-col bg-neutral-50 dark:bg-neutral-900">
        <Header />
        <main className="flex w-full flex-1 flex-row justify-center  pb-10">
          <div className="h-full px-5 md:w-[72rem]">{children}</div>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default Page;
