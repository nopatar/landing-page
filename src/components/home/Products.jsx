import { forwardRef, useState } from 'react'
import Image from 'next/image'

import styles from '@/styles/components/Products.module.css'

const Products = forwardRef((props, ref) => {
  const [hoveredImage, setHoveredImage] = useState({})
  const items = [
    {
      id: 1,
      title: 'Roof Rack',
      price: '18000',
      images: [
        'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1518236-00-A_0_2000.jpg',
        'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1518236-00-A_1_2000.jpg'
      ]
    },
    {
      id: 2,
      title: 'Car Cover',
      price: '18000',
      images: [
        'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1553614-00-A_2_2000.jpg',
        'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1553614-00-A_1_2000.jpg'
      ]
    },
  ]

  return (
    <div ref={ref} className={styles.productsContainer}>
      <div className={styles.title}>
        <h2 className='hover:text-orange-500 cursor-pointer'>SHOP</h2>
        <p className='font-light text-2xl'>Accessories</p>
      </div>

      <div className={styles.grids}>
        {items.map((item) => (
          <div className={styles.card} key={item.id}>
            <div 
              className={styles.imageWrapper}
              onMouseEnter={() => setHoveredImage(prev => ({...prev, [item.id]: true}))}
              onMouseLeave={() => setHoveredImage(prev => ({...prev, [item.id]: false}))}
            >
              <Image
                src={hoveredImage[item.id] ? item.images[1] : item.images[0]}
                alt={item.title}
                width={500}
                height={300}
                className={styles.productImage}
                priority
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className='hover:text-orange-500 cursor-pointer'>{item.title}</h3>
              <p>฿{Number(item.price).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
})

Products.displayName = 'Products'
export default Products