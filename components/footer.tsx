import Link from "next/link"
import { Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-navy-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-mono text-highlight mb-4">Viraj Bontha</h3>
            <p className="text-slate mb-4">
              Electrical and Electronics Engineering student at BITS Pilani Goa Campus with a passion for digital design
              and VLSI.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/viraj-bontha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate hover:text-highlight transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:bonthaviraj@gmail.com"
                aria-label="Email"
                className="text-slate hover:text-highlight transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-mono text-highlight mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate hover:text-highlight transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-slate hover:text-highlight transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-slate hover:text-highlight transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate hover:text-highlight transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-slate hover:text-highlight transition-colors">
                  Skills
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-mono text-highlight mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate">
                <Mail className="h-4 w-4 text-highlight" />
                <span>bonthaviraj@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate">
                <Phone className="h-4 w-4 text-highlight" />
                <span>+91 6281122607</span>
              </li>
              <li className="flex items-center gap-2 text-slate">
                <Linkedin className="h-4 w-4 text-highlight" />
                <Link href="https://linkedin.com/in/viraj-bontha" className="hover:text-highlight transition-colors">
                  linkedin.com/in/viraj-bontha
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light mt-8 pt-8 text-center text-slate text-sm">
          <p>Designed & Built by Viraj Bontha</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
