const { createCanvas } = require('canvas');
const fs = require('fs');

async function generate() {
  const scale = 2;
  const W = 2560 * scale;
  const H = 1440 * scale;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#0F172A';
  ctx.fillRect(0, 0, W, H);

  // Safe area is center 1546x423 of 2560x1440
  // That means horizontally: (2560-1546)/2 = 507px from each side
  // Vertically: (1440-423)/2 = 508px from top/bottom
  // All text must be within this safe zone

  const safeLeft = 507 * scale;
  const safeRight = (2560 - 507) * scale;
  const safeTop = 508 * scale;
  const safeBottom = (1440 - 508) * scale;
  const safeW = 1546 * scale;
  const safeH = 423 * scale;

  // Pill - positioned in safe zone, right-aligned
  const rightMargin = 48 * scale;
  const pillText = 'For sales and marketing teams and agencies';
  const pillFontSize = 20 * scale;
  ctx.font = `500 ${pillFontSize}px Inter, system-ui, sans-serif`;
  const pillTextW = ctx.measureText(pillText).width;
  const pillPadX = 20 * scale;
  const pillPadY = 10 * scale;
  const pillW = pillTextW + pillPadX * 2;
  const pillH = pillFontSize + pillPadY * 2;
  const pillRadius = pillH / 2;
  const pillX = safeRight - rightMargin - pillW;
  const pillY = safeTop + safeH * 0.25;

  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, pillRadius);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1.5 * scale;
  ctx.stroke();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = `500 ${pillFontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(pillText, pillX + pillPadX, pillY + pillPadY + pillFontSize * 0.8);

  // Headline: "Fractional CTO + Tech-Ops Department"
  const fontSize = 48 * scale;
  const lineY = safeTop + safeH * 0.65;

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
  const lineX = safeRight - rightMargin - totalW;

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(b1, lineX, lineY);
  ctx.font = `400 ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(r1, lineX + b1W, lineY);
  ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.fillText(b2, lineX + b1W + r1W, lineY);

  const out = '/Users/sergicheishvili/Downloads/youtube-banner.png';
  fs.writeFileSync(out, canvas.toBuffer('image/png'));
  console.log('Saved to', out, `(${W}x${H})`);
}

generate().catch(console.error);
