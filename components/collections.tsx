import Image from "next/image"

export function Collections() {
  const collections = [
    {
      title: "2025 봄/여름",
      subtitle: "Spring/Summer Collection",
      image: "/spring-summer-fashion-collection-minimal.jpg",
    },
    {
      title: "2024 가을/겨울",
      subtitle: "Fall/Winter Collection",
      image: "/fall-winter-fashion-collection-elegant.jpg",
    },
    {
      title: "시그니처 라인",
      subtitle: "Signature Line",
      image: "/signature-timeless-fashion-pieces.jpg",
    },
  ]

  return (
    <section id="collections" className="py-16 lg:py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif mb-4 text-balance">{"컬렉션"}</h2>
          <p className="text-muted-foreground font-mono">{"시즌별 엄선된 디자인을 만나보세요"}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-serif">{collection.title}</h3>
                <p className="text-sm text-muted-foreground font-mono tracking-wide">{collection.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
