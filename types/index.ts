import { IconType } from 'react-icons'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  inStock: boolean
}

export interface Service {
  id: number
  title: string
  description: string
  icon: IconType
  price: string
  features: string[]
}

export interface CartItem {
  id: number
  productId: number
  name: string
  price: number
  quantity: number
  image: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  rating: number
  text: string
}

