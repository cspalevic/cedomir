/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// Tell this function where to look for the tsconfig.json file
// https://github.com/aleclarson/vite-tsconfig-paths
const tsConfig = tsconfigPaths({ root: "../" });
export default defineConfig({
  plugins: [react(), tsConfig],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.ts"],
  },
});
