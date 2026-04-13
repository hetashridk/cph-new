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
  {
  slug: 'ai-audit-before-spending',
  title: 'Before You Spend a Rupee on AI, Do This First',
  excerpt:
    'Most businesses jump into AI without clarity — wasting time and money. The real advantage comes from knowing exactly where to build, train, and automate before making a move.',
  coverImage: '/blogs/AI Audit Cover.png',
  category: 'Strategy',
  tags: ['AI Audit', 'Business Strategy', 'Automation'],
  clientName: 'Crosslinks AI',
  clientLogo: '/CrosslinksAIlogo.png',
  clientLocation: 'AI Strategy · Global',
  publishedBy: 'Piyush Bharoliya',

  metrics: [
    { value: '3', label: 'Core Decisions', color: '#ffb950', sub: 'build, train, automate' },
    { value: '6mo', label: 'Time Saved', color: '#7dd3fc', sub: 'by avoiding wrong moves' },
    { value: '₹₹₹', label: 'Cost Saved', color: '#f97316', sub: 'from wasted tools' },
    { value: '100%', label: 'Clarity', color: '#86efac', sub: 'before execution' },
  ],

  cardStats: [
    { value: '3', label: 'clear decisions' },
    { value: '100%', label: 'clarity first' },
    { value: '0', label: 'wasted tools' },
  ],

  outcomes: [
    { icon: '↓', text: 'Reduced wasted spend' },
    { icon: '↑', text: 'Better productivity' },
    { icon: '◎', text: 'Clear AI roadmap' },
    { icon: '⟶', text: 'Faster execution' },
  ],

  sections: [
    {
      label: '01 — The Problem',
      blocks: [
        {
          type: 'paragraph',
          text: 'Every business is being told to adopt AI. Almost none are being told where to start — and that gap is costing more than people realize.',
        },
        {
          type: 'paragraph',
          text: 'Most businesses fall into two traps: they either buy tools because competitors are using them, or they delay so long trying to make the perfect decision that they do nothing at all.',
        },
        {
          type: 'paragraph',
          text: 'Both are expensive mistakes. One wastes money. The other wastes time.',
        },
        {
          type: 'pullQuote',
          text: '"The businesses winning with AI aren’t the fastest — they’re the clearest."',
        },
      ],
    },

    {
      label: '02 — What an AI Audit Actually Is',
      blocks: [
        {
          type: 'paragraph',
          text: 'An AI Audit is a structured review of your business, your team, and your workflows to answer three very specific questions.',
        },
        {
          type: 'steps',
          items: [
            {
              num: '01',
              title: 'Where to Build',
              body: 'Identify parts of your business that need custom AI tools tailored to your workflows.',
            },
            {
              num: '02',
              title: 'Where to Train',
              body: 'Understand which teams should learn AI to improve how they work.',
            },
            {
              num: '03',
              title: 'Where to Automate',
              body: 'Pinpoint repetitive tasks that can be completely handled by AI.',
            },
          ],
        },
      ],
    },

    {
      label: '03 — Why Most Businesses Skip It',
      blocks: [
        {
          type: 'paragraph',
          text: 'An audit doesn’t feel urgent. Buying tools feels like action. Training feels like progress. Auditing feels like homework.',
        },
        {
          type: 'paragraph',
          text: 'But without it, businesses end up buying tools no one uses, training teams on the wrong workflows, and automating things that don’t actually matter.',
        },
        {
          type: 'paragraph',
          text: 'Six months later, they’ve spent money on AI and have nothing to show for it.',
        },
        {
          type: 'pullQuote',
          text: '"An AI Audit doesn’t slow you down. It makes sure you move in the right direction."',
        },
      ],
    },

    {
      label: '04 — What Changes After an Audit',
      blocks: [
        {
          type: 'paragraph',
          text: 'You stop asking “should we use AI?” and start asking “what do we build next?”',
        },
        {
          type: 'paragraph',
          text: 'The conversation shifts from uncertainty to execution. Teams understand which tools matter. Leadership knows where the highest-impact opportunities are.',
        },
        {
          type: 'paragraph',
          text: 'Instead of exploring endlessly, you execute with a clear, prioritized roadmap.',
        },
      ],
    },

    {
      label: '05 — What This Actually Means',
      blocks: [
        {
          type: 'paragraph',
          text: 'AI stops being a buzzword and becomes a real competitive advantage.',
        },
        {
          type: 'paragraph',
          text: 'Every decision — tools, training, automation — has a reason behind it.',
        },
        {
          type: 'paragraph',
          text: 'Clarity is what separates businesses experimenting with AI from those actually benefiting from it.',
        },
      ],
    },
  ],

  cta: {
    heading: 'Before you spend money on AI tools —',
    sub: "Start with clarity. Know exactly where AI creates value in your business.",
    button: 'Get Your AI Audit from Crosslinks AI',
  },
},
{
  slug: 'hidden-cost-of-manual-work',
  title: 'Your Team Is Spending 60% of Their Day on Work AI Can Do in 60 Seconds',
  excerpt:
    'The biggest invisible cost in your business isn’t tools or hiring — it’s manual work. And it’s quietly costing lakhs every year.',
  coverImage: '/blogs/Manual Work Cost.png',
  category: 'Strategy',
  tags: ['Automation', 'AI Audit', 'Productivity'],
  clientName: 'Crosslinks AI',
  clientLogo: '/CrosslinksAIlogo.png',
  clientLocation: 'AI Strategy · Global',
  publishedBy: 'Piyush Bharoliya',

  metrics: [
    { value: '750', label: 'Hours Wasted', color: '#ffb950', sub: 'per employee / year' },
    { value: '₹3L', label: 'Lost Per Person', color: '#7dd3fc', sub: 'in manual work' },
    { value: '₹30L', label: 'Lost / Team', color: '#f97316', sub: 'for 10 people' },
    { value: '60%', label: 'Workload', color: '#86efac', sub: 'can be automated' },
  ],

  cardStats: [
    { value: '750', label: 'hours wasted/year' },
    { value: '₹3L', label: 'lost per person' },
    { value: '60%', label: 'manual work' },
  ],

  outcomes: [
    { icon: '↓', text: 'Reduced manual work' },
    { icon: '↑', text: 'More productive teams' },
    { icon: '◎', text: 'Fewer human errors' },
    { icon: '⟶', text: 'Higher team morale' },
  ],

  sections: [
    {
      label: '01 — The Problem',
      blocks: [
        {
          type: 'paragraph',
          text: 'You hired smart people. Now they are spending most of their day doing work a machine could complete in seconds.',
        },
        {
          type: 'paragraph',
          text: 'The biggest invisible cost in your business is not your tools, your hires, or your ad spend. It is your team’s manual work.',
        },
        {
          type: 'paragraph',
          text: 'And it stays invisible because it hides inside normal-looking days.',
        },
        {
          type: 'pullQuote',
          text: '"Manual work doesn’t look expensive — until you add it up."',
        },
      ],
    },

    {
      label: '02 — What Manual Work Actually Looks Like',
      blocks: [
        {
          type: 'paragraph',
          text: 'Manual work shows up in small, repetitive tasks that seem harmless individually but compound over time.',
        },
        {
          type: 'steps',
          items: [
            { num: '01', title: 'Data Entry', body: 'Repetitive input across systems and spreadsheets.' },
            { num: '02', title: 'Report Generation', body: 'Creating recurring reports manually.' },
            { num: '03', title: 'Email Sorting', body: 'Filtering, replying, and organizing inboxes.' },
            { num: '04', title: 'Scheduling', body: 'Coordinating meetings and timelines.' },
            { num: '05', title: 'Copy-Pasting', body: 'Moving data between tools repeatedly.' },
          ],
        },
      ],
    },

    {
      label: '03 — Run the Numbers',
      blocks: [
        {
          type: 'paragraph',
          text: 'A few minutes here and there turns into hours. And those hours turn into costs you would never approve consciously.',
        },
        {
          type: 'metricGrid',
          items: [
            { v: '750', l: 'hours wasted\nper year / employee', c: '#ffb950' },
            { v: '₹3L', l: 'lost per person\nannually', c: '#7dd3fc' },
            { v: '₹30L', l: 'lost for a\n10-person team', c: '#f97316' },
          ],
        },
        {
          type: 'paragraph',
          text: 'And this only measures time — not errors, fatigue, or missed opportunities.',
        },
        {
          type: 'pullQuote',
          text: '"A 10-person team can quietly burn ₹30 lakh a year on work that should not require a human."',
        },
      ],
    },

    {
      label: '04 — Why Founders Miss This',
      blocks: [
        {
          type: 'paragraph',
          text: 'Manual work doesn’t announce itself. There is no invoice for wasted hours. It simply blends into daily operations.',
        },
        {
          type: 'paragraph',
          text: 'Most businesses only realize the scale when they map every repeated task and ask a simple question: does this really need a human?',
        },
        {
          type: 'paragraph',
          text: 'Most of the time, the answer is no.',
        },
      ],
    },

    {
      label: '05 — What Happens When You Fix It',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              num: '01',
              title: 'Time Reclaimed',
              body: 'Teams recover 15–20 hours per week within the first month.',
            },
            {
              num: '02',
              title: 'Cost Recovered',
              body: 'Saved time converts directly into productive capacity.',
            },
            {
              num: '03',
              title: 'Fewer Errors',
              body: 'Automation removes inconsistency and human fatigue.',
            },
            {
              num: '04',
              title: 'Better Morale',
              body: 'Smart people stay engaged doing meaningful work.',
            },
          ],
        },
      ],
    },

    {
      label: '06 — The First Step',
      blocks: [
        {
          type: 'paragraph',
          text: 'You cannot fix what you have not mapped. The first step is identifying exactly where time is being lost.',
        },
        {
          type: 'paragraph',
          text: 'That is what an AI Audit does — it shows where to automate, what to fix, and what to prioritize.',
        },
        {
          type: 'paragraph',
          text: 'Not a generic report. A clear, actionable plan tailored to your business.',
        },
      ],
    },
  ],

  cta: {
    heading: 'If your team is stuck doing manual work —',
    sub: 'Find out exactly where your time and money are being wasted, and what to automate first.',
    button: 'Get Your AI Audit from Crosslinks AI',
  },
}
  // ── Add future blog posts below ──────────────────────────────────────────


  // ── Add future blog posts below ──────────────────────────────────────────
];

/** Lookup helper */
export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug) ?? null;
}
