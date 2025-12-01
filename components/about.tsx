import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary text-primary-foreground text-xs tracking-widest font-mono">
              BRAND STORY
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif leading-tight text-balance">
              {"예술과 패션의 "}
              <br />
              {"아름다운 조화"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-mono">
              <p>
                {"2010년 서울에서 시작된 ATELIER MODE는 한국의 전통적인 미학과 "}
                {"현대 패션의 완벽한 균형을 추구합니다."}
              </p>
              <p>
                {"우리의 모든 제품은 최고급 소재와 장인의 손길로 탄생하며, "}
                {"착용하는 이의 개성과 품격을 한층 더 높여줍니다."}
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] bg-muted rounded-sm overflow-hidden">
            <Image src="/fashion-atelier-studio-with-elegant-clothing.jpg" alt="Atelier workspace" className="object-cover" fill />
          </div>
        </div>
      </div>
    </section>
  )
}
