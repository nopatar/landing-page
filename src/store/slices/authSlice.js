import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
      localStorage.removeItem('cart-data')
      localStorage.removeItem('order-data')
      window.location.reload()
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer