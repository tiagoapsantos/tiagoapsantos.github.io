// Gera os CV (PT e EN) em PDF A4 a partir de um modelo HTML (o mesmo desenho dos CV anteriores).
// Uso: node scripts/cv/gerar-cv.mjs public/cv   (escreve Tiago_Santos_CV_PT.pdf e Tiago_Santos_CV_EN.pdf)
import { createRequire } from 'node:module'
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
// Precisa do Playwright e do Microsoft Edge: npm i -D @playwright/test (ou ajustar o caminho abaixo)
const require = createRequire(process.env.PLAYWRIGHT_DE || import.meta.url)
const { chromium } = require('@playwright/test')

const AQUI = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'))
const DESTINO = process.argv[2] || AQUI
const foto = 'data:image/jpeg;base64,' + readFileSync(path.join(AQUI, 'foto.jpg')).toString('base64')
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const CV = {
  PT: {
    lang: 'pt-PT',
    subtitulo: 'Desenvolvimento Web | Operações digitais | Software assistido por IA',
    contacto: 'CONTACTO',
    perfil: ['PERFIL', 'Experiência profissional em marketing digital, conteúdos, design gráfico aplicado à publicidade, operações, atendimento e gestão de websites. Competências de desenvolvimento Web demonstradas em projectos pessoais funcionais, com apoio de IA ao desenvolvimento.'],
    competencias: ['COMPETÊNCIAS PROFISSIONAIS', ['Marketing digital e conteúdos', 'Design gráfico', 'Gestão de websites e e-commerce', 'Atendimento e operações', 'Gestão de conteúdos digitais', 'Tradução EN-PT', 'Suporte informático']],
    tecnicas: ['TÉCNICAS - PROJECTOS PESSOAIS', 'HTML, CSS, JavaScript, TypeScript, Astro, React, Next.js e Payload CMS. Validação, testes e publicação web demonstrados em projectos pessoais.'],
    interesses: ['INTERESSES PROFISSIONAIS', 'AI Automation & Digital Operations; Web Development; AI-assisted Software Development. Integração de IA, APIs e cloud como áreas de interesse, não experiência comercial comprovada.'],
    idiomas: ['IDIOMAS', ['Português (nativo)', 'Inglês (avançado)', 'Espanhol (intermédio)', 'Francês (básico)']],
    projectos: [
      'PROJECTOS EM DESTAQUE',
      'Website profissional e demonstrações pessoais, com estudos de caso e código disponíveis no Portfolio.',
      [
        ['Capítulo', 'Plataforma de sites para confrarias e a sua federação, com painel de gestão (CMS) multi-cliente simples. Next.js, Payload CMS e TypeScript; pesquisa, calendário e regras de acesso testadas.'],
        ['FrameFlow Studio', 'Editor de animações 2D a partir de imagens estáticas, com keyframes, timeline e exportação automática de vídeo. React, TypeScript e Remotion; demonstração técnica.'],
        ['Pedro Pires — Illustration and Design', 'Website bilingue para ilustrador com 81 obras, filtros e lightbox. Astro, TypeScript e WebP; projecto profissional publicado.'],
      ],
    ],
    experiencia: [
      'EXPERIÊNCIA PROFISSIONAL',
      [
        ['2020-2022 | Gestor de Conteúdo Digital | Tradutor Freelancer', 'Gestão de backoffice de websites e redes sociais; criação de conteúdos digitais, promocionais e publicitários; tradução de inglês para português.'],
        ['2015-2019 | Clínica ForbabiesBrain | Operações', 'Gestão diária de um spa para bebés focado no desenvolvimento multissensorial em meio aquático. Atendimento, marcações, gestão de website e loja online, redes sociais e promoção de serviços, eventos e workshops.'],
        ['2010-2013 | Gestor de Conteúdo Digital', 'Gestão de backoffice de websites e redes sociais, incluindo conteúdos criativos e publicitários.'],
        ['2009-2010 | Vasco Coutinho - Impressões Gráficas', 'Apoio em diversas tarefas no sector da impressão gráfica.'],
      ],
    ],
    formacao: [
      'FORMAÇÃO',
      [
        ['2023-2024 | Curso Técnico de Comunicação e Marketing', 'Serviços de Formação Profissional do Porto.'],
        ['2005-2008 | Comunicação, Relações Públicas, Informática e Publicidade', 'Escola Profissional Profitecla.'],
      ],
    ],
  },
  EN: {
    lang: 'en',
    subtitulo: 'Web development | Digital operations | AI-assisted software development',
    contacto: 'CONTACT',
    perfil: ['PROFILE', 'Professional experience in digital marketing, content, advertising-focused graphic design, operations, customer service and website management. Web development skills demonstrated through functional personal projects, with AI-assisted development.'],
    competencias: ['PROFESSIONAL SKILLS', ['Digital marketing and content', 'Graphic design', 'Website and e-commerce administration', 'Customer service and operations', 'Digital content management', 'EN-PT translation', 'IT support']],
    tecnicas: ['TECHNICAL - PERSONAL PROJECTS', 'HTML, CSS, JavaScript, TypeScript, Astro, React, Next.js and Payload CMS. Validation, testing and web deployment demonstrated through personal projects.'],
    interesses: ['CAREER INTERESTS', 'AI Automation & Digital Operations; Web Development; AI-assisted Software Development. AI, API and cloud integration are interests, not demonstrated commercial experience.'],
    idiomas: ['LANGUAGES', ['Portuguese (native)', 'English (advanced)', 'Spanish (intermediate)', 'French (basic)']],
    projectos: [
      'SELECTED PROJECTS',
      'Professional website and personal demos, with case studies and source code available through the Portfolio.',
      [
        ['Capítulo', 'Website platform for gastronomic brotherhoods and their federation, with a simple multi-tenant admin panel (CMS). Next.js, Payload CMS and TypeScript; search, calendar and tested access rules.'],
        ['FrameFlow Studio', '2D animation editor built from still images, with keyframes, timeline and automated video export. React, TypeScript and Remotion; technical demo.'],
        ['Pedro Pires — Illustration and Design', 'Bilingual illustrator website with 81 artworks, filters and lightbox. Astro, TypeScript and WebP; published professional project.'],
      ],
    ],
    experiencia: [
      'PROFESSIONAL EXPERIENCE',
      [
        ['2020-2022 | Digital Content Manager | Freelance Translator', 'Website back-office and social media management; digital, promotional and advertising content; translation from English into Portuguese.'],
        ['2015-2019 | ForbabiesBrain Clinic | Operations', 'Day-to-day management of a baby spa focused on multisensory development in an aquatic environment. Customer service, bookings, website and online-store administration, social media, and promotion of services, events and workshops.'],
        ['2010-2013 | Digital Content Manager', 'Website back-office and social media management, including creative and advertising content.'],
        ['2009-2010 | Vasco Coutinho - Graphic Printing', 'Support across a range of tasks in the graphic printing sector.'],
      ],
    ],
    formacao: [
      'EDUCATION',
      [
        ['2023-2024 | Technical Course in Communication and Marketing', 'Porto Vocational Training Services.'],
        ['2005-2008 | Communication, Public Relations, IT and Advertising', 'Profitecla Vocational School.'],
      ],
    ],
  },
}

