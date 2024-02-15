import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [{
          name: 'Inter',
          // local: 'Inter',
          src: [ './src/assets/fonts/*.woff2', './src/assets/fonts/*.woff' ],
          transform(font) {
            if (font.basename === 'Inter-Regular') {
              font.weight = 400
            }

            if (font.basename === 'Inter-Medium') {
              font.weight = 500
            }

            if (font.basename === 'Inter-SemiBold') {
              font.weight = 600
            }

            return font
          }
        }],
        display: 'auto',
        preload: true,
        // prefetch: false,
        injectTo: 'head-prepend',
      },
    })
  ],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@themes': '/src/themes',
      '@consts': '/src/consts',
      '@interfaces': '/src/interfaces',
      '@assets': '/src/assets',
      '@styles': '/src/styles'
    }
  },

})
