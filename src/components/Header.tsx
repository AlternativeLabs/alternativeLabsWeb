import Link from "next/link"

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link
          href="/"
          className="flex items-center space-x-2"
        >
          <span className="font-bold text-xl tracking-tight">
            AlternativeLabs
          </span>
        </Link>
      </div>
    </header>
  )
} 