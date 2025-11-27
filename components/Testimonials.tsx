'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Martínez',
      role: 'CEO de TechStartup',
      image: 'https://picsum.photos/seed/person1/80/80',
      rating: 5,
      text: 'Excelente servicio y productos de calidad. El soporte técnico es excepcional y siempre están disponibles para ayudar.'
    },
    {
      id: 2,
      name: 'Ana García',
      role: 'Diseñadora Freelance',
      image: 'https://picsum.photos/seed/person2/80/80',
      rating: 5,
      text: 'Compré mi laptop aquí y fue la mejor decisión. Precios competitivos y entrega súper rápida. ¡Totalmente recomendado!'
    },
    {
      id: 3,
      name: 'Roberto Sánchez',
      role: 'Gerente de TI',
      image: 'https://picsum.photos/seed/person3/80/80',
      rating: 5,
      text: 'Los servicios de consultoría son de primer nivel. Han ayudado a optimizar nuestra infraestructura tecnológica.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Lo Que Dicen <span className="gradient-text">Nuestros Clientes</span>
          </h2>
          <p className="section-subtitle">
            Miles de clientes satisfechos confían en nosotros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

