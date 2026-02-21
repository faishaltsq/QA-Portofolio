import { Card } from '@/components/ui/card'

interface SkillCardProps {
  category: string
  skills: string[]
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <Card className="p-6 border-border bg-card text-card-foreground hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-lg border border-border hover:border-foreground/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  )
}
