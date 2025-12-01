import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif leading-[1.1] text-balance">
            {"시대를 초월한 "}
            <br className="hidden sm:block" />
            {"우아함과 혁신"}
          </h1>

          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-mono">
            {"ATELIER MODE는 장인 정신과 현대적 감각을 결합하여 "}
            <br className="hidden sm:block" />
            {"당신만의 스타일을 완성합니다"}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group px-8 h-12 text-base tracking-wide">
              {"브랜드 스토리"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 h-12 text-base tracking-wide bg-transparent">
              {"컬렉션 보기"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
