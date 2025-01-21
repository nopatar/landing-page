'use client'
import { useRef } from 'react'
import Hero from '@/components/home/Hero'
import Products from '@/components/home/Products'
import ClientCorousel from '@/components/home/ClientCorousel'

import '@/styles/animations.css'

export default function Home() {
  const productsRef = useRef(null)

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <Hero scrollToProducts={scrollToProducts} />
        <div ref={productsRef}>
          <Products />
        </div>
        <ClientCorousel />
    </main>
  )
}
