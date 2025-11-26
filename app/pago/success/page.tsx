'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCheckCircle, FiPackage, FiHome } from 'react-icons/fi'
import { useEffect } from 'react'
import { useCart } from '@/context/CartContext'

export default function PaymentSuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    // Limpiar el carrito después de un pago exitoso
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-20">
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
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <FiCheckCircle className="text-6xl text-green-500" />
          </motion.div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ¡Pago Exitoso!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Tu pedido ha sido procesado correctamente. Recibirás un correo electrónico con los detalles de tu compra.
          </p>

          <div className="bg-green-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-green-700">
              <FiPackage className="text-2xl" />
              <span className="font-semibold">Tu pedido está en camino</span>
            </div>
            <p className="text-green-600 mt-2">
              Tiempo estimado de entrega: 2-5 días hábiles
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/productos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <FiPackage />
                Seguir Comprando
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

