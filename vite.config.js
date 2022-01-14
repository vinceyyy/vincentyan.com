import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), WindiCSS({
    scan: {
      dirs: ['.'], // all files in the cwd
      fileExtensions: ['svelte', 'js', 'ts'], // also enabled scanning for js/ts
    },
  }),]
})
