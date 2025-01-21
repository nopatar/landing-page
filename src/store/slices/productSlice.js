import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      id: 1,
      title: 'Roof Rack',
      price: '18000',
      images: [
        'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1518236-00-A_0_2000.jpg',
        'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1518236-00-A_1_2000.jpg',
      ]
    },
    {
      id: 2,
      title: 'Car Cover',
      price: '2000',
      images: [
        'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1553614-00-A_2_2000.jpg',
        'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1553614-00-A_1_2000.jpg'
      ]
    },
  ]
}
const productSlice = createSlice({
  name: 'product',
  initialState,
})

export default productSlice.reducer
