"use client"

import { useState } from "react"

const categories = [
  { id: "entrantes", name: "Entrantes" },
  { id: "principales", name: "Principales" },
  { id: "postres", name: "Postres" },
  { id: "bebidas", name: "Bebidas" },
]

const menuItems = {
  entrantes: [
    {
      name: "Carpaccio de Pulpo",
      description: "Pulpo gallego finamente laminado con aceite de oliva virgen extra, pimentón de la Vera y microgreens",
      price: "18",
      featured: true,
    },
    {
      name: "Burrata con Tomate",
      description: "Burrata cremosa sobre tomate de temporada, albahaca fresca y reducción de balsámico",
      price: "16",
    },
    {
      name: "Croquetas de Jamón",
      description: "Croquetas caseras de jamón ibérico con bechamel suave y crujiente exterior",
      price: "14",
    },
    {
      name: "Gazpacho Andaluz",
      description: "Sopa fría tradicional de tomate con guarnición de verduras frescas picadas",
      price: "12",
    },
  ],
  principales: [
    {
      name: "Lubina a la Sal",
      description: "Lubina salvaje cocinada en costra de sal marina, acompañada de verduras de temporada",
      price: "32",
      featured: true,
    },
    {
      name: "Arroz Caldoso de Bogavante",
      description: "Arroz cremoso con bogavante fresco, fumet de marisco y un toque de azafrán",
      price: "38",
    },
    {
      name: "Cordero a Baja Temperatura",
      description: "Paletilla de cordero lechal cocinada durante 12 horas con hierbas mediterráneas",
      price: "28",
    },
    {
      name: "Risotto de Setas",
      description: "Arroz arborio con setas de temporada, parmesano reggiano y trufa negra",
      price: "24",
    },
  ],
  postres: [
    {
      name: "Tarta de Queso",
      description: "Tarta de queso cremosa con base de galleta y coulis de frutos rojos",
      price: "10",
      featured: true,
    },
    {
      name: "Crema Catalana",
      description: "Postre tradicional con costra de caramelo crujiente y canela",
      price: "9",
    },
    {
      name: "Sorbete de Limón",
      description: "Sorbete refrescante de limón siciliano con un toque de cava",
      price: "8",
    },
    {
      name: "Brownie con Helado",
      description: "Brownie de chocolate belga con helado de vainilla y nueces caramelizadas",
      price: "11",
    },
  ],
  bebidas: [
    {
      name: "Vino Tinto Reserva",
      description: "Selección de vinos tintos de las mejores bodegas de Rioja y Ribera del Duero",
      price: "Copa 7 / Botella 28",
    },
    {
      name: "Vino Blanco Albariño",
      description: "Albariño fresco y afrutado de las Rías Baixas gallegas",
      price: "Copa 6 / Botella 24",
    },
    {
      name: "Sangría de la Casa",
      description: "Sangría tradicional con vino tinto, frutas frescas y un toque de brandy",
      price: "Jarra 18",
    },
    {
      name: "Agua Mineral",
      description: "Agua mineral natural o con gas de manantial",
      price: "4",
    },
  ],
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("entrantes")

  return (
    <section id="carta" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">Nuestra Carta</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Sabores del Mediterráneo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada plato está elaborado con ingredientes frescos y de temporada, 
            respetando las recetas tradicionales con un toque de creatividad.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={`px-6 py-2.5 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
            <div
              key={item.name}
              className={`p-6 border border-border bg-card hover:shadow-lg transition-shadow ${
                item.featured ? "ring-1 ring-accent" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    {item.name}
                  </h3>
                  {item.featured && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground">
                      Chef
                    </span>
                  )}
                </div>
                <span className="font-serif text-lg font-bold text-accent whitespace-nowrap">
                  {/\d/.test(String(item.price)) && !String(item.price).match(/[a-zA-Z€$]/)
                    ? `${item.price}€`
                    : item.price}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          * Todos los precios incluyen IVA. Consulta con nuestro personal sobre alérgenos e intolerancias.
        </p>
      </div>
    </section>
  )
}
