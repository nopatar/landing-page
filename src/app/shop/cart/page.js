'use client'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { updateQuantity, removeItem } from '@/store/slices/cartSlice'
import styles from '@/styles/components/Cart.module.css'

export default function CartPage() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const totalItems = useSelector((state) => state.cart.totalItems)

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id))
  }

  return (
    <main className="container min-h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Cart Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={styles.cartContainer}>
          {cartItems.length === 0 ? (
            <p className="text-xl">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.images[1] }
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
                    <input
                      id={`quantity-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="w-16 p-1 border border-gray-300 rounded"
                    />
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="mt-2 text-red-500 hover:text-red-700"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className={styles.orderSummary}>
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-lg">Total Items:</span>
              <span className="text-lg">{totalItems}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-lg">Total Price:</span>
              <span className="text-lg">฿{totalPrice}</span>
            </div>
            <Link href='/shop/checkout'>
            <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
              Proceed to Checkout
            </button>
            </Link>
          </div>
        )}

      </div>
    </main>
  )
}