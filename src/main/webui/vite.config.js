import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      entry: './main.js',
      name: 'libs',
      fileName: 'main'
    }
  },
  // depending on your application, base can also be "/"
  base: '',
  plugins: [tsconfigPaths()],
  server: {},
})