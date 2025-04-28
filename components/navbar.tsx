"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { AnimatedCounter } from "@/components/animated-counter"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false)
    setActiveLink(pathname)

    // Update indicator position
    updateIndicator()
  }, [pathname])

  const updateIndicator = () => {
    const activeIndex = navLinks.findIndex((link) => link.path === pathname)
    if (activeIndex >= 0 && linkRefs.current[activeIndex]) {
      const link = linkRefs.current[activeIndex]
      if (!link || !navRef.current) return

      const linkRect = link.getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()

      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      })
    }
  }

  // Update indicator on window resize
  useEffect(() => {
    window.addEventListener("resize", updateIndicator)
    return () => window.removeEventListener("resize", updateIndicator)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-navy/90 backdrop-blur-md shadow-md" : "bg-navy",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-mono text-highlight text-xl">
            <AnimatedCounter end={100} suffix="%" duration={1500} />
          </Link>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden md:flex items-center space-x-8 relative">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                ref={(el) => (linkRefs.current[index] = el)}
                className={cn(
                  "text-sm font-mono py-2 transition-colors relative",
                  pathname === link.path ? "text-highlight" : "text-slate hover:text-highlight",
                )}
              >
                <span className="text-highlight mr-1">0{index + 1}.</span>
                {link.name}
              </Link>
            ))}
            <div
              className="nav-indicator"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            />
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="text-slate hover:text-highlight hover:bg-navy-light"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate hover:text-highlight hover:bg-navy-light"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-light border-t border-navy-lighter">
          <nav className="flex flex-col py-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "px-4 py-3 text-sm font-mono transition-colors flex items-center",
                  pathname === link.path
                    ? "text-highlight bg-navy-lighter"
                    : "text-slate hover:text-highlight hover:bg-navy-lighter",
                )}
              >
                <span className="text-highlight mr-2">0{index + 1}.</span>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
