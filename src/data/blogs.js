/**
 * Blog posts data.
 * To add a new post, push a new object into this array.
 * The `slug` becomes the URL: /blog/:slug
 */

export const blogs = [
  {
    slug: 'surat-saree-exporter-saved-8-lakh',
    title: 'A Surat Saree Exporter Saved ₹8 Lakh a Month Without Hiring a Single Tech Person',
    excerpt:
      'Three sessions. No new software. No IT department. Just a team that understood the right tools, in the right sequence — and saved ₹8 lakh a month in the process.',
    coverImage: '/blogs/Sitaram Case Study.png',
    category: 'Client Story',
    tags: ['AI Team Training', 'Textile · Surat'],
    clientName: 'Sitaram Creation',
    clientLogo: '/Sitaram Logo.jpg',
    clientLocation: 'Saree Exporter · Surat, Gujarat',
    publishedBy: 'Crosslinks AI',
    metrics: [
      { value: '₹8L', label: 'Saved Per Month', color: '#ffb950', sub: 'in manual work' },
      { value: '2',   label: 'Sessions',        color: '#7dd3fc', sub: 'before results showed up' },
      { value: '10x', label: 'Growth',           color: '#f97316', sub: 'within the same month' },
      { value: '1mo', label: 'Timeline',         color: '#86efac', sub: 'from start to results' },
    ],
    // Home-page card stat row
    cardStats: [
      { value: '₹8L', label: 'saved / month' },
      { value: '10x', label: 'growth' },
      { value: '2',   label: 'sessions to results' },
    ],
    // Outcome pills on the home card
    outcomes: [
      { icon: '↓', text: 'Reduced manual work' },
      { icon: '↑', text: '10x growth in a month' },
      { icon: '◎', text: 'AI product photography' },
      { icon: '⟶', text: 'Global buyer strategy' },
    ],
    sections: [
      {
        label: '01 — The Problem',
        blocks: [
          { type: 'paragraph', text: "Surat's textile industry is one of the most orthodox business ecosystems in India. Founders fear that training their teams will make them more hireable — and more likely to leave. So they don't invest. Skills stagnate. Costs quietly pile up." },
          { type: 'paragraph', text: 'Even product photography — something that directly drives sales — had become a commodity. The printer runs the shoot. Nobody pays for quality. Everyone pays for volume.' },
          { type: 'paragraph', text: "Sitaram Creations was operating in this exact environment. A well-established saree exporter with buyers in Europe, the US, Australia, and the Middle East. Running on a lean team. Doing things the way they'd always been done." },
          { type: 'pullQuote', text: '"Skills stagnate. Costs quietly pile up. Nobody pays for quality. Everyone pays for volume."' },
        ],
      },
      {
        label: '02 — What We Did',
        blocks: [
          { type: 'paragraph', text: 'We ran a three-session AI Team Training program, structured deliberately — not dumped all at once.' },
          {
            type: 'steps',
            items: [
              { num: '01', title: 'AI Fundamentals',                  body: "How tools are actually built, what they're meant for, and how to think about them without the hype." },
              { num: '02', title: 'AI-Generated Product Photography', body: 'Not outsourced. Done in-house, by the team, at a fraction of the cost.' },
              { num: '03', title: 'Full Automation',                  body: 'Product shoots, sales copy, follow-up messaging, and market research for specific buyer regions. All connected, all running without extra headcount.' },
            ],
          },
        ],
      },
      {
        label: '03 — The Result',
        blocks: [
          { type: 'paragraph', text: "By session three, the team had already stopped the manual labor they'd relied on for years. That saving didn't just sit in a ledger. It changed their pricing strategy. Lower costs meant they could offer real discounts to global buyers while still making strong margins." },
          {
            type: 'metricGrid',
            items: [
              { v: '₹8L', l: 'saved per month\nin manual work',      c: '#ffb950' },
              { v: '2',   l: 'sessions before\nresults showed up',   c: '#7dd3fc' },
              { v: '10x', l: 'growth within\nthe same month',        c: '#f97316' },
            ],
          },
          { type: 'pullQuote', text: '"One simple initiative of integrating AI the right way helped them do a lot — like grow 10x within the same month."', attribution: 'Crosslinks AI on Sitaram Creation' },
        ],
      },
      {
        label: '04 — The Sharpest Insight',
        blocks: [
          { type: 'paragraph', text: 'Their wholesale distributors are spread across very different regions: Europe, the Gulf, Australia. Once the team understood what AI could do, they started generating product photography styled for each specific market.' },
          { type: 'paragraph', text: 'A saree shot for a Middle Eastern buyer looks different than one shot for a European boutique. That relevance became a conversion tool — a no-brainer choice for buyers who had previously just browsed.' },
        ],
      },
      {
        label: '05 — What This Actually Means',
        blocks: [
          { type: 'paragraph', text: "This wasn't a tech overhaul. No new software subscriptions. No IT department. Just a small team that understood the right tools, in the right sequence, and ran with it." },
          { type: 'paragraph', text: 'When your team understands how AI is built — how wrappers work, how APIs process, what to say and what not to say — they stop waiting for someone to hand them a use case. They start finding new ones themselves.' },
          { type: 'paragraph', text: "That's where the compounding begins." },
        ],
      },
    ],
    cta: {
      heading: 'If your team is stuck in routine tasks that could be automated —',
      sub:     "The first step is knowing exactly where to start. That's what an AI Audit is for.",
      button:  'Get Your AI Audit from Crosslinks AI',
    },
  },
  // ── Add future blog posts below ──────────────────────────────────────────


  // ── Add future blog posts below ──────────────────────────────────────────
];

/** Lookup helper */
export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug) ?? null;
}
