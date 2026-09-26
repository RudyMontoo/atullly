/**
 * Selected work.
 *
 * `metric` is the highest-value field here — the thing a recruiter remembers
 * after they have forgotten the layout — so it should be a number with a unit,
 * not a category like "Serverless" that occupies the same space while saying
 * nothing measurable.
 *
 * It renders as an accent pill on the card image, so keep `label` to two or
 * three words: it sits on one line, and a sentence there overruns the card and
 * collides with the nav.
 *
 * Three or four entries suits the two-column grid. There is no longer a hard
 * ceiling: the 3D choreography that once required exactly three was removed
 * along with the WebGL layer.
 */

export interface Project {
  id: string
  /** Shown as the project heading. Keep it short. */
  title: string
  /** One line. Shown under the title. */
  pitch: string
  /** Two to three sentences: what it does, how it is built, what was hard. */
  description: string
  /** The headline number. Rendered large, in the accent. */
  metric: { value: string; label: string }
  /** Secondary numbers. Zero to three of them. */
  stats?: { value: string; label: string }[]
  /** Rendered as mono chips. Six maximum before it turns to noise. */
  stack: string[]
  links: { live?: string; repo?: string; caseStudy?: string }
  /**
   * Screenshot of the live deployment, shown at the top of the card. Omit it
   * and the card renders a "No preview" plate rather than a broken image.
   * Regenerate them all with `node scripts/shoot-projects.mjs`.
   */
  image?: string

  /**
   * Case study, shown in the slide-up detail view.
   *
   * Optional throughout: a project without one still renders its card and
   * links out, it just does not open. That is better than a detail view of
   * headings with nothing under them.
   */
  study?: {
    /** Long-form title for the detail header. */
    headline: string
    client: string
    /** What the project had to achieve. */
    objective: string
    /** The specific technical target. */
    goal: string
    /** Who it is for. */
    audience: string
    /** How it was approached — two or three paragraphs. */
    direction: string[]
    /** What was actually delivered. */
    scope: string[]
    /** Extra images. The card image is used as the lead. */
    gallery?: string[]
  }
  period?: string
}

