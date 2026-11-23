// Questions people type into search engines and AI assistants, each answered
// from the matching guide. Every answer must be supported by that guide's own
// text and sources: no new facts, figures or phone numbers here.
export interface Question {
  q: string;
  a: string;
  guide: string; // guide slug in src/content/scams
}

export const groups: { name: string; items: Question[] }[] = [
  {
    name: 'Texts and messages',
    items: [
      {
        q: 'Is a text saying I owe an unpaid toll a scam?',
        a: 'Treat it as a scam. The link opens a fake toll website, and the card number you type goes straight to the scammers. Don\'t tap the link: open your real toll app yourself, then forward the text to 7726.',
        guide: 'toll-text',
      },
      {
        q: 'My kid texted "Hi Mum, I dropped my phone, this is my new number." Is it really them?',
        a: 'Assume it isn\'t. The "new number" text that ends with a bill to pay is a common scam. Call your child on the number you already have, then block and report the new number.',
        guide: 'hi-mum',
      },
      {
        q: 'Does HMRC send texts about tax refunds?',
        a: 'No. HMRC says it never sends notifications of a tax rebate by text, or asks for personal or payment details that way. Don\'t tap the link: forward the text to 60599 or 7726, and check your tax account yourself in the HMRC app or on GOV.UK.',
        guide: 'hmrc-refund',
      },
      {
        q: 'A stranger texted me by mistake and wants to chat. Is it a scam?',
        a: 'It can be the start of a "pig butchering" investment scam: weeks of friendly chat, then a fake trading app, often using cryptocurrency. Don\'t reply, block the number, and never invest with someone you met by text.',
        guide: 'pig-butchering',
      },
      {
        q: 'Is a job that pays you to like videos real?',
        a: 'No. These task scams pay a few small amounts first, then ask you to deposit your own money to "unlock" earnings that aren\'t real. A real job never makes you pay to get paid.',
        guide: 'likes',
      },
      {
        q: 'A friend sent me "Is this you in this video?" Should I click?',
        a: 'No. Your friend\'s account was most likely hacked, and the link opens a fake login page that steals your password. Check with your friend another way, and turn on two-factor login.',
        guide: 'is-this-you',
      },
    ],
  },
  {
    name: 'Calls',
    items: [
      {
        q: 'Will my bank ever call and ask me to move my money to a safe account?',
        a: 'No. Your bank will never ask you to move your money to protect it. Hang up, and call the number on the back of your card, not the number that called you.',
        guide: 'safe-account',
      },
      {
        q: 'I got a call about a big Amazon charge I didn\'t make. Is it real?',
        a: 'It\'s a scam. Hang up, don\'t press 1 and don\'t call back. Open the Amazon app or website yourself and check your orders.',
        guide: 'amazon-call',
      },
      {
        q: 'Does the CRA accept Bitcoin or threaten arrest?',
        a: 'No. The CRA says it will not demand immediate payment by Bitcoin, gift cards or e-transfer, or threaten arrest. Hang up, check your CRA My Account yourself, and report the call to the Canadian Anti-Fraud Centre.',
        guide: 'cra-call',
      },
      {
        q: 'Can scammers fake a family member\'s voice?',
        a: 'Yes. Scammers can clone a voice from a short recording, such as a video posted online. Hang up and call the person back on the number you already have.',
        guide: 'voice-clone',
      },
      {
        q: 'How do I set up a family safe word?',
        a: 'Make it random (no pet names or birthdays), share it face to face rather than by text, and treat no safe word as no money, every time.',
        guide: 'safe-word',
      },
    ],
  },
  {
    name: 'Paying and getting paid',
    items: [
      {
        q: 'Will my bank refund me if I paid a scammer with Zelle?',
        a: 'Probably not. A payment you sent yourself is hard to get back, and the FTC says a payment app linked to your bank is almost like handing over cash. Use Zelle only for people you know, and buy from strangers with a credit card.',
        guide: 'zelle',
      },
      {
        q: 'Which payment methods do only scammers ask for?',
        a: 'Gift cards, wire transfers, Bitcoin ATMs, a payment app to a stranger, and cash or gold handed to a courier. The FTC says anyone who insists you pay by gift card, crypto, a payment app or wire is a scammer.',
        guide: 'pay-methods',
      },
      {
        q: 'A buyer paid me too much and wants the difference back. Is it a scam?',
        a: 'Yes, it\'s the overpayment scam. Check your real payment app or bank yourself, refund nothing until the money has really cleared, and report the buyer.',
        guide: 'overpay',
      },
      {
        q: 'I got a real PayPal invoice for something I didn\'t buy. Should I call the number on it?',
        a: 'No. The invoice can be real while the phone number in its note was typed by a scammer. Don\'t call it: open the PayPal app or website yourself and report the invoice there.',
        guide: 'paypal-invoice',
      },
    ],
  },
  {
    name: 'Cards, phones and computers',
    items: [
      {
        q: 'Where do scammers hide card skimmers?',
        a: 'Gas pumps, ATMs and self-checkouts. Tug the card reader before you pay, and tap your card or phone instead of swiping or inserting.',
        guide: 'skimmers',
      },
      {
        q: 'Is it safe to scan the QR code on a parking meter?',
        a: 'Look closely first. Cities have found scam stickers placed over or next to the real payment code. Skip any sticker, pay at the meter or in your city\'s official parking app, and report the sticker to the city.',
        guide: 'qr-meter',
      },
      {
        q: 'A pop-up says my computer has a virus and to call a number. Is it real?',
        a: 'No. Real security warnings never ask you to call a number. Don\'t call: close the browser and restart your computer.',
        guide: 'popup',
      },
      {
        q: 'Can someone steal my phone number?',
        a: 'Yes. In a SIM swap, a scammer talks your phone company into moving your number to their SIM, then catches your sign-in codes. Call your phone company and add a PIN or password to your account.',
        guide: 'sim-swap',
      },
    ],
  },
];
