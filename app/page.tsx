import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Values } from "@/components/values"
import { Collections } from "@/components/collections"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Values />
      <Collections />
      <Footer />
    </main>
  )
}
