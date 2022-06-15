import React from "react";
import { render } from "@testing-library/react";
import Header from "../header";

/**
Tests currently fail with remix run components 
FAIL  app/components/__tests__/header.test.tsx > Nav links are displayed
Error: useHref() may be used only in the context of a <Router> component.

Remix will (hopefully) be providing a custom `render` function so we don't need to mock
any Remix internal functions such as the above
https://github.com/remix-run/remix/discussions/2481
*/

test.skip("Nav links are displayed", () => {
  const base = render(<Header />);

  const nav = base.getByTestId("nav");
  expect(nav).toBeTruthy();
});
