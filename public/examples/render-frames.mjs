// render-frames.mjs — transforma uma animação HTML/CSS em MP4 (e um GIF de prévia).
// Turns an HTML/CSS animation into an MP4 (plus a small GIF preview).
//
// Uso / usage:
//   npm init -y && npm install playwright ffmpeg-static
//   npx playwright install chromium
//   node render-frames.mjs countdown.html 12 countdown
//   node render-frames.mjs "countdown.html?dias=15" 12 faltam-15
//
// Argumentos: <arquivo.html[?parametros]> <segundos> <nome-de-saida> [fps=30] [largura=1080]
//
// Como funciona: abre o HTML num Chromium invisível (headless), pausa todas as
// animações CSS, avança o relógio quadro a quadro (document.getAnimations) e tira
// uma captura de cada quadro. Depois o ffmpeg junta os PNGs num MP4 H.264.
// Nenhum quadro é perdido, mesmo em computador lento. Só funciona para animações
// feitas com CSS (animation/transition) ou Web Animations API — não para canvas
// ou animações movidas por setTimeout/requestAnimationFrame.

import { chromium } from 'playwright';
import ffmpegPath from 'ffmpeg-static';
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const [input, seconds = '12', name = 'animacao', fpsArg = '30', widthArg = '1080'] = process.argv.slice(2);
if (!input) {
  console.error('Uso: node render-frames.mjs <arquivo.html[?params]> <segundos> <nome> [fps] [largura]');
  process.exit(1);
}
const fps = Number(fpsArg);
const width = Number(widthArg);
const height = Math.round((width * 16) / 9 / 2) * 2; // 9:16, altura par (exigência do H.264)
const total = Math.round(Number(seconds) * fps);

const [file, query = ''] = input.split('?');
const url = pathToFileURL(resolve(file)).href + (query ? `?${query}` : '');
const framesDir = resolve(`frames-${name}`);
rmSync(framesDir, { recursive: true, force: true });
mkdirSync(framesDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);

for (let i = 0; i < total; i++) {
  const ms = (i * 1000) / fps;
  await page.evaluate((t) => {
    for (const a of document.getAnimations()) {
      a.pause();
      a.currentTime = t;
    }
  }, ms);
  await page.screenshot({ path: `${framesDir}/frame-${String(i).padStart(4, '0')}.png` });
}
await browser.close();
console.log(`${total} quadros salvos em ${framesDir}`);

// PNGs -> MP4 (H.264, yuv420p: abre em celulares, Facebook, Instagram, Canva, CapCut)
execFileSync(ffmpegPath, [
  '-y', '-loglevel', 'error',
  '-framerate', String(fps), '-i', `${framesDir}/frame-%04d.png`,
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '24', '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart', '-an', `${name}.mp4`,
]);

// GIF pequeno só para prévia (8 quadros/s, 270 px de largura). O MP4 é o arquivo para o Reels.
execFileSync(ffmpegPath, [
  '-y', '-loglevel', 'error', '-i', `${name}.mp4`,
  '-vf', 'fps=8,scale=270:-2:flags=lanczos,split[a][b];[a]palettegen=max_colors=64[p];[b][p]paletteuse=dither=bayer:bayer_scale=4',
  `${name}-preview.gif`,
]);
console.log(`Pronto: ${name}.mp4 e ${name}-preview.gif`);
