import { Metadata } from 'next'
import ProjectCard from '@/components/project-card'

export const metadata: Metadata = {
  title: 'Projects | Muhammad Faishal',
  description: 'Explore my QA and automation testing projects showcasing my expertise in test frameworks and quality assurance.',
}

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform Test Automation',
      description: 'Built comprehensive automated test suite for an e-commerce platform using Playwright, covering critical user journeys including product browsing, cart management, and checkout flows.',
      tools: ['Playwright', 'JavaScript', 'Page Object Model', 'CI/CD'],
      learned: [
        'Implemented robust page object model architecture for maintainable tests',
        'Set up automated testing in CI/CD pipeline using GitHub Actions',
        'Achieved 80% code coverage for critical features',
        'Reduced manual testing time by 60%',
      ],
    },
    {
      title: 'REST API Testing Framework',
      description: 'Developed a comprehensive REST API testing framework using Jest and Postman, including end-to-end test scenarios for authentication, data validation, and error handling.',
      tools: ['Jest', 'Postman', 'Node.js', 'REST APIs'],
      learned: [
        'Created reusable test utilities for common API testing scenarios',
        'Implemented data-driven testing approach for better coverage',
        'Built integration tests combining UI and API layers',
        'Documented API behavior and edge cases systematically',
      ],
    },
    {
      title: 'WebSocket Real-Time Testing',
      description: 'Explored testing of real-time WebSocket connections in a chat application, implementing automated tests for message delivery, connection stability, and edge cases.',
      tools: ['Cypress', 'WebSockets', 'TypeScript', 'Testing Best Practices'],
      learned: [
        'Understood complexities of testing real-time systems',
        'Implemented custom wait strategies for async operations',
        'Designed tests for network failure scenarios',
        'Documented lessons learned for future real-time testing projects',
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              My Projects
            </h1>
            <p className="text-lg text-foreground/60">
              Here are some of my recent QA and automation testing projects showcasing my skills and learning journey.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={idx === 0 ? 'animate-fade-in' : idx === 1 ? 'fade-in-delay-1' : 'fade-in-delay-2'}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tools={project.tools}
                  learned={project.learned}
                />
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="fade-in-delay-3 border-t border-border pt-12">
            <div className="bg-secondary border border-border rounded-xl p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                What I'm Working On
              </h2>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Expanding my knowledge in performance testing and load testing tools</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Exploring test infrastructure and containerization with Docker</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Building expertise in security testing and accessibility testing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Contributing to open-source testing frameworks and tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
