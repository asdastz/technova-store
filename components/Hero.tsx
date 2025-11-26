'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiZap, FiShield, FiTruck } from 'react-icons/fi'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              La Tecnología del{' '}
              <span className="gradient-text">Futuro</span>{' '}
              Está Aquí
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubre los mejores productos tecnológicos y servicios profesionales 
              de TI. Calidad garantizada y soporte experto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/productos">
                <button className="btn-primary flex items-center justify-center gap-2">
                  Ver Productos
                  <FiArrowRight className="text-xl" />
                </button>
              </Link>
              <Link href="/servicios">
                <button className="btn-secondary">
                  Explorar Servicios
                </button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FiZap className="text-2xl text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Entrega Rápida</p>
                  <p className="text-sm text-gray-600">24-48 horas</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FiShield className="text-2xl text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Garantía</p>
                  <p className="text-sm text-gray-600">2 años</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FiTruck className="text-2xl text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Envío Gratis</p>
                  <p className="text-sm text-gray-600">+$1000</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://picsum.photos/seed/techstore/800/600"
                alt="Technology"
                className="rounded-2xl shadow-2xl animate-float"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 -right-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
    </div>
  )
}

