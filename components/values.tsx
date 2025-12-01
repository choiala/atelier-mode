export function Values() {
  const values = [
    {
      number: "01",
      title: "장인 정신",
      description: "모든 제품은 숙련된 장인의 섬세한 손길로 완성되며, 완벽함을 향한 끊임없는 열정이 담겨 있습니다.",
    },
    {
      number: "02",
      title: "지속 가능성",
      description: "환경을 생각하는 책임 있는 생산 방식과 친환경 소재 사용으로 지속 가능한 패션을 실현합니다.",
    },
    {
      number: "03",
      title: "시대를 초월한 디자인",
      description: "유행을 따르지 않고 시간이 지나도 변함없는 가치를 지닌 클래식한 디자인을 추구합니다.",
    },
  ]

  return (
    <section id="values" className="py-16 lg:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif mb-4 text-balance">{"우리의 가치"}</h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            {"ATELIER MODE를 특별하게 만드는 세 가지 핵심 가치"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value) => (
            <div key={value.number} className="space-y-4">
              <div className="text-7xl font-serif text-muted/30">{value.number}</div>
              <h3 className="text-2xl font-serif">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-mono text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
