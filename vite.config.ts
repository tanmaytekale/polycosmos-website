import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {"@": path.resolve(__dirname, "./src")}
  },
  build: {
    outDir: './', // this will build files in root
    emptyOutDir: false, // so it doesn't delete your git files
  }
}));

