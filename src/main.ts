import { importSvg, svgList } from 'unplugin-svg-transformer/icons'

const svg: SvgName = 'vite'

importSvg(svg).then((res) => {
  document.getElementById('vite')!.innerHTML = res
})

importSvg('social/twitter').then((res) => {
  document.getElementById('twitter')!.innerHTML = res
})

let list: string[] = []
let ul = document.getElementById('list')!

for (const item of Object.entries(svgList)) {
  let name = item[0]
  list.push(name)
  ul.innerHTML += `<li>${name}</li>`
}
