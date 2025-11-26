'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { FiArrowRight } from 'react-icons/fi'

interface Service {
  id: number
  title: string
  description: string
  icon: IconType
  price: string
  features: string[]
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card h-full"
    >
      <div className="p-8">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6">
          <Icon className="text-3xl text-white" />
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-6 border-t">
          <div>
            <p className="text-sm text-gray-500">Desde</p>
            <p className="text-2xl font-bold text-primary-600">{service.price}</p>
          </div>
          <button className="flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
            Más Info
            <FiArrowRight />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

