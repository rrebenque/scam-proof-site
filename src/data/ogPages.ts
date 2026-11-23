import type { Card } from '../lib/og';

// Share images for non-guide pages, keyed by path. Guides get one automatically.
// Pages not listed here use the default /og.png.
export const ogPages: Record<string, Card> = {
  '/scams/': { kicker: 'Scam guides', title: 'How each scam works, and the one move that stops it', pill: 'Free guides with sources', who: 'slick' },
  '/questions/': { kicker: 'Quick answers', title: 'Is it a scam? Quick answers to the questions people ask most', pill: 'Free · scamproofmoney.com', who: 'june' },
  '/examples/': { kicker: 'Scam text examples', title: 'Real-looking scam texts, with every warning sign marked', pill: 'Learn to spot them', who: 'slick' },
  '/check/': { kicker: 'Is it a scam?', title: 'Answer 3 quick questions about a message or call', pill: 'Free scam checker', who: 'june' },
  '/been-scammed/': { kicker: 'Help after a scam', title: "I've been scammed. What now?", pill: 'First steps, by country', who: 'june' },
  '/help-someone-scammed/': { kicker: 'Help after a scam', title: 'Someone I love got scammed. How can I help?', pill: 'What to say, what to do', who: 'june' },
  '/red-flags/': { kicker: 'Warning signs', title: 'Scam warning signs, grouped by what scammers do', pill: 'Free · scamproofmoney.com', who: 'slick' },
  '/what-scammers-say/': { kicker: 'Scam lines', title: 'What scammers say, and what they really mean', pill: 'Free · scamproofmoney.com', who: 'slick' },
  '/how-to-pay-safely/': { kicker: 'Paying safely', title: 'They want me to pay this way. Is that safe?', pill: 'Free · scamproofmoney.com', who: 'june' },
  '/phone-checklist/': { kicker: 'Phone safety', title: 'Scam-proof a phone in 10 minutes', pill: 'Free checklist', who: 'june' },
  '/check-a-website/': { kicker: 'Online shopping', title: 'Check a website before you buy', pill: 'Free · scamproofmoney.com', who: 'june' },
  '/holiday-scams/': { kicker: 'Holiday season', title: 'Holiday scams: fake delivery texts, fake shops and gift card tricks', pill: 'Free · scamproofmoney.com', who: 'slick' },
  '/family-kit/': { kicker: 'Free printables', title: 'The Family Protection Kit: one-page scam sheets to print', pill: 'Free to download', who: 'june' },
  '/glossary/': { kicker: 'Scam words explained', title: 'Phishing, spoofing, smishing: plain-English meanings', pill: 'Free · scamproofmoney.com', who: 'june' },
  '/quiz/': { kicker: 'Spot the scam', title: 'Could you spot the scam? Take the 5-question quiz', pill: 'Free quiz', who: 'slick' },
  '/watch/': { kicker: 'Videos', title: 'Grandma June vs Slick: every Scam-Proof Money video', pill: 'Watch free', who: 'june' },
  '/us/': { kicker: 'United States', title: 'Scams in the US: where to report and how to get help', pill: 'Free · scamproofmoney.com', who: 'june' },
  '/uk/': { kicker: 'United Kingdom', title: 'Scams in the UK: where to report and how to get help', pill: 'Free · scamproofmoney.com', who: 'june' },
  '/canada/': { kicker: 'Canada', title: 'Scams in Canada: where to report and how to get help', pill: 'Free · scamproofmoney.com', who: 'june' },
  '/australia/': { kicker: 'Australia', title: 'Scams in Australia: where to report and how to get help', pill: 'Free · scamproofmoney.com', who: 'june' },
};

export const ogKey = (path: string) => path.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home';
