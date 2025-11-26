'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiAlertCircle } from 'react-icons/fi'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import MercadoPagoButton from '@/components/MercadoPagoButton'

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()
  const [paymentError, setPaymentError] = useState<string | null>(null)

  const subtotal = getCartTotal()
  const shipping = subtotal > 1000 ? 0 : 99
  const tax = subtotal * 0.16
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiShoppingBag className="text-5xl text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Tu carrito está vacío
            </h1>
            <p className="text-gray-600 mb-8">
              ¡Agrega algunos productos increíbles!
            </p>
            <Link href="/productos">
              <button className="btn-primary">
                Ver Productos
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <FiShoppingCart /> Carrito de Compras
            </h1>
            <p className="text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'} en tu carrito
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-600 font-medium flex items-center gap-2"
          >
            <FiTrash2 />
            Vaciar carrito
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-2xl font-bold text-primary-600 mt-2">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <FiMinus />
                    </motion.button>
                    <span className="text-xl font-semibold w-8 text-center">{item.quantity}</span>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <FiPlus />
                    </motion.button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right min-w-[100px]">
                    <p className="text-sm text-gray-500">Subtotal</p>
                    <p className="text-xl font-bold text-gray-900">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                  >
                    <FiTrash2 className="text-xl" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} productos):</span>
                  <span className="font-semibold">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Envío:</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-500">¡Gratis!</span>
                    ) : (
                      `$${shipping.toLocaleString()}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-sm text-gray-500">
                    ¡Agrega ${(1000 - subtotal).toLocaleString()} más para envío gratis!
                  </p>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>IVA (16%):</span>
                  <span className="font-semibold">${tax.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="border-t-2 pt-4">
                  <div className="flex justify-between text-2xl font-bold text-gray-900">
                    <span>Total:</span>
                    <span className="text-primary-600">${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

              {/* Error de pago */}
              {paymentError && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <FiAlertCircle className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-700 font-medium">Error en el pago</p>
                    <p className="text-red-600 text-sm">{paymentError}</p>
                  </div>
                </div>
              )}

              {/* Botón de Mercado Pago */}
              <MercadoPagoButton 
                items={cartItems}
                onError={(error) => setPaymentError(error)}
                onSuccess={() => setPaymentError(null)}
              />

              <div className="my-4 flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-gray-400 text-sm">o</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              
              <Link href="/productos">
                <button className="w-full btn-secondary">
                  Seguir Comprando
                </button>
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
                  <span>🔒 Pago Seguro</span>
                  <span>🚚 Envío Rápido</span>
                </div>
                <div className="flex items-center justify-center mt-3">
                  <img 
                    src="https://imgmp.mlstatic.com/org-img/banners/mx/medios/MLM_575x40.jpg" 
                    alt="Métodos de pago Mercado Pago"
                    className="max-w-full h-auto rounded"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