const html = (c) => `<!doctype html><html lang="${c.lang}"><head><meta charset="utf-8"><title>Tiago Santos — CV</title>
<style>
@page { size: A4; margin: 0; }
* { box-sizing: border-box; }
body { margin: 0; font-family: 'Segoe UI', sans-serif; color: #3d4652; }
.pagina { width: 210mm; height: 297mm; padding: 10.5mm 11mm 0 10.5mm; position: relative; }
.topo { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1.1px solid #1f6474; padding-bottom: 5.4mm; }
h1 { margin: 0; font-size: 29pt; font-weight: 700; color: #1b2633; letter-spacing: .3px; line-height: 1.05; }
.sub { margin: 3mm 0 0; font-size: 10.6pt; color: #1f6474; }
.foto { width: 24mm; height: 24mm; border-radius: 50%; object-fit: cover; margin-right: -.5mm; margin-top: 1.4mm; }
.colunas { display: grid; grid-template-columns: 58mm 1fr; column-gap: 9.3mm; margin-top: 7mm; }
h2 { margin: 0 0 2.2mm; font-size: 10.2pt; font-weight: 700; color: #1b2633; }
.esq h2 { margin-top: 5.6mm; } .esq h2:first-child { margin-top: 0; }
.esq p, .esq li { font-size: 9.5pt; line-height: 1.42; margin: 0; }
.esq ul { list-style: none; padding: 0; margin: 0; }
.esq a { color: #1f6474; }
.dir section + section { margin-top: 4.9mm; }
.dir .intro, .dir h3.arial, .dir .arial { font-family: Arial, 'Liberation Sans', sans-serif; }
.dir h2.arial { font-family: Arial, 'Liberation Sans', sans-serif; font-size: 11pt; }
.dir .intro { font-size: 9.8pt; color: #4b5563; margin: 0 0 3.6mm; line-height: 1.38; }
.item { margin-bottom: 3.1mm; }
.item h3 { margin: 0 0 .9mm; font-size: 10.2pt; font-weight: 700; color: #1b2633; }
.item p { margin: 0; font-size: 10.4pt; line-height: 1.36; }
.form p { font-size: 9.5pt; }
</style></head><body><div class="pagina">
<header class="topo"><div><h1>TIAGO SANTOS</h1><p class="sub">${esc(c.subtitulo)}</p></div><img class="foto" src="${foto}" alt=""></header>
<div class="colunas">
<aside class="esq">
<h2>${c.contacto}</h2><ul><li>+351 913 308 219</li><li>tapssantos@gmail.com</li><li>Porto, Portugal</li>
<li><a href="https://tiagoapsantos.github.io/">Portfolio</a></li><li><a href="https://github.com/tiagoapsantos">GitHub</a></li><li><a href="https://www.linkedin.com/in/tiago-ap-santos/">LinkedIn</a></li></ul>
<h2>${c.perfil[0]}</h2><p>${esc(c.perfil[1])}</p>
<h2>${c.competencias[0]}</h2><ul>${c.competencias[1].map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
<h2>${c.tecnicas[0]}</h2><p>${esc(c.tecnicas[1])}</p>
<h2>${c.interesses[0]}</h2><p>${esc(c.interesses[1])}</p>
<h2>${c.idiomas[0]}</h2><ul>${c.idiomas[1].map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
</aside>
<main class="dir">
<section><h2 class="arial">${c.projectos[0]}</h2><p class="intro">${esc(c.projectos[1])}</p>
${c.projectos[2].map(([t, d]) => `<div class="item"><h3${t.startsWith('Pedro') ? ' class="arial"' : ''}>${esc(t)}</h3><p${t.startsWith('Pedro') ? ' class="arial"' : ''}>${esc(d)}</p></div>`).join('')}</section>
<section><h2>${c.experiencia[0]}</h2>${c.experiencia[1].map(([t, d]) => `<div class="item"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</section>
<section class="form"><h2>${c.formacao[0]}</h2>${c.formacao[1].map(([t, d]) => `<div class="item"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</section>
</main></div></div></body></html>`

const b = await chromium.launch({ channel: 'msedge', headless: true })
const p = await b.newPage()
for (const [lingua, c] of Object.entries(CV)) {
  const h = html(c)
  writeFileSync(path.join(AQUI, `cv-${lingua}.html`), h)
  await p.setContent(h, { waitUntil: 'load' })
  const altura = await p.evaluate(() => document.querySelector('.colunas').getBoundingClientRect().bottom)
  console.log(lingua, 'fim do conteúdo (px, página = 1123):', Math.round(altura))
  await p.pdf({ path: path.join(DESTINO, `Tiago_Santos_CV_${lingua}.pdf`), format: 'A4', printBackground: true, preferCSSPageSize: true })
  await p.setViewportSize({ width: 794, height: 1123 })
  await p.screenshot({ path: path.join(AQUI, `cv-${lingua}.png`) })
}
await b.close()
