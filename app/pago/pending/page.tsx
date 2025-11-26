'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiClock, FiMail, FiHome } from 'react-icons/fi'

export default function PaymentPendingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 py-20">
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
            className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <FiClock className="text-6xl text-yellow-500" />
          </motion.div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pago Pendiente
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Tu pago está siendo procesado. Te notificaremos por correo electrónico cuando se confirme.
          </p>

          <div className="bg-yellow-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-yellow-700">
              <FiMail className="text-2xl" />
              <span className="font-semibold">Revisa tu correo</span>
            </div>
            <p className="text-yellow-600 mt-2">
              Recibirás una confirmación en las próximas horas
            </p>
          </div>

          <div className="text-left bg-gray-50 rounded-xl p-6 mb-8">
            <p className="font-semibold text-gray-800 mb-2">¿Qué sigue?</p>
            <ul className="text-gray-600 space-y-2">
              <li>• Si pagaste en efectivo (OXXO, 7-Eleven), tu pago puede tardar 1-2 días hábiles en reflejarse</li>
              <li>• Si usaste transferencia bancaria, puede tardar algunas horas</li>
              <li>• Te enviaremos un correo cuando tu pago sea confirmado</li>
            </ul>
          </div>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              <FiHome />
              Volver al Inicio
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

