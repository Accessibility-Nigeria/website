import { readFile, writeFile, unlink } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'
import convert from 'heic-convert'

const imagesDir = join(process.cwd(), 'app/assets/images')

const renames = [
  ['Chaosscon 59.jpeg', 'event-panel-speaker.jpg'],
  ['Chaosscon 105.jpeg', 'event-workshop-presentation.jpg'],
  ['Chaosscon 108.jpeg', 'event-partner-presentation.jpg'],
  ['Chaosscon 162.jpeg', 'community-group-photo.jpg'],
]

const heicFiles = [
  'IMG_2720.HEIC',
  'IMG_2721.HEIC',
  'IMG_2728.HEIC',
  'IMG_3908.HEIC',
]

async function optimizeJpeg(inputPath, outputPath, { width = 1600, quality = 82 } = {}) {
  await sharp(inputPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(outputPath)
}

async function convertHeic(inputName, outputName) {
  const inputPath = join(imagesDir, inputName)
  const outputPath = join(imagesDir, outputName)
  const inputBuffer = await readFile(inputPath)
  const jpegBuffer = await convert({
    buffer: inputBuffer,
    format: 'JPEG',
    quality: 0.92,
  })
  const tempPath = join(imagesDir, `.tmp-${outputName}`)
  await writeFile(tempPath, jpegBuffer)
  await optimizeJpeg(tempPath, outputPath)
  await unlink(tempPath)
  await unlink(inputPath)
}

for (const [from, to] of renames) {
  const inputPath = join(imagesDir, from)
  const outputPath = join(imagesDir, to)
  await optimizeJpeg(inputPath, outputPath)
  await unlink(inputPath)
  console.log(`Renamed & optimized: ${from} -> ${to}`)
}

for (const heic of heicFiles) {
  const base = heic.replace(/\.HEIC$/i, '').toLowerCase()
  const tempName = `temp-${base}.jpg`
  await convertHeic(heic, tempName)
  console.log(`Converted: ${heic} -> ${tempName}`)
}

console.log('Done. Review temp-*.jpg files for manual renaming.')
