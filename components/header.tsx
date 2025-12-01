import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="text-xl lg:text-2xl font-bold tracking-tight">ATELIER MODE</Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm tracking-wider hover:text-muted-foreground transition-colors">
              브랜드 소개
            </a>
            <a href="#collections" className="text-sm tracking-wider hover:text-muted-foreground transition-colors">
              컬렉션
            </a>
            <a href="#values" className="text-sm tracking-wider hover:text-muted-foreground transition-colors">
              가치
            </a>
            <a href="#contact" className="text-sm tracking-wider hover:text-muted-foreground transition-colors">
              문의
            </a>
            <Link href="/careers">
              <Button variant="outline" size="sm" className="text-sm tracking-wider">
                채용정보
              </Button>
            </Link>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
