'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-semibold text-foreground hover:opacity-80 transition-opacity"
        >
          Muhammad Faishal Tsaqief
        </Link>
        
        <div className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive(link.href)
                  ? 'text-primary font-medium'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
