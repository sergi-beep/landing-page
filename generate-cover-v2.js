const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generate() {
  const scale = 5;
  const W = 1584 * scale;
  const H = 396 * scale;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#0F172A';
  ctx.fillRect(0, 0, W, H);

  // Subtle blue glow bottom-right
  const glow = ctx.createRadialGradient(W - 200 * scale, H + 50 * scale, 0, W - 200 * scale, H + 50 * scale, 400 * scale);
  glow.addColorStop(0, 'rgba(0, 102, 255, 0.08)');
  glow.addColorStop(1, 'rgba(0, 102, 255, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // Logo symbol - top left
  const symbol = await loadImage(path.join(__dirname, 'public/images/logo-symbol.png'));
  const symbolH = 53 * scale;
  const symbolW = (symbol.width / symbol.height) * symbolH;

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

  ctx.drawImage(tmpCanvas, 36 * scale, 28 * scale);

  // "stimuli" text next to symbol
  const logoTextSize = 34 * scale;
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${logoTextSize}px Inter, system-ui, sans-serif`;
  ctx.fillText('stimuli', 36 * scale + symbolW + 12 * scale, 28 * scale + symbolH * 0.72);

  // --- Oval pill: "For Sales and Marketing Teams" ---
  const pillText = 'For sales and marketing teams and agencies';
  const pillFontSize = 20 * scale;
  ctx.font = `500 ${pillFontSize}px Inter, system-ui, sans-serif`;
  const pillTextW = ctx.measureText(pillText).width;
  const pillPadX = 20 * scale;
  const pillPadY = 10 * scale;
  const pillW = pillTextW + pillPadX * 2;
  const pillH = pillFontSize + pillPadY * 2;
  const pillRadius = pillH / 2;

  // Position pill bottom-right area, above the headline
  const rightMargin = 48 * scale;
  const pillX = W - rightMargin - pillW;
  const pillY = H - 210 * scale;

  // Draw oval pill with border
  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, pillRadius);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1.5 * scale;
  ctx.stroke();

  // Pill text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = `500 ${pillFontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(pillText, pillX + pillPadX, pillY + pillPadY + pillFontSize * 0.8);

  // --- Main headline: single line ---
  const fontSize = 48 * scale;
  const bottomMargin = 80 * scale;
  const lineY = H - bottomMargin;

  // "Fractional CTO" (bold) + " + " (regular) + "Tech-Ops Department" (bold)
  ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
  const b1 = 'Fractional CTO';
  const b1W = ctx.measureText(b1).width;

  ctx.font = `400 ${fontSize}px Inter, system-ui, sans-serif`;
  const r1 = ' + ';
  const r1W = ctx.measureText(r1).width;

  ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
  const b2 = 'Tech-Ops Department';
  const b2W = ctx.measureText(b2).width;

  const totalW = b1W + r1W + b2W;
  const lineX = W - rightMargin - totalW;

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(b1, lineX, lineY);
  ctx.font = `400 ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(r1, lineX + b1W, lineY);
  ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(b2, lineX + b1W + r1W, lineY);

  const out = '/Users/sergicheishvili/Downloads/linkedin-cover-final.png';
  fs.writeFileSync(out, canvas.toBuffer('image/png'));
  console.log('Saved to', out);
}

generate().catch(console.error);
