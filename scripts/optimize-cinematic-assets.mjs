import { mkdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const sourceRoot = path.join(projectRoot, 'public/assets');
const outputRoot = path.join(sourceRoot, 'cinematic');

await mkdir(outputRoot, { recursive: true });

const records = [];

async function save(source, filename, width, quality, alphaQuality = 100, height) {
  const output = path.join(outputRoot, filename);
  await sharp(path.join(sourceRoot, source))
    .rotate()
    .resize({ width, height, fit: 'cover', position: 'centre', withoutEnlargement: true })
    .webp({ quality, alphaQuality, effort: 6 })
    .toFile(output);

  const metadata = await sharp(output).metadata();
  const { size } = await stat(output);
  records.push({
    file: filename,
    width: metadata.width,
    height: metadata.height,
    alpha: metadata.hasAlpha,
    kilobytes: Math.round(size / 1024),
  });
}

// Keep the complete source composition. Responsive cropping belongs to the scene.
const landscapes = [
  ['vue large extérieure.png', 'exterior'],
  ['Shiganshina.png', 'city'],
  ['image de fin.png', 'finale'],
];

for (const [source, name] of landscapes) {
  await save(source, `${name}.webp`, 1920, 86);
  // A portrait crop retains the original vertical detail on tall phone screens.
  await save(source, `${name}-mobile.webp`, 640, 84, 100, 1138);
}

await save('overlay de brouillard.png', 'fog.webp', 1400, 78, 95);
await save('texture overlay légère.png', 'texture.webp', 1200, 72, 90);

// All source poses share a 941 × 1672 canvas. Do not trim their transparent
// borders: one scale and one anchor keep the stride stable between frames.
for (let frame = 1; frame <= 4; frame += 1) {
  await save(`walk_${frame}.png`, `walk-${frame}.webp`, 540, 88);
}
await save('Eren.png', 'eren-idle.webp', 540, 88);

console.table(records.sort((a, b) => a.file.localeCompare(b.file)));
