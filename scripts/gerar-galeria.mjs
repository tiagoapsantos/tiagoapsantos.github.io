// Gera as versões leves das imagens da página de projetos (galeria 1425:904, cortadas a partir do topo).
// Para cada uma das duas primeiras imagens de cada projeto: <nome>-640.webp e <nome>-1100.webp em
// public/images/projects/galeria/. Correr depois de acrescentar ou trocar imagens: node scripts/gerar-galeria.mjs
import { mkdir, readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const PROJETOS = 'src/content/projects'
const PUBLICO = 'public'
const SAIDA = 'public/images/projects/galeria'
const PROPORCAO = 904 / 1425
const LARGURAS = [640, 1100]

export const nomeGaleria = (src) => src.replace(/^\/images\/projects\//, '').replace(/\.(webp|jpe?g|png)$/i, '').replace(/\//g, '-')

await mkdir(SAIDA, { recursive: true })
const feitos = new Set()
for (const lingua of await readdir(PROJETOS)) {
  for (const f of await readdir(path.join(PROJETOS, lingua))) {
    if (!f.endsWith('.md')) continue
    const texto = (await readFile(path.join(PROJETOS, lingua, f), 'utf8')).replace(/\r\n/g, '\n')
    const bloco = texto.match(/\nimages:\n([\s\S]*?)\n---/)?.[1] ?? ''
    const fontes = [...bloco.matchAll(/- src: (\S+)/g)].map((m) => m[1]).slice(0, 2)
    for (const src of fontes) {
      if (feitos.has(src)) continue
      feitos.add(src)
      for (const largura of LARGURAS) {
        const altura = Math.round(largura * PROPORCAO)
        const destino = path.join(SAIDA, `${nomeGaleria(src)}-${largura}.webp`)
        await sharp(path.join(PUBLICO, src)).resize(largura, altura, { fit: 'cover', position: 'top' }).webp({ quality: 78 }).toFile(destino)
      }
    }
  }
}
console.log(`Galeria: ${feitos.size} imagens × ${LARGURAS.length} tamanhos em ${SAIDA}`)
