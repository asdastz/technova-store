'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiXCircle, FiRefreshCw, FiHome } from 'react-icons/fi'

export default function PaymentFailurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 py-20">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <FiXCircle className="text-6xl text-red-500" />
          </motion.div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pago No Procesado
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Lo sentimos, hubo un problema al procesar tu pago. Por favor, intenta nuevamente o utiliza otro método de pago.
          </p>

          <div className="bg-red-50 rounded-xl p-6 mb-8">
            <p className="text-red-700">
              <strong>Posibles causas:</strong>
            </p>
            <ul className="text-red-600 mt-2 text-left list-disc list-inside">
              <li>Fondos insuficientes</li>
              <li>Tarjeta rechazada por el banco</li>
              <li>Datos de pago incorrectos</li>
              <li>Problema de conexión</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/carrito">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <FiRefreshCw />
                Intentar de Nuevo
              </motion.button>
            </Link>
            
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <FiHome />
                Volver al Inicio
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

