import Link from "next/link"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
          Cocina Mediterránea
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
          Olivar
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Una experiencia gastronómica donde la tradición se encuentra con la innovación. 
          Ingredientes frescos, sabores auténticos y momentos inolvidables.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#reservar"
            className="px-8 py-3.5 bg-primary-foreground text-foreground text-sm font-medium uppercase tracking-wider hover:bg-primary-foreground/90 transition-colors"
          >
            Reservar Mesa
          </Link>
          <Link
            href="#carta"
            className="px-8 py-3.5 border border-primary-foreground text-primary-foreground text-sm font-medium uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
          >
            Ver Carta
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
