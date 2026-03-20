const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generate() {
  const scale = 3;
  const size = 300 * scale;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#0F172A';
  ctx.fillRect(0, 0, size, size);

  // Load symbol
  const symbol = await loadImage(path.join(__dirname, 'public/images/logo-symbol.png'));
  const symbolH = 120 * scale;
  const symbolW = (symbol.width / symbol.height) * symbolH;

  // Make symbol white
  const tmpCanvas = createCanvas(Math.ceil(symbolW), Math.ceil(symbolH));
  const tmpCtx = tmpCanvas.getContext('2d');
  tmpCtx.drawImage(symbol, 0, 0, symbolW, symbolH);
  const imgData = tmpCtx.getImageData(0, 0, tmpCanvas.width, tmpCanvas.height);
  const d = imgData.data;
  for (let i = 0; i < d.length; i += 4) {
    d[i] = 255;
    d[i + 1] = 255;
    d[i + 2] = 255;
  }
  tmpCtx.putImageData(imgData, 0, 0);

  // Center the symbol
  const x = (size - symbolW) / 2;
  const y = (size - symbolH) / 2;
  ctx.drawImage(tmpCanvas, x, y);

  const out = '/Users/sergicheishvili/Downloads/linkedin-logo.png';
  fs.writeFileSync(out, canvas.toBuffer('image/png'));
  console.log('Saved to', out, `(${size}x${size})`);
}

generate().catch(console.error);
