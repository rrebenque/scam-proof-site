import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderCard, type Card } from '../../lib/og';
import { ogPages, ogKey } from '../../data/ogPages';

export const getStaticPaths: GetStaticPaths = async () => {
  const guides = await getCollection('scams');
  const fromGuides = guides.map((g) => ({
    params: { key: ogKey(`/scams/${g.id}/`) },
    props: { card: {
      kicker: `Scam guide · ${g.data.markets.length >= 4 ? 'US, UK, Canada, Australia' : g.data.markets.join(', ')}`,
      title: g.data.title,
      pill: 'The one right move, free',
      who: 'slick',
    } satisfies Card },
  }));
  const fromPages = Object.entries(ogPages).map(([path, card]) => ({ params: { key: ogKey(path) }, props: { card } }));
  return [...fromGuides, ...fromPages];
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderCard((props as { card: Card }).card);
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
