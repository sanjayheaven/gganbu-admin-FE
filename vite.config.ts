import { defineConfig, type PluginOption } from "vite"
import react from "@vitejs/plugin-react"
import viteCompression from "vite-plugin-compression"
import { visualizer } from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // default '/', need to modify when deploy to GitHub Pages
  server: { port: 9527 },
  plugins: [visualizer() as PluginOption, react(), viteCompression()],

  esbuild: {
    // pure: ["console.log"],
    drop: ["console", "debugger"],
  },
  build: {
    chunkSizeWarningLimit: 500,
    minify: "esbuild", // same as default value
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
  },
})

/***
 * 
 * (!) Some chunks are larger than 500 KiB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/guide/en/#outputmanualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
 */
