// Marks scheduled videos in src/data/videos.json as live once YouTube shows them
// publicly on the Scam-Proof Money channel. Private/scheduled videos return 401/403
// from YouTube's oEmbed endpoint; public ones return 200 with the channel URL.
// Usage: node tools/videos/check.mjs   (exits 0; prints what changed)
import { readFileSync, writeFileSync } from 'node:fs';

const FILE = new URL('../../src/data/videos.json', import.meta.url);
const CHANNEL = 'https://www.youtube.com/@scamproofmoney';
const data = JSON.parse(readFileSync(FILE, 'utf8'));
const changed = [];

for (const v of data.videos) {
  if (v.live) continue;
  const url = `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(`https://www.youtube.com/watch?v=${v.id}`)}`;
  try {
    const r = await fetch(url);
    if (r.status !== 200) { console.log(`${v.guide} ${v.kind} ${v.id}: not public yet (${r.status})`); continue; }
    const j = await r.json();
    if (j.author_url !== CHANNEL) { console.log(`${v.guide} ${v.kind} ${v.id}: public but not on ${CHANNEL} (${j.author_url}); skipped`); continue; }
    v.live = true;
    v.title = j.title;
    changed.push(`${v.guide} ${v.kind} ${v.id}`);
  } catch (e) {
    console.log(`${v.guide} ${v.kind} ${v.id}: check failed (${e.message})`);
  }
}

if (changed.length) {
  writeFileSync(FILE, JSON.stringify(data, null, 2) + '\n');
  console.log(`Now live: ${changed.join(', ')}`);
} else {
  console.log('No changes.');
}
