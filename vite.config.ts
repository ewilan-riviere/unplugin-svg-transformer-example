import { defineConfig } from 'vite'
import SvgTransformer from 'unplugin-svg-transformer/vite'

export default defineConfig({
  plugins: [
    SvgTransformer({
      svg: {
        currentColor: true,
      }
    }),
  ],
})
