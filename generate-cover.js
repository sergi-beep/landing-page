const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generate() {
  // Render at 3x for high quality
  const scale = 3;
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

  // Logo symbol - top left corner
  const symbol = await loadImage(path.join(__dirname, 'public/images/logo-symbol.png'));
  const symbolH = 53 * scale;
  const symbolW = (symbol.width / symbol.height) * symbolH;

  // Make symbol white using temp canvas
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

  const logoX = 36 * scale;
  const logoY = 28 * scale;
  ctx.drawImage(tmpCanvas, logoX, logoY);

  // Draw "stimuli" text next to symbol
  const logoTextSize = 34 * scale;
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${logoTextSize}px Inter, system-ui, sans-serif`;
  ctx.fillText('stimuli', logoX + symbolW + 12 * scale, logoY + symbolH * 0.72);

  // Text - bottom right, pushed up
  const rightMargin = 48 * scale;
  const bottomMargin = 80 * scale;
  const fontSize = 48 * scale;

  const line1Y = H - bottomMargin - fontSize * 1.3;
  const line2Y = H - bottomMargin;

  // Line 1: "Production-grade" (bold) + " infrastructure" (regular)
  ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
  const boldPart1 = 'Production-grade';
  const boldPart1W = ctx.measureText(boldPart1).width;

  ctx.font = `400 ${fontSize}px Inter, system-ui, sans-serif`;
  const regPart1 = ' infrastructure';
  const regPart1W = ctx.measureText(regPart1).width;

  const line1TotalW = boldPart1W + regPart1W;
  const line1X = W - rightMargin - line1TotalW;

  // Line 2: "for " (regular) + "sales and marketing" (bold)
  ctx.font = `400 ${fontSize}px Inter, system-ui, sans-serif`;
  const regPart2 = 'for ';
  const regPart2W = ctx.measureText(regPart2).width;

  ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
  const boldPart2 = 'sales and marketing';
  const boldPart2W = ctx.measureText(boldPart2).width;

  const line2TotalW = regPart2W + boldPart2W;
  const line2X = W - rightMargin - line2TotalW;

  // Draw line 1
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(boldPart1, line1X, line1Y);
  ctx.font = `400 ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(regPart1, line1X + boldPart1W, line1Y);

  // Draw line 2
  ctx.font = `400 ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(regPart2, line2X, line2Y);
  ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(boldPart2, line2X + regPart2W, line2Y);

  // Save
  const out = '/Users/sergicheishvili/Downloads/linkedin-cover-final.png';
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(out, buffer);
  console.log('Saved to', out, `(${W}x${H})`);
}

generate().catch(console.error);
