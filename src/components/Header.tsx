import Link from "next/link"
import { LanguageSelector } from "./LanguageSelector"
import { ModeToggle } from "./modeToggle"
import { cn } from "@/lib/utils"

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className=" flex h-16 items-center justify-between px-4">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="flex items-center space-x-2"
        >
          <span className="font-bold text-xl tracking-tight hover:text-primary transition-colors">
            AlternativeLabs
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 gap-x-8">
          <Link 
            href="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link 
            href="#services" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Who We Are
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
} 