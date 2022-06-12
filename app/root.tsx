import React from "react";
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";

import Page from "~/components/page";
import NotFound from "./components/notFound";
import ThemeProvider from "./providers/theme";
import { detectTheme } from "~/utils/theme.server";
import type { Theme } from "~/utils/constants";

export const CatchBoundary = () => {
  return (
    <ThemeProvider>
      <Page>
        <NotFound />
      </Page>
    </ThemeProvider>
  );
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Charlie Spalevic",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  session: {
    theme: Theme;
  };
};

export const loader: LoaderFunction<LoaderData> = async ({ request }) => {
  const theme = detectTheme(request);
  return json({
    session: {
      theme,
    },
  });
};

const App: React.FC = () => {
  const data = useLoaderData();
  return (
    <ThemeProvider theme={data.session.theme}>
      <Page>
        <Outlet />
      </Page>
    </ThemeProvider>
  );
};

export default App;
