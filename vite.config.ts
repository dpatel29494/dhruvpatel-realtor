import { defineConfig } from "vite"; // <--- THIS LINE IS MISSING OR BROKEN
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: '/dhruvpatel-realtor/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
