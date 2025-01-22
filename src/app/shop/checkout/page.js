'use client'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { checkout } from '@/store/slices/cartSlice'
import styles from '@/styles/components/Cart.module.css'

export default function CheckoutPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const cartItems = useSelector((state) => state.cart.items)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const totalItems = useSelector((state) => state.cart.totalItems)

  const [userData, setUserData] = useState({
    email: '',
    name: '',
    address: '',
    note: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('')

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleCheckout = () => {
    dispatch(checkout({ userData, paymentMethod }))
    router.push('/shop/success')
  }

  return (
    <main className="container min-h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={userData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              value={userData.address}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label htmlFor="note" className="block text-lg font-medium text-gray-700">Note</label>
            <textarea
              id="note"
              value={userData.note}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label htmlFor="paymentMethod" className="block text-lg font-medium text-gray-700">Payment Method</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">Select a payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Proceed to Payment
          </button>
        </div>

        {/* Order Summary Section */}
        <div className={styles.cartContainer}>
          {cartItems.length === 0 ? (
            <p className="text-xl">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.images[1]}
                    alt={item.title}
                    width={150}
                    height={150}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.productInfo}>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-xl">฿{Number(item.price).toLocaleString()}</p>
                  <div className="flex items-center space-x-2">
                    <label htmlFor={`quantity-${item.id}`} className="text-lg">Quantity:</label>
                    <span className="text-lg">{item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
          {cartItems.length > 0 && (
            <div className={styles.orderSummary}>
              <div className='flex justify-between mb-2'>
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <Link href='/shop/cart'>
                <h3 className='text-xl cursor-pointer text-yellow-600'>EDIT</h3>
                </Link>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-lg">Total Items:</span>
                <span className="text-lg">{totalItems}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-lg">Total Price:</span>
                <span className="text-lg">฿{totalPrice}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}