const { createCanvas } = require('canvas');
const fs = require('fs');

async function generate() {
  const scale = 5;
  const W = 820 * scale;
  const H = 312 * scale;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0F172A';
  ctx.fillRect(0, 0, W, H);

  // Pill
  const rightMargin = 48 * scale;
  const pillText = 'For sales and marketing teams and agencies';
  const pillFontSize = 14 * scale;
  ctx.font = `500 ${pillFontSize}px Inter, system-ui, sans-serif`;
  const pillTextW = ctx.measureText(pillText).width;
  const pillPadX = 16 * scale;
  const pillPadY = 8 * scale;
  const pillW = pillTextW + pillPadX * 2;
  const pillH = pillFontSize + pillPadY * 2;
  const pillRadius = pillH / 2;
  const pillX = W - rightMargin - pillW;
  const pillY = H - 180 * scale;

  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, pillRadius);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1.5 * scale;
  ctx.stroke();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = `500 ${pillFontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(pillText, pillX + pillPadX, pillY + pillPadY + pillFontSize * 0.8);

  // Headline
  const fontSize = 36 * scale;
  const bottomMargin = 60 * scale;
  const lineY = H - bottomMargin;

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

  const out = '/Users/sergicheishvili/Downloads/facebook-cover.png';
  fs.writeFileSync(out, canvas.toBuffer('image/png'));
  console.log('Saved to', out);
}

generate().catch(console.error);
