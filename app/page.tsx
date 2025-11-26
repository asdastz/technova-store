'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import Services from '@/components/Services'
import Newsletter from '@/components/Newsletter'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Testimonials />
      <Newsletter />
    </>
  )
}

