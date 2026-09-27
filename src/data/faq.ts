export type FaqItem = {
  question: string;
  answer: string;
};

export const buyerFaqs: FaqItem[] = [
  {
    question: 'Is finfulencers.com for sale?',
    answer:
      'Yes. The domain is available for acquisition. This website demonstrates the name. You are buying the domain, not a separate operating company.',
  },
  {
    question: 'How do I make an offer?',
    answer:
      'Email sales@desertrich.com, or use the inquiry form. The form opens a pre-addressed message in your email app. Include who you are, how you would use the name, and a budget if you have one. Negotiations stay confidential.',
  },
  {
    question: 'Is there a public asking price?',
    answer:
      'No price is posted. Ask for the current asking price, or send a range with your inquiry. Serious buyers get a direct reply.',
  },
  {
    question: 'What exactly transfers?',
    answer:
      'The finfulencers.com domain name, moved with a standard registrar authorization code. After the transfer completes, you control the DNS. A typical release takes a few days once both registrars approve it. Escrow is welcome.',
  },
  {
    question: 'Does the sale include a business, audience, or trademark?',
    answer:
      'No. Unless a written agreement says otherwise, the sale is the domain only. It does not include customers, revenue, social accounts, content licenses, or a trademark assignment. Run your own trademark search before you build a brand on the name.',
  },
  {
    question: 'Why is it spelled finfulencers, not finfluencers?',
    answer:
      'Press and regulators usually spell the category “finfluencer” (financial + influencer). This domain is the coined spelling finfulencers.com. It is brandable, short, and adjacent to the word buyers and readers already search. It is not the exact dictionary spelling of that category term.',
  },
  {
    question: 'Who is this name a fit for?',
    answer:
      'Media brands, creator agencies, newsletters, podcasts, education communities, and fintech products that want an ownable .com in the finance-creator category. Some buyers acquire category-adjacent names defensively.',
  },
  {
    question: 'Do you work with domain brokers?',
    answer:
      'Yes. Name the principal and the broker in the first email so the conversation stays simple.',
  },
];

export const categoryFaqs: FaqItem[] = [
  {
    question: 'What is a finfluencer?',
    answer:
      'A finfluencer is a social-media creator who talks about money — budgeting, debt, investing, or financial independence — usually in short, personal formats. The word blends “financial” and “influencer.” It is a description of a media category, not a license or a credential.',
  },
  {
    question: 'Is this website financial advice?',
    answer:
      'No. Nothing on finfulencers.com is a recommendation to buy or sell any investment, or to pay any particular price for this domain. Finance pages here are general background. Domain talks are a commercial negotiation.',
  },
  {
    question: 'Can the buyer use the domain to give investment advice?',
    answer:
      'A domain is a web address, not a regulatory license. In the UK, promoting many financial products without approval from an authorized firm can be a criminal offence. In the US, broker-dealers and advisers stay subject to SEC and FINRA communication rules. Get advice from your own counsel before you publish.',
  },
];

export const allFaqs: FaqItem[] = [...buyerFaqs, ...categoryFaqs];