export const projects: Project[] = [
  {
    id: 'yojna-setu',
    title: 'Yojna Setu',
    pitch: 'Tells you which government schemes you actually qualify for.',
    description:
      'A multilingual conversational assistant over 4,900+ Indian government schemes, in six languages. A 13-agent LangGraph architecture handles the conversation and a criteria-by-criteria rules engine decides eligibility, so an answer is traceable to the rule that produced it rather than generated and hoped for. Document upload runs through local-vision OCR, and the whole thing takes voice as well as text.',
    metric: { value: '4,900+', label: 'schemes indexed' },
    stats: [
      { value: '13', label: 'agent LangGraph architecture' },
      { value: '6', label: 'Indian languages supported' },
    ],
    stack: ['FastAPI', 'LangGraph', 'Spring Boot', 'MongoDB Atlas', 'React', 'Azure'],
    links: { live: 'https://yojsarthi.in/', repo: 'https://github.com/RudyMontoo/YojnaSetu_v5' },
    image: '/work/yojna-setu.jpg',
    period: 'Feb 2026 — Present',
    study: {
      headline: 'Eligibility you can trace, in the language you speak',
      client: 'Yojna Setu · Smart India Hackathon 2026 finalist',
      objective:
        'India runs thousands of welfare schemes, and the reason people miss the ones they qualify for is almost never that the information is secret — it is that it is scattered, in the wrong language, and written in criteria nobody wants to read.',
      goal:
        'Answer "what am I entitled to?" from a plain-language conversation, in six languages, against 4,900+ schemes — and be able to show exactly which criterion each answer turned on.',
      audience:
        'Citizens applying for welfare schemes, including people who would rather speak than type and who are not reading English.',
      direction: [
        'A single large prompt cannot do this reliably. The work is split across a 13-agent LangGraph architecture, so language handling, document understanding, eligibility checking and response drafting are separate agents with their own contracts rather than one model asked to juggle all four.',
        'Eligibility specifically is not left to the model. A criteria-by-criteria rules engine evaluates each scheme condition explicitly, which is what makes a result auditable — the system can point at the rule that passed or failed instead of producing a confident paragraph.',
        'Because it handles identity documents, the data path was designed around that from the start: AES-256 field encryption, prompt-injection guards on every model boundary, and a retention posture built for DPDP Act 2023 compliance.',
      ],
      scope: [
        '13-agent LangGraph orchestration over 4,900+ schemes',
        'Criteria-by-criteria eligibility rules engine',
        'Jan-Sahayak Lens — local-vision OCR document ingestion',
        'Real-time voice pipeline: Pipecat with Sarvam AI Saaras v3 STT and Bulbul v3 TTS',
        'MongoDB Atlas Vector Search for scheme retrieval',
        'AES-256 field encryption and prompt-injection guards, DPDP Act 2023 aligned',
        'Dockerised deployment on Azure Container Apps',
      ],
    },
  },

  {
    id: 'veda',
    title: 'VEDA',
    pitch: 'M&A due diligence in minutes instead of weeks.',
    description:
      'A multi-agent venture evaluation system on Google Cloud that compresses M&A due-diligence processing from six to twelve weeks down to under five minutes. Six agents run asynchronously across ten GCP services — code audits, regulatory checks, and a Deal Intelligence Layer that scores an investment 0–100 using Vertex embeddings and the Natural Language API.',
    metric: { value: '<5 min', label: 'per diligence run' },
    stats: [
      { value: '6', label: 'asynchronous agents in the pipeline' },
      { value: '10', label: 'GCP services orchestrated' },
    ],
    stack: ['Vertex AI', 'Gemini 2.5 Flash', 'FastAPI', 'MCP', 'BigQuery', 'Cloud Run'],
    links: {
      live: 'https://veda-api-790567978781.us-central1.run.app',
      repo: 'https://github.com/RudyMontoo/VEDA',
    },
    image: '/work/veda.jpg',
    period: 'Mar — Apr 2026',
    study: {
      headline: 'Six agents, ten GCP services, one investment score',
      client: 'VEDA · Google Cloud Gen AI Academy APAC — top 50',
      objective:
        'Due diligence on a venture is weeks of specialists reading documents, auditing code and checking regulatory exposure. Most of that work is legible to a machine; almost none of it had been handed to one.',
      goal:
        'Take a target company and return a structured evaluation — including a 0–100 investment score — fast enough to be used inside a live deal conversation rather than after it.',
      audience:
        'Investors and corporate development teams running technical and regulatory diligence on acquisition or funding targets.',
      direction: [
        'The pipeline is asynchronous by design. Six agents — code audit, regulatory check, and the rest — run independently rather than in a chain, because a sequential pipeline would inherit the latency of its slowest stage and there is no dependency between most of these checks.',
        'Scoring sits in a separate Deal Intelligence Layer built on Vertex embeddings and the Natural Language API, so the number is derived from the collected evidence rather than asked for directly. Gemini 2.5 Flash handles the reasoning steps where latency matters more than depth.',
        'Agents reach their tools over MCP, which keeps the tool surface declarative and made it possible to add capabilities without rewriting orchestration. BigQuery holds the structured output so a result is queryable afterwards, not just readable once.',
      ],
      scope: [
        'Six-agent asynchronous evaluation pipeline on Cloud Run',
        'Automated code audits and regulatory compliance checks',
        'Deal Intelligence Layer — Vertex embeddings plus the Natural Language API',
        '0–100 investment score derived from collected evidence',
        'MCP tool interface across the agent set',
        'Ten GCP services orchestrated end to end, BigQuery for structured results',
      ],
    },
  },

  {
    id: 'signease',
    title: 'SignEase',
    pitch: 'Real-time ASL translation on a video call.',
    description:
      'A Chrome extension that translates American Sign Language to speech and back during video calls, at 98.66% letter and 80.94% word accuracy. Hand tracking runs on-device through MediaPipe so the video never leaves the machine, with a PyTorch recognition model behind it and multi-tier TTS/STT that falls back to local synthesis when the network does not cooperate.',
    metric: { value: '98.66%', label: 'letter accuracy' },
    stats: [
      { value: '80.94%', label: 'word-level accuracy' },
      { value: '100%', label: 'hand tracking on-device' },
    ],
    stack: ['PyTorch', 'MediaPipe', 'FastAPI', 'Chrome Extension'],
    links: { repo: 'https://github.com/FaiquaNaeem/SignEase' },
    image: '/work/signease.jpg',
    period: 'Nov 2025',
    study: {
      headline: 'Bidirectional ASL on a video call, without sending the video anywhere',
      client: 'SignEase · team project',
      objective:
        'Video calling assumes everyone on it speaks. ASL users get a captioning experience built for speech, in one direction, and nothing at all going the other way.',
      goal:
        'Translate ASL to speech and speech to ASL live inside an existing video call, accurately enough to be usable rather than demonstrable, and without shipping someone\'s camera feed to a server.',
      audience:
        'ASL users and the hearing people they are on calls with — the point is that neither side installs a different product.',
      direction: [
        'Hand tracking runs on-device through MediaPipe. That was a privacy decision first, but it is also what makes the latency budget work: only landmark coordinates go to the recognition model, not frames.',
        'The most instructive part was a bug, not a feature. Word accuracy had collapsed to 5.83% and the model looked like the problem; the actual cause was handedness mislabeling in the data pipeline, which meant the model was being trained and evaluated on inconsistently mirrored inputs. Fixing the labelling took word accuracy to 80.94%.',
        'Speech synthesis is multi-tier — Sarvam and Piper with automatic local fallback — because a translation layer that stops working when an API is slow is worse than one that degrades quietly to a local voice.',
      ],
      scope: [
        'Chrome extension overlaying live video calls',
        'PyTorch ASL recognition at 98.66% letter and 80.94% word accuracy',
        'On-device MediaPipe hand tracking, landmarks only',
        'Bidirectional ASL ↔ speech translation',
        'Multi-tier Sarvam/Piper TTS-STT with automatic local fallback',
      ],
    },
  },
]
