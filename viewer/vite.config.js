import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const viewerDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(viewerDir, "..");

export default defineConfig({
  root: viewerDir,
  plugins: [react()],
  server: {
    fs: {
      allow: [repoRoot],
    },
  },
});
