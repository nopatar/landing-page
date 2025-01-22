'use client'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadCheckout } from '@/store/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'

export default function SuccessPage() {
  const dispatch = useDispatch()
  const orderData = useSelector((state) => state.cart.orderData)

  useEffect(() => {
    dispatch(loadCheckout())
  }, [dispatch])

  if (!orderData) {
    return (
      <main className="container min-h-screen mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
        <p className="text-xl">No order data available. Please try again.</p>
      </main>
    )
  }

  return (
    <main className="container min-h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Order Success</h1>
      <div className="space-y-8">
        {/* Section 1: Customer Name */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Hi, {orderData.userData.name}</h2>
        </div>

        {/* Section 2: Order Details */}
        <div>
          <h2 className="text-xl font-bold mb-2">Order Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className='grid grid-cols-1'>
              <span className="font-semibold">Order Number:</span>
              <span className="ml-2">{orderData.orderNumber}</span>
            </div>
            <div className='grid grid-cols-1'>
              <span className="font-semibold">Created Date:</span>
              <span className="ml-2">{orderData.createdDate}</span>
            </div>
            <div className='grid grid-cols-1'>
              <span className="font-semibold">Payment Method:</span>
              <span className="ml-2">{orderData.paymentMethod}</span>
            </div>
            <div className='grid grid-cols-1'>
              <span className="font-semibold">Shipping Address:</span>
              <span className="ml-2">{orderData.userData.address}</span>
            </div>
          </div>
        </div>

        {/* Section 3: Product Details */}
        <div>
          <h2 className="text-xl font-bold mb-2">Products</h2>
          <div className="grid grid-cols-2 gap-4">
            {orderData.items.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                  <p className="text-sm">Price: ฿{Number(item.price).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Order Summary */}
        <div>
          <h2 className="text-xl font-bold mb-2">Order Summary</h2>
          <div>
            <div className="mb-2">
              <span className="font-medium">Total Items:</span>
              <span className="ml-2">{orderData.totalItems}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Total Price:</span>
              <span className="ml-2">฿{orderData.totalPrice}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Shipping Fee:</span>
              <span className="ml-2">฿0</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Grand Total:</span>
              <span className="ml-2">฿{orderData.totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Section 5: Thank You Note */}
        <div>
          <h2 className="text-xl font-bold mb-2">Thank You!</h2>
          <p className="text-lg">We appreciate your business and hope you enjoy your purchase.</p>
          <Link href='/shop'>
            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}