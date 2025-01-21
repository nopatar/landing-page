'use client'
import { useRef } from 'react'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Partner from '@/components/home/Partner'
import Products from '@/components/home/Products'
import '@/styles/animations.css'

import { useSelector } from 'react-redux'

export default function Home() {
  const productsRef = useRef(null)
  const products = useSelector((state) => state.product.list)

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>
      <Hero scrollToProducts={scrollToProducts} />
        <Products items={products} ref={productsRef}/>
        <Services />
        <Partner />
    </main>
  )
}
