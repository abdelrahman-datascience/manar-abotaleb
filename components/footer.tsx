import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
]

export function Footer() {
  return (
    <footer>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Manar Abotaleb</h3>
            <p className="text-muted-foreground">
              Transforming data into actionable insights. Passionate about data analysis, visualization, and driving informed decision-making.
            </p>
          </div>
          <div className="md:border-l md:border-r border-border px-4">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href="mailto:manar.abotaleb@example.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                <span>manar.abotaleb@example.com</span>
              </a>
              <a
                href="https://github.com/manarabotaleb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/manar-abotaleb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Manar Abotaleb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

