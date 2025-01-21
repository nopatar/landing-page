import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      title: 'Roof Rack',
      price: 18000,
      quantity: 10,
      images: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1518236-00-A_0_2000.jpg'
    },
  ],
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existingItem = state.items.find(i => i.id === item.id)
      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        state.items.push({ ...item, quantity: item.quantity })
      }
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const existingItem = state.items.find(i => i.id === id)
      if (existingItem) {
        existingItem.quantity = quantity
      }
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },

    removeItem: (state, action) => {
      const id = action.payload
      state.items = state.items.filter(i => i.id !== id)
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
})

export const { addToCart, updateQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer
