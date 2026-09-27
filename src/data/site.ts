export const site = {
  name: 'Finfulencers',
  domain: 'finfulencers.com',
  url: 'https://finfulencers.com',
  email: 'sales@desertrich.com',
  updated: '2026-09-27',
} as const;

export const mailto =
  'mailto:sales@desertrich.com?subject=Inquiry%3A%20finfulencers.com%20Domain%20Acquisition';

export const nav = [
  { href: '/what-is-a-finfluencer/', label: 'Category' },
  { href: '/finfluencer-platforms/', label: 'Platforms' },
  { href: '/faq/', label: 'FAQ' },
] as const;

export const uses = [
  {
    id: 'media',
    title: 'Finance media',
    text: 'A publication, video channel, or news brand that covers creators, markets, and money culture.',
  },
  {
    id: 'agency',
    title: 'Creator agency',
    text: 'A talent or influencer shop that represents personal-finance creators and needs a category name.',
  },
  {
    id: 'newsletter',
    title: 'Newsletter or podcast',
    text: 'An owned audience — daily money brief, interview show, or weekend letter — with a memorable front door.',
  },
  {
    id: 'education',
    title: 'Education & community',
    text: 'Courses, cohorts, or a membership that teaches money skills without pretending to be a brokerage.',
  },
  {
    id: 'fintech',
    title: 'Fintech product',
    text: 'A savings, budgeting, or investing product that markets through creators and wants the category word nearby.',
  },
  {
    id: 'defensive',
    title: 'Defensive hold',
    text: 'A firm already in this space that would rather own the .com than watch someone else build on it.',
  },
] as const;
