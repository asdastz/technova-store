'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ServiceCard from './ServiceCard'
import { services } from '@/data/services'

export default function Services() {
  const featuredServices = services.slice(0, 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="section-subtitle">
            Soluciones profesionales para todas tus necesidades tecnológicas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/servicios">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Ver Todos los Servicios
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

