// Example scam messages, modelled on the screens in each Scam-Proof Money episode.
// Everything in a message is made up: names, amounts, phone numbers (555-01xx numbers
// are reserved for fiction) and web addresses (shown "defanged" with [.] so they
// can never be tapped).
//
// Marks: write [[n:text]] in a message to highlight text and tie it to warning sign n.
// n is a 1-based index into that guide's own redFlags list, so every annotation
// shown on the page is the guide's own wording. Build fails on a bad index.
export interface Example {
  guide: string;
  channel: 'Text message' | 'Chat message' | 'Email' | 'Phone call' | 'Pop-up on a computer';
  from: string;
  market?: string;
  messages: string[];
  flags: number[]; // which of the guide's redFlags to list (1-based), in order
}

export const examples: Example[] = [
  {
    guide: 'toll-text',
    channel: 'Text message',
    from: '+1 (555) 017-2049',
    market: 'US',
    messages: [
      '[[1:State Toll Svcs: You have an unpaid toll balance of $6.99.]] [[2:Pay today to avoid a late fee:]] [[3:tolls-pay-now[.]com]]',
    ],
    flags: [1, 2, 3],
  },
  {
    guide: 'hmrc-refund',
    channel: 'Text message',
    from: 'TaxRefund',
    market: 'UK',
    messages: [
      '[[1:Tax Office: You are owed a tax refund of £248.40.]] [[2:Claim it before midnight:]] [[3:tax-refund-claim[.]co]]',
    ],
    flags: [1, 2, 3, 4],
  },
  {
    guide: 'hi-mum',
    channel: 'Chat message',
    from: '+1 (555) 013-8862',
    messages: [
      '[[1:Hi Mum, I dropped my phone. This is my new number.]] [[2:Save this one and delete the old one x]]',
      '[[3:I can\'t call yet, the mic is broken.]] Can you pay a bill for me? It\'s due today x',
      '[[4:It\'s $800. Pay it to R. Mendez, he\'s my flatmate.]] Today please x',
    ],
    flags: [1, 2, 3, 4],
  },
  {
    guide: 'pig-butchering',
    channel: 'Text message',
    from: '+1 (555) 014-2271',
    messages: [
      'Hi Linda, are we still on for lunch?',
      '[[1:Oh sorry, wrong number! You seem really nice though. Where are you from?]]',
      '[[2:I made great money trading crypto this year. I could show you how.]]',
    ],
    flags: [1, 2, 3, 4],
  },
  {
    guide: 'likes',
    channel: 'Text message',
    from: '+1 (555) 019-3384',
    messages: [
      '[[1:Hi! We are hiring now for remote work.]] [[2:Earn $300 a day just liking videos on LikeLoop 365.]] No experience needed.',
      '[[4:Your balance: $600.]] [[3:To unlock it, make a deposit of $200 first.]]',
    ],
    flags: [1, 2, 3, 4],
  },
  {
    guide: 'is-this-you',
    channel: 'Chat message',
    from: 'Carol (a friend)',
    messages: [
      '[[1:Is this you in this video?? 😮 watch-myclip[.]co/v/8812]]',
    ],
    flags: [1, 2, 3],
  },
  {
    guide: 'overpay',
    channel: 'Email',
    from: 'QuickSend <alerts@quicksend-notice[.]co>',
    messages: [
      '[[2:Payment received: $500.00 from Mike B.]]',
      '[[1:Note from buyer: Sorry, I sent $300 too much by mistake.]] [[4:Please send the difference back to me today.]]',
    ],
    flags: [1, 2, 4],
  },
  {
    guide: 'paypal-invoice',
    channel: 'Email',
    from: 'An invoice sent through a real payment service',
    messages: [
      '[[1:Invoice from Tech Store: Laptop, $499.00 due.]]',
      '[[2:Note from seller: Didn\'t order this? Call 1-888-555-0147 now to cancel.]]',
    ],
    flags: [1, 2, 3],
  },
  {
    guide: 'popup',
    channel: 'Pop-up on a computer',
    from: 'A web page in your browser',
    messages: [
      '[[2:⚠ VIRUS DETECTED! Your computer is locked. Do not close this window.]]',
      '[[1:Call Support Tech now: 1-888-555-0143]]',
    ],
    flags: [1, 2, 3, 4],
  },
  {
    guide: 'amazon-call',
    channel: 'Phone call',
    from: 'Caller ID: Store Support',
    market: 'US, UK, Canada',
    messages: [
      '[[1:This is Store Support. A charge of $1,499.00 for a laptop was placed on your account.]] [[2:If you did not make this purchase, press 1.]]',
    ],
    flags: [1, 2, 3, 4],
  },
  {
    guide: 'cra-call',
    channel: 'Phone call',
    from: 'Caller ID: Tax Agency',
    market: 'Canada',
    messages: [
      'This is the tax agency. You owe $4,280 in back taxes.',
      '[[1:The police are on the way.]] [[2:You must pay right now]] [[3:at a Bitcoin machine.]] [[4:Stay on the line while you pay.]]',
    ],
    flags: [1, 2, 3, 4],
  },
];
