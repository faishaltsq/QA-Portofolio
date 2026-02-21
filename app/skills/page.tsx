import { Metadata } from 'next'
import SkillCard from '@/components/skill-card'

export const metadata: Metadata = {
  title: 'Skills | Muhammad Faishal',
  description: 'Discover my QA and automation testing skills, tools, and technical expertise.',
}

export default function Skills() {
  const skillCategories = [
    {
      category: 'Testing Frameworks',
      skills: ['Playwright', 'Cypress', 'Jest', 'React Testing Library'],
    },
    {
      category: 'Test Types',
      skills: ['Unit Testing', 'Integration Testing', 'End-to-End Testing', 'API Testing'],
    },
    {
      category: 'Automation Tools',
      skills: ['Test Automation', 'CI/CD Pipelines', 'Postman', 'Jira'],
    },
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'SQL', 'Node.js'],
    },
    {
      category: 'Version Control & DevOps',
      skills: ['Git', 'GitHub', 'GitHub Actions', 'Docker Basics'],
    },
    {
      category: 'QA Best Practices',
      skills: ['Page Object Model', 'Test Documentation', 'Bug Reporting', 'Agile Methodology'],
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              My Skills
            </h1>
            <p className="text-lg text-foreground/60">
              A comprehensive overview of my technical skills and expertise in QA and automation testing.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={category.category}
                className={
                  idx === 0 ? 'animate-fade-in' :
                  idx === 1 ? 'fade-in-delay-1' :
                  idx === 2 ? 'fade-in-delay-2' :
                  idx === 3 ? 'fade-in-delay-3' :
                  'animate-fade-in'
                }
              >
                <SkillCard
                  category={category.category}
                  skills={category.skills}
                />
              </div>
            ))}
          </div>

          {/* Proficiency Levels */}
          <div className="fade-in-delay-3 border-t border-border pt-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Proficiency Levels
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      level: 'Expert',
                      description: 'Deep knowledge and practical experience',
                      examples: 'Playwright, Test Automation, JavaScript',
                    },
                    {
                      level: 'Intermediate',
                      description: 'Solid understanding with hands-on experience',
                      examples: 'Cypress, Jest, API Testing, Git',
                    },
                    {
                      level: 'Beginner',
                      description: 'Learning and building foundational knowledge',
                      examples: 'Docker, Performance Testing, Kubernetes basics',
                    },
                  ].map((item) => (
                    <div key={item.level} className="bg-secondary border border-border rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-2">
                        {item.level}
                      </h3>
                      <p className="text-sm text-foreground/70 mb-2">
                        {item.description}
                      </p>
                      <p className="text-sm text-foreground/50">
                        {item.examples}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Goals */}
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  My Learning Goals
                </h2>
                <div className="space-y-3">
                  {[
                    'Master advanced Playwright features and test architecture patterns',
                    'Develop expertise in performance and load testing tools',
                    'Learn accessibility testing and how to ensure inclusive UX',
                    'Build skills in security testing and vulnerability assessment',
                    'Contribute to open-source QA and testing frameworks',
                    'Explore AI-powered testing tools and intelligent test generation',
                  ].map((goal, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-primary font-semibold flex-shrink-0">✓</span>
                      <span className="text-foreground/70">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
