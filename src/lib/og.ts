// Share-preview images (1200x630 PNG), drawn at build time with satori + resvg.
// Style matches public/og.png: light background, red edge bar, Fredoka headline,
// Slick (scam pages) or June (help pages) on the right.
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const font = (pkg: string, file: string) => readFileSync(join(root, 'node_modules/@fontsource', pkg, 'files', file));
const fonts = [
  { name: 'Fredoka', data: font('fredoka', 'fredoka-latin-700-normal.woff'), weight: 700 as const, style: 'normal' as const },
  { name: 'Atkinson', data: font('atkinson-hyperlegible', 'atkinson-hyperlegible-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
  { name: 'Atkinson', data: font('atkinson-hyperlegible', 'atkinson-hyperlegible-latin-700-normal.woff'), weight: 700 as const, style: 'normal' as const },
];
const img = (name: string) => `data:image/png;base64,${readFileSync(join(root, 'public/img', `${name}.png`)).toString('base64')}`;
const chars = { slick: { src: img('slick'), w: 286, h: 601 }, june: { src: img('june'), w: 221, h: 597 } };

export interface Card {
  kicker: string;     // small red label, e.g. "SCAM GUIDE · UK"
  title: string;      // big headline
  pill: string;       // green pill at the bottom
  who: 'slick' | 'june';
}

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export async function renderCard(c: Card): Promise<Buffer> {
  const len = c.title.length;
  const size = len > 70 ? 54 : len > 48 ? 62 : 72;
  const ch = chars[c.who];
  const chH = 500;
  const chW = Math.round((ch.w / ch.h) * chH);
  const tree = h('div', { width: 1200, height: 630, display: 'flex', background: '#EEF2F7', fontFamily: 'Atkinson' }, [
    h('div', { width: 18, height: 630, background: '#E1333B' }),
    h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 840, padding: '56px 40px 56px 62px' }, [
      h('div', { display: 'flex', flexDirection: 'column' }, [
        h('div', { fontFamily: 'Fredoka', fontSize: 30, color: '#141414' }, 'Scam-Proof Money'),
        h('div', { marginTop: 26, fontSize: 24, fontWeight: 700, letterSpacing: 2, color: '#B81D27' }, c.kicker.toUpperCase()),
        h('div', { marginTop: 14, fontFamily: 'Fredoka', fontSize: size, lineHeight: 1.08, color: '#141414' }, c.title),
      ]),
      h('div', { display: 'flex' }, [
        h('div', { background: '#17824F', color: '#fff', fontFamily: 'Fredoka', fontSize: 28, padding: '12px 24px', borderRadius: 14 }, c.pill),
      ]),
    ]),
    h('div', { display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: 342, paddingBottom: 40 }, [
      { type: 'img', props: { src: ch.src, width: chW, height: chH } },
    ]),
  ]);
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}
