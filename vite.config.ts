import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/your-repo-name/', // <-- replace with your GitHub repo name (case-sensitive)
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
