import { Card } from '@/components/ui/card'

interface ProjectCardProps {
  title: string
  description: string
  tools: string[]
  learned: string[]
}

export default function ProjectCard({
  title,
  description,
  tools,
  learned,
}: ProjectCardProps) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow border-border bg-card text-card-foreground">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm text-foreground/70">
            {description}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-foreground/60 mb-2">
            Tools & Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-foreground/60 mb-2">
            Key Learnings
          </p>
          <ul className="text-sm text-foreground/70 space-y-1">
            {learned.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
