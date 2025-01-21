'use client'
import Image from 'next/image'
import styles from '@/styles/components/Products.module.css'

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Product One',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quisquam.',
      image: '/next.svg'
    },
    {
      id: 2,
      title: 'Product Two', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quisquam.',
      image: '/next.svg'
    }
  ]

  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        {/* <h2 className={styles.title}>Our Products</h2> */}
        <div className={styles.grids}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <button className={styles.button}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products