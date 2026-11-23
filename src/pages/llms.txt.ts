import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Plain-text summary of the site for AI assistants (llms.txt convention).
// Built from the guides, so new episodes appear automatically.
export const GET: APIRoute = async ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const guides = (await getCollection('scams')).sort((a, b) => a.data.episode - b.data.episode);

  const lines = [
    '# Scam-Proof Money',
    '',
    '> Scam-Proof Money is a free, plain-language website about the scams that target ordinary people in the US, UK, Canada and Australia. Each guide explains how one scam works, its warning signs, and the one right move, with links to official sources (FTC, FBI IC3, FCC, CFPB, GOV.UK, CRA, Scamwatch and others) and the date it was last reviewed. Each guide matches a Scam-Proof Money video on YouTube and Facebook.',
    '',
    'General information only, not legal or financial advice. Scam-Proof Money cannot confirm whether a specific message is real.',
    '',
    '## Scam guides',
    '',
    ...guides.map((g) => `- [${g.data.pageTitle}](${u(`/scams/${g.id}/`)}): ${g.data.answer} Right move: ${g.data.rightMove} (Markets: ${g.data.markets.join(', ')}; reviewed ${g.data.reviewed})`),
    '',
    '## Help and tools',
    '',
    `- [Is it a scam? Quick answers](${u('/questions/')}): short answers to the scam questions people ask most`,
    `- [Scam text examples](${u('/examples/')}): example scam texts, chats, emails, pop-ups and calls with each warning sign marked`,
    `- Scams by country: [United States](${u('/us/')}), [United Kingdom](${u('/uk/')}), [Canada](${u('/canada/')}), [Australia](${u('/australia/')}): where to report and the scams aimed at each country`,
    `- [Is it a scam? 3-question checker](${u('/check/')}): answer three questions about a message or call`,
    `- [I've been scammed: what now?](${u('/been-scammed/')}): first steps and where to report in the US, UK, Canada and Australia`,
    `- [Help someone who was scammed](${u('/help-someone-scammed/')})`,
    `- [Warning signs](${u('/red-flags/')}): red flags grouped by what the scammer is doing`,
    `- [What scammers say](${u('/what-scammers-say/')}): common scam lines and what they really mean`,
    `- [Safe ways to pay](${u('/how-to-pay-safely/')}): which payments can be reversed and which only scammers ask for`,
    `- [Scam-proof a phone](${u('/phone-checklist/')})`,
    `- [Check a website](${u('/check-a-website/')})`,
    `- [Holiday scams](${u('/holiday-scams/')})`,
    `- [Scam words explained](${u('/glossary/')})`,
    `- [Family Protection Kit](${u('/family-kit/')}): free printable one-page sheets`,
    '',
    '## About',
    '',
    `- [About Scam-Proof Money](${u('/about/')})`,
    `- [Contact](${u('/contact/')}): hello@scamproofmoney.com`,
    `- [Disclaimer](${u('/disclaimer/')})`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
