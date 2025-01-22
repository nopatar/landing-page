import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
  orderData: null,
}

const saveCartData = (state) => {
  const cartData = {
    items: state.items,
    totalPrice: state.totalPrice,
    totalItems: state.totalItems,
  }
  localStorage.setItem('cart-data', JSON.stringify(cartData))
}

const saveOrderData = (orderData) => {
  localStorage.setItem('order-data', JSON.stringify(orderData))
}

const loadCartData = () => {
  const cartData = localStorage.getItem('cart-data')
  return cartData ? JSON.parse(cartData) : initialState
}

const loadOrderData = () => {
  const orderData = localStorage.getItem('order-data')
  return orderData ? JSON.parse(orderData) : null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existingItem = state.items.find(i => i.id === item.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0)
      saveCartData(state)
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const existingItem = state.items.find(i => i.id === id)
      if (existingItem) {
        existingItem.quantity = quantity
      }
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0)
      saveCartData(state)
    },

    removeItem: (state, action) => {
      const id = action.payload
      state.items = state.items.filter(i => i.id !== id)
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0)
      saveCartData(state)
    },

    loadCart: (state) => {
      const cartData = loadCartData()
      state.items = cartData.items
      state.totalPrice = cartData.totalPrice
      state.totalItems = cartData.totalItems
    },

    checkout: (state, action) => {
      const { userData, paymentMethod } = action.payload
      const orderData = {
        userData,
        items: state.items,
        totalPrice: state.totalPrice,
        totalItems: state.totalItems,
        paymentMethod,
        createdDate: new Date().toLocaleString(),
        orderNumber: `O${Math.floor(Math.random() * 1000000)}`,
      }
      state.orderData = orderData
      saveOrderData(orderData)
    },

    loadCheckout: (state) => {
      state.orderData = loadOrderData()
    }
  },
})

export const { addToCart, updateQuantity, removeItem, loadCart, checkout, loadCheckout } = cartSlice.actions
export default cartSlice.reducer