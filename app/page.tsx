import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { History } from "@/components/history"
import { Menu } from "@/components/menu"
import { Gallery } from "@/components/gallery"
import { Reservation } from "@/components/reservation"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <Navbar />
      <Hero />
      <Features />
      <History />
      <Menu />
      <Gallery />
      <Reservation />
      <Contact />
    </main>
  )
}
