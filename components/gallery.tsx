"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
    alt: "Plato principal gourmet",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974",
    alt: "Mariscos frescos",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974",
    alt: "Interior del restaurante",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070",
    alt: "Postre de chocolate",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974",
    alt: "Chef en acción",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
    alt: "Carne a la parrilla",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974",
    alt: "Ensalada mediterránea",
    span: "col-span-1 row-span-1",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">Galería</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Momentos y Sabores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra cocina a través de imágenes que capturan la esencia 
            de cada plato y el ambiente único de Olivar.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-primary-foreground hover:text-accent transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
