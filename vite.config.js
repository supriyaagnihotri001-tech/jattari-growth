import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // OneDrive can hold this large asset open, causing chokidar to emit EBUSY.
      ignored: [
        "**/src/assets/Images/Heroimg.png",
        "**/src/assets/Images/Heroimg1.png",
      ],
    },
  },
});
