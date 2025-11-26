'use client'

import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiMail className="text-3xl text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Suscríbete a Nuestro Newsletter
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Recibe ofertas exclusivas, novedades y tips tecnológicos directamente en tu correo
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Suscribirse
            </motion.button>
          </form>

          <p className="text-white opacity-75 text-sm mt-4">
            No spam. Puedes cancelar tu suscripción en cualquier momento.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

