/**
 * Experience, education and achievements.
 *
 * `achievements` renders in the "Things worth mentioning" section and self-hides
 * when empty.
 *
 * `experience` is **not currently rendered anywhere on the page** — the Work
 * Experience section was removed, matching the resume, which leads with projects
 * instead. The data is kept because it is true and the section is one line to
 * restore: re-add a timeline component and render it from FlatPortfolio.
 */

export interface Role {
  org: string
  title: string
  period: string
  /** One or two lines. Outcome first, responsibility second. */
  summary: string
  stack?: string[]
}

export const experience: Role[] = [
  {
    org: 'ServiceNow University × SmartBridge',
    title: 'ServiceNow Virtual Intern',
    period: 'Jun 2026 — Jul 2026',
    summary:
      'Built Service Catalog and Incident Management workflows on the ServiceNow AI Platform, ' +
      'covering platform administration, Flow Designer, the Automated Test Framework and ' +
      'agentic AI fundamentals, alongside 15+ hours of CSA exam-prep coursework.',
    stack: ['ServiceNow', 'Flow Designer', 'ATF', 'Agentic AI'],
  },
]

export interface Education {
  institution: string
  qualification: string
  period: string
  detail?: string
}

export const education: Education[] = [
  {
    institution: 'Krishna Institute of Engineering & Technology, Delhi-NCR',
    qualification: 'B.Tech, Computer Science & Engineering',
    period: '2024 — 2028',
    detail: 'CGPA 8.57 / 10',
  },
  {
    institution: 'Elpis Global School, Biswan',
    qualification: 'Senior Secondary (CBSE)',
    period: '2022 — 2023',
    detail: '86%',
  },
]

export interface Achievement {
  label: string
  /** Optional supporting detail — the number, where it applies. */
  detail?: string
}

/**
 * Ordered by what an engineering recruiter weighs, not chronologically.
 */
export const achievements: Achievement[] = [
  {
    label: 'Smart India Hackathon 2026 — Finalist',
    detail: 'Yojna Sarthi, a 13-agent multilingual scheme assistant',
  },
  {
    label: 'Google Cloud Gen AI Academy APAC 2026 — Top 50 across Asia',
    detail: 'VEDA, a 6-agent M&A system across 10 GCP services',
  },
  { label: 'AWS Certified Machine Learning Engineer — Associate', detail: '2026' },
  { label: 'AWS Certified AI Practitioner', detail: '2026' },
  { label: 'AWS Certified Cloud Practitioner', detail: '2026' },
  { label: 'Gen AI Academy Elite Club', detail: '2026' },
  { label: 'Hakaccino4 Hackathon 2026', detail: 'shipped NaviX, an AI risk navigator, in 24 hours' },
  { label: 'Cisco Networking Academy', detail: '2026' },
  { label: 'LeetCode — 500+ problems solved', detail: 'top 15% globally' },
  { label: 'CGPA 8.57 / 10', detail: 'B.Tech CSE, KIET Delhi-NCR · 2024–2028' },
]
