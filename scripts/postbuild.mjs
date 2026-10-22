// Post-processes the prerendered site in dist/client for GitHub Pages:
//  - turns the prerendered /404 page into a static, script-free 404.html
//  - makes sure .nojekyll exists
//  - checks that every content file produced an HTML page
import fs from 'node:fs'
import path from 'node:path'

const outDir = path.resolve('dist/client')
const fail = (message) => {
  console.error(`postbuild: ${message}`)
  process.exit(1)
}

if (!fs.existsSync(outDir)) fail(`${outDir} not found — run vite build first`)

// 404.html: GitHub Pages serves it for any unknown URL. Hydrating it there would
// mismatch the URL, so ship it as plain HTML + CSS.
const notFoundFile = path.join(outDir, '404.html')
if (!fs.existsSync(notFoundFile)) fail('404.html was not prerendered')
const notFoundHtml = fs
  .readFileSync(notFoundFile, 'utf8')
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, '')
fs.writeFileSync(notFoundFile, notFoundHtml)

fs.writeFileSync(path.join(outDir, '.nojekyll'), '')

const expected = ['index.html', '404.html']
const slugsByLang = new Map()
for (const lang of fs.readdirSync('content')) {
  const dir = path.join('content', lang)
  if (!fs.statSync(dir).isDirectory()) continue
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md')) continue
    const slug = file.slice(0, -3)
    if (!slugsByLang.has(lang)) slugsByLang.set(lang, new Set())
    slugsByLang.get(lang).add(slug)
    expected.push(slug === 'index' ? `${lang}/index.html` : `${lang}/guides/${slug}/index.html`)
  }
}
const missing = expected.filter((file) => !fs.existsSync(path.join(outDir, file)))
if (missing.length) fail(`missing prerendered pages:\n  ${missing.join('\n  ')}`)

// Not fatal (the language switcher falls back to the home page), but worth knowing.
for (const [lang, slugs] of slugsByLang) {
  for (const [otherLang, otherSlugs] of slugsByLang) {
    if (otherLang === lang) continue
    for (const slug of slugs) {
      if (!otherSlugs.has(slug)) console.warn(`postbuild: warning: content/${lang}/${slug}.md has no content/${otherLang}/${slug}.md`)
    }
  }
}

console.log(`postbuild: ${expected.length} pages OK in ${path.relative(process.cwd(), outDir)}`)
