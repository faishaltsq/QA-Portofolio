import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-sm text-foreground/70">
              Faishal Tsaqief
            </p>
            <p className="text-xs text-foreground/50 mt-2">
              Junior QA Engineer
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <Link
              href="https://www.linkedin.com/in/muhammad-faishal-tsaqief-7775b3248/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com/faishaltsq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="mailto:faishaltsq@gmail.com"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-foreground/40 text-center">
            © 2025 Faishal Tsaqief. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
