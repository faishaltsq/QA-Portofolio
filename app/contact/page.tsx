import { Metadata } from 'next'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact | Faishal Tsaqief',
  description: 'Get in touch with me. Reach out for collaboration opportunities or to discuss QA and testing topics.',
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/60">
              I'd love to hear from you! Whether you have a question, collaboration opportunity, or just want to connect, feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-delay-1">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Send me a message
                </h2>
                <p className="text-foreground/60">
                  Fill out the form and I'll get back to you as soon as possible.
                </p>
              </div>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="fade-in-delay-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Other ways to connect
                </h2>
                <div className="space-y-4">
                  {/* Email */}
                  <Link
                    href="mailto:faishaltsq@gmail.com"
                    className="flex gap-4 p-4 bg-secondary border border-border rounded-xl hover:border-foreground/20 transition-colors"
                  >
                    <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-foreground/60">
                        faishaltsq@gmail.com
                      </p>
                    </div>
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://www.linkedin.com/in/muhammad-faishal-tsaqief-7775b3248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-4 bg-secondary border border-border rounded-xl hover:border-foreground/20 transition-colors"
                  >
                    <Linkedin className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <p className="text-sm text-foreground/60">
                        linkedin.com/in/muhammad-faishal-tsaqief-7775b3248
                      </p>
                    </div>
                  </Link>

                  {/* GitHub */}
                  <Link
                    href="https://github.com/faishaltsq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-4 bg-secondary border border-border rounded-xl hover:border-foreground/20 transition-colors"
                  >
                    <Github className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">GitHub</p>
                      <p className="text-sm text-foreground/60">
                        github.com/faishaltsq
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-secondary border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Response Time
                </h3>
                <p className="text-sm text-foreground/70">
                  I typically respond to messages within 24-48 hours. For urgent matters, feel free to reach out via LinkedIn.
                </p>
              </div>

              {/* Availability */}
              <div className="bg-secondary border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Let's discuss
                </h3>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Test automation strategies</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>QA best practices and frameworks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Collaboration opportunities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>General tech discussion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
