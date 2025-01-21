'use client'
import { useSelector } from 'react-redux'

import Swiper from '@/components/shop/Swiper'
import Products from '@/components/home/Products'

export default function ShopPage() {
  const products = useSelector((state) => state.product.list)
  return (
    <main>
      <Swiper />
      <Products items={products}/>
    </main>
  )
}