/**
 * Skills.
 *
 * `level` is 0–1 and is never displayed. It orders each group strongest first
 * and decides which entries take the emphasised treatment (>= 0.85), so the
 * hierarchy is derived rather than hand-maintained.
 *
 * Printed percentages were removed deliberately: a self-assigned number has no
 * shared scale, nobody rates themselves low, and the values collapse into a
 * narrow band that distinguishes nothing. Keep the values honest anyway — they
 * still decide what gets highlighted.
 *
 * Note: the *visible* skills section is ui/SkillsCards.tsx, which carries its
 * own icon-per-skill list. This file feeds the alternative `Skills()` layout in
 * ui/Sections.tsx, which is not currently rendered — keep the two in step if
 * you ever switch between them.
 */
export interface Skill {
  name: string
  level: number
  /** Optional — years of use. */
  years?: number
}

export interface SkillGroup {
  id: string
  label: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'ai',
    label: 'AI & Agentic',
    skills: [
      { name: 'LangGraph', level: 0.9 },
      { name: 'LangChain', level: 0.9 },
      { name: 'RAG & vector search', level: 0.88 },
      { name: 'Multi-agent systems', level: 0.86 },
      { name: 'MCP servers', level: 0.82 },
      { name: 'PyTorch', level: 0.75 },
      { name: 'TensorFlow', level: 0.68 },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Python', level: 0.92 },
      { name: 'SQL', level: 0.8 },
      { name: 'Java', level: 0.75 },
      { name: 'C', level: 0.7 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Data',
    skills: [
      { name: 'FastAPI', level: 0.9 },
      { name: 'REST APIs', level: 0.85 },
      { name: 'MongoDB Atlas', level: 0.8 },
      { name: 'PostgreSQL', level: 0.75 },
      { name: 'Spring Boot', level: 0.66 },
      { name: 'React', level: 0.66 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Tools',
    skills: [
      { name: 'GCP — Vertex AI, Cloud Run', level: 0.88 },
      { name: 'AWS', level: 0.85 },
      { name: 'Docker', level: 0.82 },
      { name: 'Git & CI/CD', level: 0.8 },
      { name: 'Azure Container Apps', level: 0.7 },
    ],
  },
]
