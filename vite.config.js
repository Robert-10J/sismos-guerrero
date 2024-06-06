import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/graficas.html'),
        nestedMedidas: resolve(__dirname, 'nested/medidas.html'),
        nestedScript: resolve(__dirname, 'nested/map.js'),
      },
    },
  },
})