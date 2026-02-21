import Link from 'next/link'
import { Button } from '@/components/ui/button'
import SkillCard from '@/components/skill-card'

export default function Home() {
  const coreSkills = [
    {
      category: 'Testing Frameworks',
      skills: ['Playwright', 'Jest', 'Cypress'],
    },
    {
      category: 'Automation',
      skills: ['Test Automation', 'CI/CD', 'API Testing'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'Jira', 'Postman'],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Hi, I'm Faishal Tsaqief
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Junior QA Engineer specializing in automation testing and quality assurance. I'm passionate about building robust test frameworks and ensuring software reliability.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/projects">
                View My Projects
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="max-w-4xl mx-auto px-6 py-20 fade-in-delay-1">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Core Skills
            </h2>
            <p className="text-foreground/60">
              A quick overview of my key competencies in QA and automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreSkills.map((skillGroup) => (
              <SkillCard
                key={skillGroup.category}
                category={skillGroup.category}
                skills={skillGroup.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 fade-in-delay-2">
        <div className="bg-secondary border border-border rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to work together?
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Whether you have a question about testing, automation, or just want to connect, feel free to reach out.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
