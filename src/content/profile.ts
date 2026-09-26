/**
 * ─────────────────────────────────────────────────────────────────────
 *  Identity. Everything the page says about who he is comes from here.
 * ─────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Rudra Sharma',
  role: 'AI Engineer',

  /** The one line that has to survive a 15-second visit. */
  tagline:
    'Building production-grade generative AI — LLMs, RAG, and multi-agent systems that run in front of real users.',

  location: 'Ghaziabad, India',
  status: 'Available for entry-level AI Engineer roles',
  /** Short form for the hero and the closing call to action. */
  availabilityShort: 'Open to AI Engineer roles',

  about:
    'I am a Computer Science undergraduate and AWS-certified AI engineer who builds ' +
    'production-grade generative AI systems — LLMs, retrieval pipelines, and multi-agent ' +
    'orchestration — in Python, FastAPI, LangChain and LangGraph. I work fluently with ' +
    'agentic developer tooling (Claude Code, MCP servers, custom skills) to ship and audit ' +
    'AI systems end to end, and I deploy them on GCP, AWS and Azure.',

  greeting: "Hello, I'm",

  /** Role line under the portrait, pipe-separated in the reference's manner. */
  roleLine: 'AI Engineer | LLMs & Multi-Agent Systems | CS Undergrad',

  /**
   * The about story, in short paragraphs.
   *
   * One long block is a wall nobody reads; three short ones each carrying a
   * single idea get read to the end. Written as a progression — where he
   * started, what changed, where he is going — because that is what makes a
   * junior candidate legible.
   */
  aboutParagraphs: [
    'I started out writing ordinary backend code, and then large language models stopped being a demo and started being something you could actually build a product on. That is the line I have been working on ever since: not a chat box bolted to the side of an app, but systems where the model is load-bearing.',
    'Most of what I have shipped since is agentic. A 13-agent LangGraph assistant that reads 4,900+ government schemes in six languages and tells someone what they actually qualify for. A six-agent due-diligence pipeline on Vertex AI that turns weeks of M&A work into minutes. The hard part is almost never the prompt — it is orchestration, retrieval quality, and what happens when one agent in the graph returns nonsense.',
    'Right now I am going deeper on evaluation and reliability for agent systems, and on the tooling around them — MCP servers, custom Claude Code skills, and the kind of context engineering that decides whether an agent is useful or just expensive.',
  ] as const,

  /** Two-tone section heading for About: second line takes the accent. */
  aboutHeading: ['Building AI systems', 'that hold up in production.'] as const,

  /**
   * The hero masthead, two words. The second takes the accent colour.
   *
   * Both need to be *long*, not short. The cut-out figure stands in the middle
   * of the line, so a two-letter word like "AI" disappears behind it entirely
   * and the layering reads as a bug. Ten to eleven characters each is the band
   * that fills the width without wrapping at 14vw.
   */
  heroWords: ['GENERATIVE', 'AI SYSTEMS'] as const,

  /**
   * Transparent cut-out for the layered hero.
   *
   * Must have a real alpha channel. The masthead sits *behind* the figure, and
   * an opaque rectangle would paint over it — which is exactly why a flat
   * photograph could never be layered this way.
   *
   * Currently an illustrated avatar that shipped with transparency already. If
   * you swap back to a photograph shot against a solid backdrop, run
   * scripts/make-cutout-chroma.py over it first to cut the background out.
   */
  heroCutout: '/cutout.png',
  /**
   * Sits under the portrait card in About. Blank hides the block entirely.
   *
   * Needs a real alpha channel — it is composited normally, not blended. If
   * you have ink on a solid black background instead, convert it first: alpha
   * from the per-pixel max channel, then divide the colour back out so the
   * antialiased strokes keep their hue rather than fading to grey.
   */
  signature: '/signature.png',
  aboutPortrait: '/portrait.png',

  links: {
    email: 'rudrashr.3184@gmail.com',
    /** E.164 for the `tel:` href — dialled, not read. */
    phone: '+917355039475',
    github: 'https://github.com/RudyMontoo',
    linkedin: 'https://linkedin.com/in/rudra-sharma-78628232b',
    leetcode: 'https://leetcode.com/u/RudyMontoo/',
    x: 'https://x.com/RMontoo18708',
    instagram: 'https://www.instagram.com/kalsmynn/',
    resume: '/resume.pdf',
  },

  /** Display handles. The LinkedIn slug is shortened rather than shown raw. */
  handles: {
    /** Grouped for reading, unlike `links.phone`, which has to stay dialable. */
    phone: '+91 73550 39475',
    github: 'RudyMontoo',
    linkedin: 'rudra-sharma',
    leetcode: 'RudyMontoo',
    x: 'RMontoo18708',
    instagram: 'kalsmynn',
  },

  /**
   * The strip under the hero. The reference puts client logos and a happy-
   * client count here; neither exists, so this carries what actually does —
   * measured things, each traceable to a project or a public profile.
   */
  proof: [
    { value: '4,900+', label: 'government schemes indexed' },
    { value: 'Top 50', label: 'Gen AI Academy, across APAC' },
    { value: '500+', label: 'DSA problems solved' },
    { value: '8.57', label: 'CGPA / 10' },
  ] as const,

  /**
   * What he builds. Stands in for the reference's "Services" — reframed from
   * selling to describing, because he is not taking commissions.
   */
  capabilities: [
    {
      title: 'Multi-agent systems',
      body: 'Agent graphs that hold state and recover — LangGraph orchestration, tool calling, and routing across a dozen specialised agents rather than one prompt doing everything.',
      tags: ['LangGraph', 'LangChain', 'Tool calling', 'MCP servers'],
    },
    {
      title: 'RAG & retrieval',
      body: 'Retrieval that returns the right passage rather than a plausible one: vector search, chunking strategy, eligibility rules engines, and evaluation on top of both.',
      tags: ['Vector search', 'MongoDB Atlas', 'ChromaDB', 'Embeddings'],
    },
    {
      title: 'Backend for AI',
      body: 'The unglamorous half — FastAPI services, async pipelines, field-level encryption and prompt-injection guards, so a model in production is something you can operate.',
      tags: ['Python', 'FastAPI', 'Async pipelines', 'REST APIs'],
    },
    {
      title: 'Cloud deployment',
      body: 'Shipping it somewhere real: Vertex AI and Cloud Run on GCP, Container Apps on Azure, containerised and deployed rather than parked in a notebook.',
      tags: ['Vertex AI', 'Cloud Run', 'Azure', 'Docker'],
    },
  ] as const,

  /**
   * Tools row beneath the capabilities heading. Keys map to TECH_MARKS in
   * ui/techMarks.tsx — logos rather than names, because recognition beats
   * reading for a list this long.
   */
  tools: [
    'python',
    'fastapi',
    'langchain',
    'pytorch',
    'googlecloud',
    'amazonwebservices',
    'docker',
    'git',
  ] as const,

  /**
   * Words that cycle in the closing headline. Verbs only, and all short — a
   * long one would reflow the line on every swap, which reads as a layout bug
   * rather than an effect.
   */
  closingVerbs: ['build', 'ship', 'scale'] as const,

  /** Shown in the hero's supporting rail. */
  focus: ['Generative AI systems', 'Multi-agent orchestration', 'Cloud & backend'] as const,
} as const

export type Profile = typeof profile
