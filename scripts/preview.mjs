// Serves dist/client the way GitHub Pages does, under BASE_PATH (default "/"):
// directories -> index.html, "/x" -> 301 "/x/", unknown paths -> 404.html.
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'

const root = path.resolve('dist/client')
const trimmed = (process.env.BASE_PATH ?? '').trim().replace(/^\/+|\/+$/g, '')
const base = trimmed ? `/${trimmed}/` : '/'
const port = Number(process.env.PORT ?? 4173)

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
}

function send(res, status, file) {
  res.writeHead(status, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' })
  fs.createReadStream(file).pipe(res)
}

http
  .createServer((req, res) => {
    const url = new URL(req.url ?? '/', 'http://localhost')
    const pathname = decodeURIComponent(url.pathname)
    if (pathname === base.slice(0, -1)) {
      res.writeHead(301, { location: base + url.search }).end()
      return
    }
    if (pathname.startsWith(base)) {
      const file = path.join(root, pathname.slice(base.length))
      if (file.startsWith(root)) {
        if (fs.existsSync(file) && fs.statSync(file).isFile()) return send(res, 200, file)
        if (fs.existsSync(path.join(file, 'index.html'))) {
          if (!pathname.endsWith('/')) {
            res.writeHead(301, { location: `${pathname}/${url.search}` }).end()
            return
          }
          return send(res, 200, path.join(file, 'index.html'))
        }
      }
    }
    send(res, 404, path.join(root, '404.html'))
  })
  .listen(port, () => console.log(`Serving ${path.relative(process.cwd(), root)} at http://localhost:${port}${base}`))
