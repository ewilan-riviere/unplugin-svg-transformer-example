/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-svg-transformer
export {};

declare global {
  export type SvgName = 'download' | 'social/twitter' | 'vite' | 'vue' | 'default'
  interface Window {
    svgList: Record<SvgName, () => Promise<{ default: string }>>
    importSvg: (name: SvgName) => Promise<string>
  }
}

window.svgList = window.svgList || {}
window.importSvg = importSvg || function () {}
