import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Road/",
  plugins: [react()],
  server: {
    allowedHosts: ["ian-keyboard-abilities-bases.trycloudflare.com"],
  },
});
