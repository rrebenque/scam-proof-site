// Reporting agencies, phone numbers and after-a-scam steps, by country.
// Shared by /been-scammed/ and the country pages (/us/, /uk/, /canada/, /australia/).
// Last checked 20 November 2026 (see the sources list). Change facts here only.
export interface Agency { name: string; url: string; note: string }
export interface Country { id: string; name: string; agencies: Agency[]; notes: string[] }
export interface Step { text: string; countries?: string[] }
export interface Situation { id: string; label: string; steps: Step[] }
export interface Source { label: string; url: string; countries?: string[] }

export const countries: Country[] = [
  {
    id: 'us',
    name: 'United States',
    agencies: [
      { name: 'FTC: ReportFraud.ftc.gov', url: 'https://reportfraud.ftc.gov', note: 'Report any scam, even if you lost no money.' },
      { name: 'FBI Internet Crime Complaint Center (IC3)', url: 'https://www.ic3.gov', note: 'For online fraud, especially if you lost money.' },
      { name: 'IdentityTheft.gov', url: 'https://www.identitytheft.gov', note: 'If a scammer has your personal details, to get a step-by-step recovery plan.' },
    ],
    notes: ['Scam texts: forward the message to 7726, then delete it.'],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    agencies: [
      { name: 'Report Fraud (formerly Action Fraud)', url: 'https://www.reportfraud.police.uk/', note: 'England, Wales and Northern Ireland. Online, or call 0300 123 2040. In Scotland, call Police Scotland on 101.' },
      { name: 'Call 159 to reach your bank safely', url: 'https://www.stopscamsuk.org.uk/159', note: 'Stop, hang up, call 159. If the scammer may still be on your line, wait a while or use another phone first.' },
    ],
    notes: [
      'Scam texts: forward the message to 7726, then delete it.',
      'Bank transfer scams: since 7 October 2024, UK banks and payment firms must reimburse eligible victims of authorised push payment scams, up to £85,000 per claim. Ask your bank about your claim, and do it quickly.',
    ],
  },
  {
    id: 'ca',
    name: 'Canada',
    agencies: [
      { name: 'Canadian Anti-Fraud Centre', url: 'https://antifraudcentre-centreantifraude.ca/scams-fraudes/victim-victime-eng.htm', note: 'Report online, or call toll-free 1-888-495-8501. Whether you were a victim or a witness, you can report.' },
      { name: 'Your local police', url: '', note: 'Report it and get a file number to keep for your bank and credit bureaus.' },
    ],
    notes: ['Scam texts: forward the message to 7726, then delete it.'],
  },
  {
    id: 'au',
    name: 'Australia',
    agencies: [
      { name: 'Scamwatch (National Anti-Scam Centre)', url: 'https://www.scamwatch.gov.au', note: 'Report every scam, even if you lost nothing.' },
      { name: 'ReportCyber (Australian Cyber Security Centre)', url: 'https://www.cyber.gov.au/report-and-recover', note: 'If you lost money or personal information to an online scam.' },
      { name: 'IDCARE', url: 'https://www.idcare.org', note: 'Free national identity and cyber support. Call 1800 595 160.' },
      { name: 'Police', url: '', note: 'For fraud or theft, call 131 444 or report it through ReportCyber.' },
    ],
    notes: [],
  },
];

export const situations: Situation[] = [
  {
    id: 'clicked',
    label: 'I clicked a link or opened a file',
    steps: [
      { text: 'Change the passwords for your important accounts, starting with email and banking. Do it from a different, trusted device if you can.' },
      { text: 'Update your phone or computer and run a security scan.' },
      { text: 'Watch your bank and card statements closely for the next few months.' },
    ],
  },
  {
    id: 'code',
    label: 'I gave a password or a code from a text message',
    steps: [
      { text: 'Reset the password for that account first, then any other account that uses the same password.' },
      { text: 'Turn on two-step sign-in (a code sent to your phone each time you log in), and check that the recovery email and phone number are still yours.' },
      { text: 'Call your bank right away if it was a banking code. A texted code can be the key to your online banking.' },
    ],
  },
  {
    id: 'bank',
    label: 'I paid by card or bank transfer',
    steps: [
      { text: 'Call your bank or card company using the number on the back of your card. Say it was fraud and ask them to stop or recall the payment.' },
      { text: 'Ask about disputing a card payment, or recalling a bank transfer. The sooner you ask, the better the chance.' },
      { text: 'In the UK, ask your bank to assess your claim under the rules that require banks to pay back some scam victims.', countries: ['uk'] },
    ],
  },
  {
    id: 'gift',
    label: 'I paid with gift cards, cryptocurrency (such as Bitcoin) or a payment app',
    steps: [
      { text: 'Report it right away inside the app, or to the company that issued the card or runs the cryptocurrency exchange.' },
      { text: 'Money sent this way is hard to get back, so be ready for that. Reporting is still worth doing, because it can stop the scammer reaching others.' },
    ],
  },
  {
    id: 'info',
    label: 'I shared an ID or personal details',
    steps: [
      { text: 'Report it at IdentityTheft.gov and follow the recovery plan.', countries: ['us'] },
      { text: 'Consider a free credit freeze with Equifax, Experian and TransUnion.', countries: ['us'] },
      { text: 'Contact IDCARE for free help securing your identity.', countries: ['au'] },
      { text: 'Contact both Canadian credit bureaus, Equifax and TransUnion, and ask about flagging your file.', countries: ['ca'] },
      { text: 'Tell your bank, and check your credit report for accounts you don’t recognise.', countries: ['uk'] },
    ],
  },
];

export const sources: Source[] = [
  { countries: ['us'], label: 'FTC: What to do if you were scammed', url: 'https://consumer.ftc.gov/articles/what-do-if-you-were-scammed' },
  { countries: ['ca'], label: 'Canadian Anti-Fraud Centre: What to do if you’re a victim of fraud', url: 'https://antifraudcentre-centreantifraude.ca/scams-fraudes/victim-victime-eng.htm' },
  { countries: ['au'], label: 'Australian Cyber Security Centre: Recover from scams', url: 'https://www.cyber.gov.au/report-and-recover/recover-from/scams' },
  { countries: ['uk'], label: 'City of London Police: Report Fraud service goes live', url: 'https://www.cityoflondon.police.uk/news/city-of-london/news/2025/december/report-fraud-service-goes-live-with-full-public-launch-in-january-2026/' },
  { countries: ['uk'], label: 'Stop Scams UK: Call 159', url: 'https://www.stopscamsuk.org.uk/159' },
  { countries: ['uk'], label: 'Scottish Financial News: PSR confirms £85,000 scam reimbursement limit', url: 'https://scottishfinancialnews.com/articles/prs-confirms-ps85000-scam-reimbursement-limit' },
  { countries: ['au'], label: 'MoneySmart (Australia): What to do if you’ve been scammed', url: 'https://moneysmart.gov.au/check-and-report-scams/what-to-do-if-youve-been-scammed' },
];
