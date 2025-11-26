'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import ServiceCard from '@/components/ServiceCard'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones profesionales de TI para empresas y particulares. 
            Expertos en tecnología a tu servicio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl shadow-2xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">¿Necesitas un servicio personalizado?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos y te ayudaremos a encontrar la solución perfecta para tu negocio
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Solicitar Cotización
          </button>
        </motion.div>
      </div>
    </div>
  )
}

