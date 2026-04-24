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
      'Three sessions. No new software. No IT department. Just a team that understood the right tools, in the right sequenceand saved ₹8 lakh a month in the process.',
    coverImage: '/blogs/Sitaram Case Study.png',
    category: 'Client Story',
    tags: ['AI Team Training', 'Textile · Surat'],
    clientName: 'Sitaram Creation',
    clientLogo: '/Sitaram Logo.jpg',
    clientLocation: 'Saree Exporter · Surat, Gujarat',
    publishedBy: 'Crosslinks AI',
    metrics: [
      { value: '₹8L', label: 'Saved Per Month', color: '#ffb950', sub: 'in manual work' },
      { value: '2', label: 'Sessions', color: '#7dd3fc', sub: 'before results showed up' },
      { value: '10x', label: 'Growth', color: '#f97316', sub: 'within the same month' },
      { value: '1mo', label: 'Timeline', color: '#86efac', sub: 'from start to results' },
    ],
    // Home-page card stat row
    cardStats: [
      { value: '₹8L', label: 'saved / month' },
      { value: '10x', label: 'growth' },
      { value: '2', label: 'sessions to results' },
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
        label: '01The Problem',
        blocks: [
          { type: 'paragraph', text: "Surat's textile industry is one of the most orthodox business ecosystems in India. Founders fear that training their teams will make them more hireableand more likely to leave. So they don't invest. Skills stagnate. Costs quietly pile up." },
          { type: 'paragraph', text: 'Even product photographysomething that directly drives saleshad become a commodity. The printer runs the shoot. Nobody pays for quality. Everyone pays for volume.' },
          { type: 'paragraph', text: "Sitaram Creations was operating in this exact environment. A well-established saree exporter with buyers in Europe, the US, Australia, and the Middle East. Running on a lean team. Doing things the way they'd always been done." },
          { type: 'pullQuote', text: '"Skills stagnate. Costs quietly pile up. Nobody pays for quality. Everyone pays for volume."' },
        ],
      },
      {
        label: '02What We Did',
        blocks: [
          { type: 'paragraph', text: 'We ran a three-session AI Team Training program, structured deliberatelynot dumped all at once.' },
          {
            type: 'steps',
            items: [
              { num: '01', title: 'AI Fundamentals', body: "How tools are actually built, what they're meant for, and how to think about them without the hype." },
              { num: '02', title: 'AI-Generated Product Photography', body: 'Not outsourced. Done in-house, by the team, at a fraction of the cost.' },
              { num: '03', title: 'Full Automation', body: 'Product shoots, sales copy, follow-up messaging, and market research for specific buyer regions. All connected, all running without extra headcount.' },
            ],
          },
        ],
      },
      {
        label: '03The Result',
        blocks: [
          { type: 'paragraph', text: "By session three, the team had already stopped the manual labor they'd relied on for years. That saving didn't just sit in a ledger. It changed their pricing strategy. Lower costs meant they could offer real discounts to global buyers while still making strong margins." },
          {
            type: 'metricGrid',
            items: [
              { v: '₹8L', l: 'saved per month\nin manual work', c: '#ffb950' },
              { v: '2', l: 'sessions before\nresults showed up', c: '#7dd3fc' },
              { v: '10x', l: 'growth within\nthe same month', c: '#f97316' },
            ],
          },
          { type: 'pullQuote', text: '"One simple initiative of integrating AI the right way helped them do a lotlike grow 10x within the same month."', attribution: 'Crosslinks AI on Sitaram Creation' },
        ],
      },
      {
        label: '04The Sharpest Insight',
        blocks: [
          { type: 'paragraph', text: 'Their wholesale distributors are spread across very different regions: Europe, the Gulf, Australia. Once the team understood what AI could do, they started generating product photography styled for each specific market.' },
          { type: 'paragraph', text: 'A saree shot for a Middle Eastern buyer looks different than one shot for a European boutique. That relevance became a conversion toola no-brainer choice for buyers who had previously just browsed.' },
        ],
      },
      {
        label: '05What This Actually Means',
        blocks: [
          { type: 'paragraph', text: "This wasn't a tech overhaul. No new software subscriptions. No IT department. Just a small team that understood the right tools, in the right sequence, and ran with it." },
          { type: 'paragraph', text: 'When your team understands how AI is builthow wrappers work, how APIs process, what to say and what not to saythey stop waiting for someone to hand them a use case. They start finding new ones themselves.' },
          { type: 'paragraph', text: "That's where the compounding begins." },
        ],
      },
    ],
    cta: {
      heading: 'If your team is stuck in routine tasks that could be automated,',
      sub: "The first step is knowing exactly where to start. That's what an AI Audit is for.",
      button: 'Get Your AI Audit from Crosslinks AI',
    },
  },
  {
    slug: 'ai-audit-before-spending',
    title: 'Before You Spend a Rupee on AI, Do This First',
    excerpt:
      'Most businesses jump into AI without claritywasting time and money. The real advantage comes from knowing exactly where to build, train, and automate before making a move.',
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
        label: '01The Problem',
        blocks: [
          {
            type: 'paragraph',
            text: 'Every business is being told to adopt AI. Almost none are being told where to startand that gap is costing more than people realize.',
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
            text: '"The businesses winning with AI aren’t the fastestthey’re the clearest."',
          },
        ],
      },

      {
        label: '02What an AI Audit Actually Is',
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
        label: '03Why Most Businesses Skip It',
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
        label: '04What Changes After an Audit',
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
        label: '05What This Actually Means',
        blocks: [
          {
            type: 'paragraph',
            text: 'AI stops being a buzzword and becomes a real competitive advantage.',
          },
          {
            type: 'paragraph',
            text: 'Every decisiontools, training, automationhas a reason behind it.',
          },
          {
            type: 'paragraph',
            text: 'Clarity is what separates businesses experimenting with AI from those actually benefiting from it.',
          },
        ],
      },
    ],

    cta: {
      heading: 'Before you spend money on AI tools,',
      sub: "Start with clarity. Know exactly where AI creates value in your business.",
      button: 'Get Your AI Audit from Crosslinks AI',
    },
  },
  {
    slug: 'hidden-cost-of-manual-work',
    title: 'Your Team Is Spending 60% of Their Day on Work AI Can Do in 60 Seconds',
    excerpt:
      'The biggest invisible cost in your business isn’t tools or hiringit’s manual work. And it’s quietly costing lakhs every year.',
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
        label: '01The Problem',
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
            text: '"Manual work doesn’t look expensiveuntil you add it up."',
          },
        ],
      },

      {
        label: '02What Manual Work Actually Looks Like',
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
        label: '03Run the Numbers',
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
            text: 'And this only measures timenot errors, fatigue, or missed opportunities.',
          },
          {
            type: 'pullQuote',
            text: '"A 10-person team can quietly burn ₹30 lakh a year on work that should not require a human."',
          },
        ],
      },

      {
        label: '04Why Founders Miss This',
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
        label: '05What Happens When You Fix It',
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
        label: '06The First Step',
        blocks: [
          {
            type: 'paragraph',
            text: 'You cannot fix what you have not mapped. The first step is identifying exactly where time is being lost.',
          },
          {
            type: 'paragraph',
            text: 'That is what an AI Audit doesit shows where to automate, what to fix, and what to prioritize.',
          },
          {
            type: 'paragraph',
            text: 'Not a generic report. A clear, actionable plan tailored to your business.',
          },
        ],
      },
    ],

    cta: {
      heading: 'If your team is stuck doing manual work,',
      sub: 'Find out exactly where your time and money are being wasted, and what to automate first.',
      button: 'Get Your AI Audit from Crosslinks AI',
    },
  },
  {
    slug: 'why-we-exist',
    title: 'Why We Started Crosslinks AI',
    excerpt:
      'We watched smart people get buried in work that should never have reached them. The gap was not technologyit was translation. That is why Crosslinks AI exists.',
    coverImage: '/blogs/Why we exist.png',
    category: 'About',
    tags: ['AI Strategy', 'Business Transformation'],
    clientName: 'Crosslinks AI',
    clientLogo: '/CrosslinksAIlogo.png',
    clientLocation: 'AI Strategy · Global',
    publishedBy: 'Piyush Bharoliya',

    metrics: [
      { value: '3', label: 'Team Size', color: '#ffb950', sub: 'not a faceless platform' },
      { value: '100%', label: 'Bespoke', color: '#7dd3fc', sub: 'tailored to your business' },
      { value: '3', label: 'Core Services', color: '#f97316', sub: 'audit, consult, train' },
      { value: '∞', label: 'Impact', color: '#86efac', sub: 'time given back' },
    ],

    cardStats: [
      { value: '3', label: 'person team' },
      { value: '3', label: 'core services' },
      { value: '100%', label: 'tailored' },
    ],

    outcomes: [
      { icon: '↓', text: 'Reduced operational burden' },
      { icon: '↑', text: 'Time reclaimed for growth' },
      { icon: '◎', text: 'AI made accessible' },
      { icon: '⟶', text: 'Clear path to execution' },
    ],

    sections: [
      {
        label: '01The Problem We Kept Seeing',
        blocks: [
          {
            type: 'paragraph',
            text: 'We watched smart people get buried in work that should never have reached them. Founders who built something real, who knew their industry inside out, and who genuinely cared about doing right by their teams.',
          },
          {
            type: 'paragraph',
            text: 'Small business owners. Local store owners. Engineers. Doctors. Educators. Retailers. All of them stuck. Not failing. Just stuck. Spending the sharpest hours of their day on tasks that did not need their intelligence, their experience, or their judgment.',
          },
          {
            type: 'pullQuote',
            text: '"I know we should be moving faster. But we are stuck in operations."',
          },
          {
            type: 'paragraph',
            text: 'I heard that line more times than I can count. Across industries. Across cities. Across team sizes. And every time, I thought the same thing: this is a solvable problem. The tools exist. The gap is not technology. The gap is translation.',
          },
        ],
      },
      {
        label: '02Why We Started Crosslinks AI',
        blocks: [
          {
            type: 'paragraph',
            text: 'So many businesses need someone to sit with them, understand how their operation actually works, and translate AI into workflows their team can use on Monday morning.',
          },
          {
            type: 'paragraph',
            text: 'That is the gap Crosslinks AI was built to close. We are a team of three. Not a faceless platform. Not a vendor handing you a report and disappearing. We get into the details of your business and build a bridge between what AI can do and what your team actually needs.',
          },
        ],
      },
      {
        label: '03Our Why',
        blocks: [
          {
            type: 'paragraph',
            text: 'We want to make AI easy for everyone to understand and use. Not just for tech people. Not just for big companies. For anyone who wants to save time, reduce effort, and work smarter.',
          },
          {
            type: 'paragraph',
            text: 'We care about the business owners who are first in and last out and still feel behind. The team talented enough to do so much more but buried in repetitive tasks. The business with the ambition to grow but not the bandwidth to execute.',
          },
          {
            type: 'pullQuote',
            text: '"AI, applied the right way, gives all of those people their time back. That is what Crosslinks AI exists to do."',
          },
        ],
      },
      {
        label: '04How We Do It',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                num: '01',
                title: 'AI Audit',
                body: 'We map your business and identify exactly where AI creates the most value.',
              },
              {
                num: '02',
                title: 'AI Consultation',
                body: 'We build an AI strategy that fits your business, not a generic template.',
              },
              {
                num: '03',
                title: 'AI Team Training',
                body: 'We train your team on the right tools so they can hit the ground running.',
              },
            ],
          },
        ],
      },
    ],

    cta: {
      heading: 'If any of this sounds familiar,',
      sub: "A conversation doesn't cost anything. Let us look at your business together and show you what is possible.",
      button: 'Talk to Crosslinks AI',
    },
  },
  {
    slug: 'ai-adopters-vs-ai-winners',
    title: 'Everyone Is Talking About AI. Almost Nobody Is Finishing.',
    excerpt:
      'Ideas are everywhere. Awareness is everywhere. What is rare is finishing. And in AI adoption, finishing is everything.',
    coverImage: '/blogs/AI adopters vs AI winners.png',
    category: 'Strategy',
    tags: ['AI Strategy', 'Execution', 'Business Growth'],
    clientName: 'Crosslinks AI',
    clientLogo: '/CrosslinksAIlogo.png',
    clientLocation: 'AI Strategy · Global',
    publishedBy: 'Piyush Bharoliya',

    metrics: [
      { value: '3', label: 'Habits', color: '#ffb950', sub: 'that separate winners' },
      { value: '0', label: 'Excuses', color: '#7dd3fc', sub: 'just execution' },
      { value: '100%', label: 'Finish Rate', color: '#f97316', sub: 'the real differentiator' },
      { value: '1', label: 'Clear Plan', color: '#86efac', sub: 'before you begin' },
    ],

    cardStats: [
      { value: '3', label: 'winning habits' },
      { value: '1', label: 'clear roadmap' },
      { value: '0', label: 'stalled initiatives' },
    ],

    outcomes: [
      { icon: '↓', text: 'Fewer abandoned initiatives' },
      { icon: '↑', text: 'Compounding AI results' },
      { icon: '◎', text: 'Clear starting point' },
      { icon: '⟶', text: 'Consistent execution' },
    ],

    sections: [
      {
        label: '01The Pattern We See Everywhere',
        blocks: [
          {
            type: 'paragraph',
            text: 'Every business you compete with has heard of AI. Only a few of them are actually doing anything with it.',
          },
          {
            type: 'paragraph',
            text: 'Most businesses that "try AI" follow the same arc. There is an exciting conversation in a leadership meeting. Someone gets assigned to explore it. A tool gets signed up for. A few people use it casually for a week. And then quietly, without anyone officially deciding anything, it stops.',
          },
          {
            type: 'paragraph',
            text: 'No one failed. No one quit. The business just moved on to the next urgent thing. And the AI initiative joined the long list of good ideas that never became real results.',
          },
          {
            type: 'pullQuote',
            text: '"The market is not short of businesses that almost adopted AI. What is rare is the ones that are finished."',
          },
        ],
      },
      {
        label: '02What Separates the Winners',
        blocks: [
          {
            type: 'paragraph',
            text: 'It is not a budget issue. It is not team size. It is not even the tools they chose. The businesses that actually win with AI do three things consistently.',
          },
          {
            type: 'steps',
            items: [
              {
                num: '01',
                title: 'They Close Loops',
                body: 'Every AI initiative has a defined outcome and someone accountable for reaching it. Exploration without a finish line goes nowhere.',
              },
              {
                num: '02',
                title: 'They Deliver What Was Promised',
                body: 'They do not move to the next tool until the current one is embedded in how the team actually works.',
              },
              {
                num: '03',
                title: 'They Stay Consistent When Momentum Drops',
                body: 'Because momentum always drops. The businesses that push through that dip are the ones that compound results over time.',
              },
              {
                num: '04',
                title: 'They Start With a Plan',
                body: 'Not a vague intention to "use more AI." A specific roadmap of where to start, what to build, and what comes next.',
              },
            ],
          },
        ],
      },
      {
        label: '03Execution Is the Real Differentiator',
        blocks: [
          {
            type: 'paragraph',
            text: 'Finishing builds trust inside your team. Finishing compounds credibility with your leadership. Finishing is what turns an AI strategy from a slide deck into a competitive advantage.',
          },
          {
            type: 'paragraph',
            text: 'The businesses that are pulling ahead right now are not the ones who talked about AI the longest. They are the ones who started specific, stayed consistent, and saw it through.',
          },
          {
            type: 'pullQuote',
            text: '"That is not a technology problem. That is an execution problem. And execution starts with knowing exactly where to begin."',
          },
        ],
      },
    ],

    cta: {
      heading: 'Crosslinks AI exists to make sure your AI adoption does not stall at intent,',
      sub: 'We give you a clear starting point, a structured path, and the support to follow through on it.',
      button: 'Talk to Crosslinks AI',
    },
  },
  {
    slug: 'ai-in-logistics',
    title: 'Logistics Chaos Is Not a People Problem. It Is a Systems Problem.',
    excerpt:
      'Delayed shipments. Mislabelled boxes. A team firefighting the same issues day after day. AI is changing this faster than most operators realise.',
    coverImage: '/blogs/AI in Logistics.png',
    category: 'Strategy',
    tags: ['Logistics', 'Automation', 'Operations'],
    clientName: 'Crosslinks AI',
    clientLogo: '/CrosslinksAIlogo.png',
    clientLocation: 'AI Strategy · Global',
    publishedBy: 'Piyush Bharoliya',

    metrics: [
      { value: '↓', label: 'Delays Reduced', color: '#ffb950', sub: 'via real-time tracking' },
      { value: '↑', label: 'Inventory Accuracy', color: '#7dd3fc', sub: 'automated stock tracking' },
      { value: '0', label: 'Manual Reports', color: '#f97316', sub: 'data ready in seconds' },
      { value: '100%', label: 'Buyer Visibility', color: '#86efac', sub: 'automated updates' },
    ],

    cardStats: [
      { value: '↓', label: 'delays' },
      { value: '↑', label: 'accuracy' },
      { value: '0', label: 'manual reports' },
    ],

    outcomes: [
      { icon: '↓', text: 'Fewer delays & errors' },
      { icon: '↑', text: 'Real-time visibility' },
      { icon: '◎', text: 'Automated customer updates' },
      { icon: '⟶', text: 'Data-driven decisions' },
    ],

    sections: [
      {
        label: '01What Operators Have Accepted as Normal',
        blocks: [
          {
            type: 'paragraph',
            text: 'The most dangerous thing about logistics chaos is how normal it looks. A delayed shipment gets resolved. A mislabelled order gets corrected. An angry customer gets a discount. Life moves on.',
          },
          {
            type: 'paragraph',
            text: 'But each of those moments has a cost. Time spent firefighting is time not spent growing. Errors that get fixed manually still cost money, trust, and energy. And a team that spends its day managing chaos has nothing left for the work that actually moves the business forward.',
          },
          {
            type: 'pullQuote',
            text: '"Chaos that gets resolved is still chaos. Fixing a problem repeatedly is not the same as solving it."',
          },
        ],
      },
      {
        label: '02Where AI Makes the Biggest Difference',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                num: '01',
                title: 'Shipment Visibility',
                body: 'AI tracks every order in real time and flags issues before they become delays. Your team stops chasing updates and starts managing exceptions.',
              },
              {
                num: '02',
                title: 'Inventory Management',
                body: 'Automated stock tracking eliminates manual counts and reduces the mismatch between what the system says and what is actually on the shelf.',
              },
              {
                num: '03',
                title: 'Customer Communication',
                body: 'AI-generated updates keep buyers informed automatically. Fewer calls, fewer complaints, fewer hours spent explaining what went wrong.',
              },
              {
                num: '04',
                title: 'Operations Reporting',
                body: 'Data that used to take hours to compile is ready in seconds. Decisions get made on current information, not yesterday\'s spreadsheet.',
              },
            ],
          },
        ],
      },
      {
        label: '03The First Step',
        blocks: [
          {
            type: 'paragraph',
            text: 'You do not need to overhaul everything at once. The businesses that integrate AI successfully start with one question: where is the most time being lost right now? That single answer tells you exactly where to begin.',
          },
          {
            type: 'paragraph',
            text: 'Getting that answer clearly and quickly is what an AI Audit is built for.',
          },
        ],
      },
    ],

    cta: {
      heading: 'Want to know where your business is losing time and money?',
      sub: 'An AI Audit maps your operations and shows exactly where to start.',
      button: 'Get Your AI Audit from Crosslinks AI',
    },
  },
  {
    slug: 'ai-in-hr-cv-screening',
    title: 'An HR Team Was Spending 11 Hours a Week on CV Screening. Here Is How That Came Down to 40 Minutes.',
    excerpt:
      '572 hours lost per year on first-round screening alone. The right AI workflow changed that completelyand freed your team to do the work they were actually hired for.',
    coverImage: '/blogs/AI in HR.png',
    category: 'Strategy',
    tags: ['HR', 'Automation', 'Productivity'],
    clientName: 'Crosslinks AI',
    clientLogo: '/CrosslinksAIlogo.png',
    clientLocation: 'AI Strategy · Global',
    publishedBy: 'Piyush Bharoliya',

    metrics: [
      { value: '11h', label: 'Per Week Screening', color: '#ffb950', sub: 'before AI' },
      { value: '40m', label: 'With AI Workflow', color: '#7dd3fc', sub: 'after training' },
      { value: '572', label: 'Hours Lost / Year', color: '#f97316', sub: 'on one manual task' },
      { value: '100%', label: 'Better Hiring', color: '#86efac', sub: 'decisions' },
    ],

    cardStats: [
      { value: '11h→40m', label: 'screening time' },
      { value: '572', label: 'hours saved/year' },
      { value: '4', label: 'step workflow' },
    ],

    outcomes: [
      { icon: '↓', text: 'Screening time cut by 94%' },
      { icon: '↑', text: 'Sharper hiring decisions' },
      { icon: '◎', text: 'Better candidate experience' },
      { icon: '⟶', text: 'Scalable hiring process' },
    ],

    sections: [
      {
        label: '01The Cost Nobody Calculates',
        blocks: [
          {
            type: 'paragraph',
            text: 'Think about what 11 hours a week actually means. That is more than a full working day, every week, spent reading CVs, copying notes into spreadsheets, and deciding who makes the next round. No strategy. No candidate experience. Just volume management.',
          },
          {
            type: 'paragraph',
            text: 'And this is not unusual. It is standard. Most growing businesses have an HR function spending the majority of its time on work that has nothing to do with people strategy.',
          },
          {
            type: 'metricGrid',
            items: [
              { v: '11h', l: 'per week on\nCV screening alone', c: '#ffb950' },
              { v: '572', l: 'hours lost\nper year', c: '#7dd3fc' },
              { v: '40m', l: 'with the right\nAI workflow', c: '#f97316' },
            ],
          },
          {
            type: 'pullQuote',
            text: '"Your HR team was not hired to read CVs for 11 hours a week. They were hired to find the right people. Those are very different jobs."',
          },
        ],
      },
      {
        label: '02How the Workflow Changes',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                num: '01',
                title: 'Define the Screening Criteria Once',
                body: 'Build a clear document covering must-haves, nice-to-haves, and disqualifiers for the role. 20 minutes of setup. Only revisited when the role changes.',
              },
              {
                num: '02',
                title: 'AI Screens and Scores Every CV',
                body: 'Every application gets evaluated against the same standard. No fatigue, no inconsistency. Each CV gets a structured summary and a shortlist recommendation.',
              },
              {
                num: '03',
                title: 'Your Team Reviews the Shortlist, Not the Pile',
                body: 'Instead of reading 80 CVs, your team reviews 10 to 12 pre-scored summaries. Their time goes entirely into judgment, not filtering.',
              },
              {
                num: '04',
                title: 'Candidate Communications Go Out Automatically',
                body: 'Acknowledgements, next steps, and rejection messages are drafted by AI and sent without your team writing a single one from scratch.',
              },
            ],
          },
        ],
      },
      {
        label: '03What Your Team Does With the Time Back',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                num: '01',
                title: 'Better Candidate Experience',
                body: 'Faster responses and more personal conversations. Good candidates stop dropping out from waiting.',
              },
              {
                num: '02',
                title: 'Sharper Hiring Decisions',
                body: 'A team reviewing 12 summaries instead of 80 CVs makes better calls. Less fatigue, more consistency.',
              },
              {
                num: '03',
                title: 'Strategic HR Work',
                body: 'Culture building, retention planning, onboarding quality. The work that actually affects how long good people stay.',
              },
              {
                num: '04',
                title: 'Scalable Hiring',
                body: "When you need to hire fast, the workflow handles the volume. Your team's capacity stops being the bottleneck.",
              },
            ],
          },
        ],
      },
      {
        label: '04The Bigger Picture',
        blocks: [
          {
            type: 'paragraph',
            text: 'CV screening is just one task. Most HR teams have five to ten more just like it. Onboarding paperwork. Training coordination. Policy updates. Exit interview summaries. Each looks manageable alone. Together, they consume a function that should be driving your people strategy.',
          },
          {
            type: 'paragraph',
            text: 'The question is not whether AI can help your HR team. It already can. The question is where to start, and what to tackle next.',
          },
        ],
      },
    ],

    cta: {
      heading: 'An AI Audit maps exactly where your team is losing time,',
      sub: 'And builds you a clear plan to take it back, starting with the highest-impact tasks first.',
      button: 'Get Your AI Audit from Crosslinks AI',
    },
  },
  {
    slug: 'ai-is-coming-for-their-job',
    title: 'Your Team Thinks AI Is Coming for Their Job. Here Is What You Should Tell Them.',
    excerpt:
      "Nobody says it out loud. But it's in the room every time AI comes up. If you haven't addressed it directly, that fear is already costing you.",
    coverImage: '/blogs/AI is coming for their job.png',
    category: 'Strategy',
    tags: ['AI Team Training', 'Leadership', 'Culture'],
    clientName: 'Crosslinks AI',
    clientLogo: '/CrosslinksAIlogo.png',
    clientLocation: 'AI Strategy · Global',
    publishedBy: 'Piyush Bharoliya',

    metrics: [
      { value: '0', label: 'Tools Used', color: '#ffb950', sub: 'when fear is unaddressed' },
      { value: '↑', label: 'Confidence', color: '#7dd3fc', sub: 'after proper training' },
      { value: '↑', label: 'Adoption', color: '#f97316', sub: 'when teams feel safe' },
      { value: '∞', label: 'Compound Advantage', color: '#86efac', sub: 'over competitors' },
    ],

    cardStats: [
      { value: '0', label: 'tools used (fear mode)' },
      { value: '↑', label: 'confidence after training' },
      { value: '∞', label: 'compounding advantage' },
    ],

    outcomes: [
      { icon: '↓', text: 'Fear turned into fluency' },
      { icon: '↑', text: 'AI adoption across team' },
      { icon: '◎', text: 'Real workflow integration' },
      { icon: '⟶', text: 'Compounding advantage' },
    ],

    sections: [
      {
        label: '01Where the Fear Actually Comes From',
        blocks: [
          {
            type: 'paragraph',
            text: "Nobody says it out loud. But it is in the room every time AI comes up in a team meeting. The quiet calculation happening behind every nodding face: is this the beginning of the end of my role here?",
          },
          {
            type: 'paragraph',
            text: "The fear of replacement is not irrational. It is a logical response to incomplete information. Your team has seen the headlines. They know AI can write, analyse, generate, summarise, and automate. What they have not been shown is what that actually means for them, specifically, in their role, in your company.",
          },
          {
            type: 'pullQuote',
            text: '"People resist AI because nobody has shown them where they fit in the new picture."',
          },
        ],
      },
      {
        label: '02The Reframe Your Team Needs to Hear',
        blocks: [
          {
            type: 'paragraph',
            text: 'The conversation most leaders have not had with their teams is the one that shifts AI from a threat into a tool. It is not a complicated conversation. But it has to be specific, not abstract.',
          },
          {
            type: 'steps',
            items: [
              {
                num: '01',
                title: 'AI is going to replace your job',
                body: '→ AI is going to replace the parts of your job that were never the best use of you.',
              },
              {
                num: '02',
                title: 'You need to compete with AI',
                body: '→ You need to learn how to direct it, and that makes you more valuable.',
              },
              {
                num: '03',
                title: 'AI is for tech people',
                body: '→ AI is for anyone who knows their work well enough to explain it clearly.',
              },
              {
                num: '04',
                title: 'If I learn this, I might train myself out of a job',
                body: '→ If I learn this, I become the person who knows how to use the most powerful tool in the business.',
              },
            ],
          },
        ],
      },
      {
        label: '03What Actually Happens When Teams Get Trained Properly',
        blocks: [
          {
            type: 'paragraph',
            text: 'The fear does not disappear because a leader says the right words once. It disappears when a team member opens an AI tool, uses it on something real from their own workflow, and gets a result that makes their day easier.',
          },
          {
            type: 'paragraph',
            text: 'This is why training is not optional. It is the mechanism through which fear becomes confidence. A team that understands how AI works, what it is built for, and how to apply it to their specific role does not fear it. They use it.',
          },
          {
            type: 'pullQuote',
            text: '"Without training: Fear stays. Tools go unused. The gap between your team and AI-enabled competitors widens quietly every month."',
          },
        ],
      },
    ],

    cta: {
      heading: 'My AI Team Training is built to turn this exact fear into confidence,',
      sub: 'We work with your team directly, in sessions built around their real workflows, until using AI feels less like a risk and more like a reflex.',
      button: 'Book an AI Training Session',
    },
  },
  {
    slug: 'bad-first-result-with-ai',
    title: 'Your Team Opened the AI Tool, Got a Bad Result, and Never Went Back.',
    excerpt:
      'This is not laziness. It is a completely predictable outcome when a team is handed a powerful tool without the context to use it well.',
    coverImage: '/blogs/Bad result with AI.png',
    category: 'Strategy',
    tags: ['AI Team Training', 'Adoption', 'Productivity'],
    clientName: 'Crosslinks AI',
    clientLogo: '/CrosslinksAIlogo.png',
    clientLocation: 'AI Strategy · Global',
    publishedBy: 'Piyush Bharoliya',

    metrics: [
      { value: '1', label: 'Bad First Result', color: '#ffb950', sub: 'kills adoption' },
      { value: '0', label: 'Usage After', color: '#7dd3fc', sub: 'tool sits idle' },
      { value: '↑', label: 'Adoption', color: '#f97316', sub: 'with proper training' },
      { value: '∞', label: 'New Use Cases', color: '#86efac', sub: 'team finds themselves' },
    ],

    cardStats: [
      { value: '1', label: 'bad result = no adoption' },
      { value: '0', label: 'usage without context' },
      { value: '↑', label: 'results with training' },
    ],

    outcomes: [
      { icon: '↓', text: 'Bad first impressions avoided' },
      { icon: '↑', text: 'Confidence from day one' },
      { icon: '◎', text: 'Real workflow application' },
      { icon: '⟶', text: 'Self-sustaining adoption' },
    ],

    sections: [
      {
        label: '01Why the First Experience Is Everything',
        blocks: [
          {
            type: 'paragraph',
            text: 'It usually goes like this. A new AI tool gets introduced. Someone on the team tries it. They type something in, get a response that feels generic or off, and quietly close the tab. They do not complain. They do not raise it in a meeting. They just stop.',
          },
          {
            type: 'paragraph',
            text: 'This is not laziness. It is a completely predictable outcome when a team is handed a powerful tool without the context to use it well.',
          },
          {
            type: 'pullQuote',
            text: '"A bad first experience with AI is not a tool problem. It is a preparation problem. And it is entirely preventable."',
          },
        ],
      },
      {
        label: '02What Actually Causes a Bad First Result',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                num: '01',
                title: 'No Understanding of How the Tool Thinks',
                body: 'AI tools are not search engines. They respond to how you frame a request. Without knowing this, most people type a vague one-liner and get a vague one-liner back.',
              },
              {
                num: '02',
                title: 'No Connection to Real Work',
                body: 'Generic demos and tutorial videos show AI writing poems or summarising the news. Your team has no frame of reference for what this looks like applied to their actual job.',
              },
              {
                num: '03',
                title: 'No One to Course-Correct in the Moment',
                body: 'When you get a bad result and there is nobody to say "try it this way instead," you stop. Learning by trial and error alone is slow and frustrating.',
              },
              {
                num: '04',
                title: 'No Shared Standard Across the Team',
                body: 'Without a common framework, different people use the same tool in completely different ways. Some get good results. Most do not. The inconsistency reinforces the belief that the tool is unreliable.',
              },
            ],
          },
        ],
      },
      {
        label: '03What Changes When Training Comes First',
        blocks: [
          {
            type: 'paragraph',
            text: 'Giving your team access to an AI tool is not the same as giving them the ability to use it well. Those are two completely separate things and most organisations only do the first one.',
          },
          {
            type: 'paragraph',
            text: 'Real confidence comes from understanding how the tool is built, what it responds to, and how to apply it to work your team already knows inside out.',
          },
          {
            type: 'pullQuote',
            text: '"Access without training: Bad first result. Silent disengagement. Tool sits unused. Investment wasted. Team falls behind."',
          },
          {
            type: 'paragraph',
            text: 'Access with proper training: Good first result. Confidence builds. Team finds new use cases. Adoption spreads. Advantage compounds.',
          },
        ],
      },
    ],

    cta: {
      heading: 'If your team has been given AI tools but adoption has stalled,',
      sub: 'The first session with Crosslinks AI will show you exactly why and exactly how to fix it.',
      button: 'Book an AI Training Session',
    },
  },
  {
    slug: 'never-experiment-with-ai',
    title: 'Your Team Will Never Experiment With AI in a Culture That Punishes Mistakes.',
    excerpt:
      'You can buy the best AI tools. Run the best training. And your team will still not experiment if the culture tells them that getting something wrong is not safe.',
    coverImage: '/blogs/Never Experiment with AI.png',
    category: 'Strategy',
    tags: ['AI Team Training', 'Leadership', 'Culture'],
    clientName: 'Crosslinks AI',
    clientLogo: '/CrosslinksAIlogo.png',
    clientLocation: 'AI Strategy · Global',
    publishedBy: 'Piyush Bharoliya',

    metrics: [
      { value: '0', label: 'Experiments', color: '#ffb950', sub: 'in punishing cultures' },
      { value: '↑', label: 'Iteration', color: '#7dd3fc', sub: 'with psychological safety' },
      { value: '↑', label: 'Adoption', color: '#f97316', sub: 'when leaders go first' },
      { value: '∞', label: 'Compounding', color: '#86efac', sub: 'when culture enables it' },
    ],

    cardStats: [
      { value: '0', label: 'experiments (fear culture)' },
      { value: '↑', label: 'adoption (safe culture)' },
      { value: '∞', label: 'compound advantage' },
    ],

    outcomes: [
      { icon: '↓', text: 'Fear of failure reduced' },
      { icon: '↑', text: 'Experimentation encouraged' },
      { icon: '◎', text: 'Leaders model safety' },
      { icon: '⟶', text: 'Self-sustaining AI culture' },
    ],

    sections: [
      {
        label: '01What a Mistake-Punishing Culture Actually Looks Like',
        blocks: [
          {
            type: 'paragraph',
            text: 'It rarely looks like shouting. It does not usually involve formal consequences. It is far more subtle than that, and far more damaging because of it.',
          },
          {
            type: 'steps',
            items: [
              { num: '01', title: 'New ideas get dismissed', body: '"That is not how we do things here."' },
              { num: '02', title: 'Failure is remembered', body: 'The person who tries something new and fails is remembered for the failure, not the initiative.' },
              { num: '03', title: 'Meetings reward certainty', body: 'Uncertainty is penalised. Nobody asks "what did we learn?" They ask "what went wrong?"' },
              { num: '04', title: 'The safest move is the old move', body: 'The rational choice for anyone who wants to keep their standing is to wait and see what everyone else does first.' },
            ],
          },
          {
            type: 'pullQuote',
            text: '"Psychological safety is not a soft concept. It is a hard business requirement for AI adoption. Without it, nothing else works."',
          },
        ],
      },
      {
        label: '02Why AI Specifically Requires Experimentation',
        blocks: [
          {
            type: 'paragraph',
            text: 'Most tools have a right way and a wrong way to use them. AI does not work like that. It rewards iteration. The first prompt is rarely the best one. The first workflow you build will almost certainly be improved upon.',
          },
          {
            type: 'paragraph',
            text: 'That process is fundamentally incompatible with a culture that treats the first imperfect attempt as a failure. You cannot iterate your way to mastery if iteration itself feels risky.',
          },
        ],
      },
      {
        label: '03What Leaders Can Actually Do About It',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                num: '01',
                title: 'Go First',
                body: 'Share an AI experiment that did not work. What you tried, what happened, what you learned. Nothing signals safety faster than a leader modelling it.',
              },
              {
                num: '02',
                title: 'Reward the Attempt',
                body: 'Recognise team members who try new AI workflows, regardless of the outcome. The behaviour you celebrate is the behaviour you get more of.',
              },
              {
                num: '03',
                title: 'Create Structured Space',
                body: 'Experimentation thrives with boundaries. Dedicated time, a shared framework, and a clear brief make trying feel less like a risk and more like a task.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'Structure is the antidote to fear. When your team has a clear framework for how AI works, what it is meant to do, and how to apply it to their specific role, experimentation stops feeling like a leap into the unknown. It feels like a guided process with a predictable outcome.',
          },
          {
            type: 'pullQuote',
            text: '"This is how AI adoption actually happens. Not with a memo. Not with a subscription. With a team that has been given the foundation to move forward without fear."',
          },
        ],
      },
    ],

    cta: {
      heading: 'AI Team Training built to tackle culture, fear, and fluency together,',
      sub: 'Sessions designed around your team and your business.',
      button: 'Book an AI Training Session',
    },
  },
  // ── Add future blog posts below ──────────────────────────────────────────
];

/** Lookup helper */
export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug) ?? null;
}
