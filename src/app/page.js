'use client'
import { useRef } from 'react'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Partner from '@/components/home/Partner'
import Products from '@/components/home/Products'

import '@/styles/animations.css'

export default function Home() {
  const productsRef = useRef(null)

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>
      <Hero scrollToProducts={scrollToProducts} />
        <Products  ref={productsRef}/>
        <Services />
        <Partner />
    </main>
  )
}
