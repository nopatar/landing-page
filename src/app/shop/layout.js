'use client'

import { Kanit } from 'next/font/google'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadCart } from '@/store/slices/cartSlice'
import '../globals.css'
import Footer from '@/components/Footer'
import ShopNavbar from '@/components/shop/ShopNavbar'

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCart())
  }, [dispatch])

  return (
    <html lang="en">
      <body className={`${kanit.variable} antialiased`}>
        <ShopNavbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}