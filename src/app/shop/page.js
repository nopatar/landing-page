'use client'
import { useSelector, useDispatch } from 'react-redux'

import Swiper from '@/components/shop/Swiper'
import Products from '@/components/home/Products'

import { addToCart, loadCart } from '@/store/slices/cartSlice'

export default function ShopPage() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.list)

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <main className="container mx-auto px-4 py-8">
          <Swiper />
          <Products 
            items={products}
            onAddToCart={handleAddToCart}
          />
    </main>
  )
}