import { defineConfig } from 'vite'
import SvgTransformer from 'unplugin-svg-transformer/vite'

export default defineConfig({
  plugins: [
    SvgTransformer({
      global: true,
      svg: {
        currentColor: true,
      }
    }),
  ],
})
