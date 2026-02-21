import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Muhammad Faishal',
  description: 'Learn more about Muhammad Faishal, a Junior QA Engineer passionate about quality assurance and automation testing.',
}

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              About Me
            </h1>
            <p className="text-lg text-foreground/60">
              A dedicated quality assurance engineer committed to excellence and continuous learning.
            </p>
          </div>

          {/* Story */}
          <div className="fade-in-delay-1 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                My Journey
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                I started my career as a Junior QA Engineer with a passion for ensuring software quality. My journey in QA has been driven by a desire to catch bugs before users do and to build reliable, robust applications. I believe that quality assurance is not just about finding defects—it's about understanding user behavior and safeguarding the software development process.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Why QA?
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                I chose quality assurance because I'm fascinated by the challenges of ensuring software works seamlessly. There's something satisfying about crafting automated tests, discovering edge cases, and knowing that my work directly impacts user experience. I'm particularly interested in test automation as it combines technical skills with strategic thinking.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="fade-in-delay-2 border-t border-border pt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Education & Growth
            </h2>
            <div className="space-y-6">
              <div className="bg-secondary border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Continuous Learning
                </h3>
                <p className="text-sm text-foreground/70">
                  Currently expanding my knowledge in automation testing frameworks, API testing, and CI/CD pipelines. I'm committed to staying updated with industry best practices and emerging technologies.
                </p>
              </div>

              <div className="bg-secondary border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Technical Skills
                </h3>
                <p className="text-sm text-foreground/70">
                  Proficient in test automation using Playwright and Cypress, API testing with Postman, and version control with Git. I'm building expertise in setting up CI/CD pipelines to automate test execution.
                </p>
              </div>

              <div className="bg-secondary border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Soft Skills
                </h3>
                <p className="text-sm text-foreground/70">
                  Strong communicator who works well with developers, product managers, and stakeholders. I excel at documentation, problem-solving, and collaborating to ensure quality across the entire development lifecycle.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="fade-in-delay-3 border-t border-border pt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              My Values
            </h2>
            <ul className="space-y-3">
              {[
                { label: 'Attention to Detail', desc: 'I believe the smallest details matter when it comes to software quality.' },
                { label: 'Continuous Improvement', desc: 'Always seeking ways to improve testing strategies and processes.' },
                { label: 'Collaboration', desc: 'Quality is a team effort—I work closely with developers and stakeholders.' },
                { label: 'Reliability', desc: 'Users depend on software working flawlessly. That responsibility drives me.' },
              ].map((value, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-primary font-semibold min-w-fit">{value.label}:</span>
                  <span className="text-foreground/70">{value.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
