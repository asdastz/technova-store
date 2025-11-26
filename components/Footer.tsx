'use client'

import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">TechNova</h3>
            <p className="text-gray-400 mb-4">
              Tu tienda de confianza para productos tecnológicos y servicios de TI profesionales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <FiFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <FiTwitter className="text-2xl" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <FiInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <FiLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/productos" className="text-gray-400 hover:text-white transition-colors">Productos</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/sobre-nosotros" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link href="/envios" className="text-gray-400 hover:text-white transition-colors">Envíos y Devoluciones</Link></li>
              <li><Link href="/garantia" className="text-gray-400 hover:text-white transition-colors">Garantía</Link></li>
              <li><Link href="/terminos" className="text-gray-400 hover:text-white transition-colors">Términos y Condiciones</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <FiMapPin className="text-xl mt-1 flex-shrink-0" />
                <span>Av. Tecnología 123, Ciudad de México</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FiPhone className="text-xl" />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FiMail className="text-xl" />
                <span>info@technova.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechNova. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

