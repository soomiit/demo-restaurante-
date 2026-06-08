import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold mb-4">Olivar</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Cocina mediterránea de autor en el corazón de Madrid. 
              Una experiencia gastronómica que celebra la tradición y la innovación.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#historia" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="#carta" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Carta
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#reservar" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Reservar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  Calle Gran Vía, 42<br />28013 Madrid
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+34 912 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">info@olivar.es</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Horario</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex justify-between">
                <span>Lun - Vie</span>
                <span>13:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sáb - Dom</span>
                <span>13:00 - 00:00</span>
              </li>
            </ul>
            <p className="text-primary-foreground/60 text-sm mt-4">
              * Cocina abierta hasta las 23:00
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Olivar. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
