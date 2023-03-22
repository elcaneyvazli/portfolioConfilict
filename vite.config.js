import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
  envPrefix: "REACT_APP_",
  build: {
    outDir: "build",
  },
  plugins: [
    react(),
    EnvironmentPlugin({
      API_URL: "https://localhost:7204/api/",
      API_KEY: "https://localhost:7204/",
      GENERATE_SOURCEMAP: false,
    }),
    envCompatible(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  envDir: "./.env",
});
