import { forwardRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '@/styles/components/Products.module.css'

const Products = forwardRef(({ items }, ref) => {
  const [hoveredImage, setHoveredImage] = useState({})

  return (
    <div ref={ref} className={styles.productsContainer}>
      <div className={styles.title}>
        <Link href='/shop'>
          <h2 className='hover:text-orange-500 cursor-pointer'>SHOP</h2>
        </Link>
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