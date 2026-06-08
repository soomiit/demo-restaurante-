export function History() {
  return (
    <section id="historia" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070"
                alt="Chef preparando plato"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-accent flex items-center justify-center">
              <div className="text-center text-accent-foreground">
                <span className="block font-serif text-3xl md:text-5xl font-bold">25</span>
                <span className="text-xs md:text-sm uppercase tracking-wider">Años</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">Nuestra Historia</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              De la huerta a tu mesa
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Desde 1999, Olivar ha sido el punto de encuentro para los amantes de la cocina 
                mediterránea en el corazón de la ciudad. Fundado por la familia Martínez, 
                nuestro restaurante nació con una visión simple pero poderosa: traer los 
                sabores auténticos del Mediterráneo a cada plato.
              </p>
              <p>
                Trabajamos directamente con agricultores y pescadores locales, asegurando 
                que cada ingrediente cuente una historia de frescura y calidad. Nuestra 
                cocina celebra las recetas tradicionales mientras abraza técnicas 
                contemporáneas.
              </p>
              <p>
                Cada plato que sale de nuestra cocina es una carta de amor al Mediterráneo, 
                preparado con pasión y servido con orgullo.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-0.5 bg-accent" />
              <span className="font-serif italic text-lg text-foreground">Familia Martínez</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
