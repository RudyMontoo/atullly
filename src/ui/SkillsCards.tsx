import { motion } from 'framer-motion'
import { EASE_OUT_EXPO } from './motion'

interface Skill {
  name: string
  icon: string
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

/**
 * The visible skills grid.
 *
 * This list is the source of truth for what the page shows — content/skills.ts
 * feeds the unrendered `Skills()` layout in Sections.tsx instead.
 *
 * Marks are simple-icons, fetched rather than hand-drawn, and recoloured to one
 * light neutral in `public/icons/si-*.svg`. Uniform monochrome is the point: a
 * row of full-colour brand logos pulls harder than the skill names next to
 * them and turns a reference list into a sticker sheet.
 */
const skillCategories: SkillCategory[] = [
  {
    name: 'AI & Agentic',
    skills: [
      { name: 'LangChain', icon: '/icons/si-langchain.svg' },
      // LangGraph has no simple-icons mark of its own.
      { name: 'LangGraph', icon: '◆' },
      { name: 'PyTorch', icon: '/icons/si-pytorch.svg' },
      { name: 'TensorFlow', icon: '/icons/si-tensorflow.svg' },
      { name: 'scikit-learn', icon: '/icons/si-scikitlearn.svg' },
      { name: 'Claude Code', icon: '/icons/si-claude.svg' },
    ],
  },
  {
    name: 'Languages',
    skills: [
      { name: 'Python', icon: '/icons/si-python.svg' },
      { name: 'Java', icon: '/icons/si-openjdk.svg' },
      { name: 'C', icon: '/icons/si-c.svg' },
      { name: 'SQL', icon: '/icons/si-postgresql.svg' },
    ],
  },
  {
    name: 'Backend & Data',
    skills: [
      { name: 'FastAPI', icon: '/icons/si-fastapi.svg' },
      { name: 'Spring Boot', icon: '/icons/si-springboot.svg' },
      { name: 'MongoDB', icon: '/icons/si-mongodb.svg' },
      { name: 'React', icon: '/icons/si-react.svg' },
      { name: 'REST APIs', icon: '◇' },
    ],
  },
  {
    name: 'Cloud & Tools',
    skills: [
      { name: 'Google Cloud', icon: '/icons/si-googlecloud.svg' },
      { name: 'AWS', icon: '/icons/si-amazonwebservices.svg' },
      { name: 'Docker', icon: '/icons/si-docker.svg' },
      { name: 'Linux', icon: '/icons/si-linux.svg' },
      { name: 'Git', icon: '/icons/si-git.svg' },
      { name: 'CI/CD', icon: '/icons/si-githubactions.svg' },
    ],
  },
]

export function SkillsCards() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-ink relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="tech-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="5" y="5" width="10" height="10" fill="currentColor" opacity="0.3" />
              <rect x="20" y="15" width="8" height="8" fill="currentColor" opacity="0.2" />
              <rect x="35" y="25" width="12" height="12" fill="currentColor" opacity="0.15" />
              <line x1="0" y1="0" x2="40" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#tech-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* Heading */}
        <motion.div
          className="mb-20 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          <h2 className="t-display text-fg mb-4">
            What I <span className="text-accent">reach for.</span>
          </h2>
          <p className="t-lead text-muted max-w-2xl">
            Organized by domain. Each skill is battle-tested across production systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
                ease: EASE_OUT_EXPO,
              }}
            >
              {/* Category Title */}
              <div>
                <h3 className="t-display text-accent text-lg md:text-xl font-bold">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.03,
                      ease: EASE_OUT_EXPO,
                    }}
                  >
                    {/* Icon */}
                    <div className="w-7 h-7 flex-shrink-0">
                      {skill.icon.startsWith('/icons/') ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-xl">{skill.icon}</span>
                      )}
                    </div>
                    {/* Skill name */}
                    <p className="text-base font-medium text-fg">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
