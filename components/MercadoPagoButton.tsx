'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCreditCard, FiLoader } from 'react-icons/fi'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface MercadoPagoButtonProps {
  items: CartItem[]
  onSuccess?: () => void
  onError?: (error: string) => void
}

export default function MercadoPagoButton({ items, onSuccess, onError }: MercadoPagoButtonProps) {
  const [loading, setLoading] = useState(false)

  const handlePayment = async () => {
    if (items.length === 0) {
      onError?.('El carrito está vacío')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/create_preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      if (data.init_point) {
        // Redirigir al checkout de Mercado Pago
        window.location.href = data.init_point
        onSuccess?.()
      } else {
        throw new Error('No se pudo obtener el enlace de pago')
      }
    } catch (error: any) {
      console.error('Payment error:', error)
      onError?.(error.message || 'Error al procesar el pago')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.button
      whileHover={{ scale: loading ? 1 : 1.02 }}
      whileTap={{ scale: loading ? 1 : 0.98 }}
      onClick={handlePayment}
      disabled={loading || items.length === 0}
      className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
        loading || items.length === 0
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-[#009ee3] hover:bg-[#007eb5] text-white shadow-lg hover:shadow-xl'
      }`}
    >
      {loading ? (
        <>
          <FiLoader className="text-xl animate-spin" />
          Procesando...
        </>
      ) : (
        <>
          <FiCreditCard className="text-xl" />
          Pagar con Mercado Pago
        </>
      )}
    </motion.button>
  )
}

