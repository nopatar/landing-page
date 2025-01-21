'use client'
import Image from 'next/image'
import styles from '@/styles/components/Services.module.css'

const Services = () => {
  const Services = [
    {
      id: 1,
      title: 'Interior',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quisquam.',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Performance-Interior-Desktop-RHD.png'
    },
    {
      id: 2,
      title: 'Repair', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quisquam.',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1254,w_2235,c_fit,f_auto,q_auto:best/About-Us-Exceptional-Desktop-Global'
    }
  ]

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
      <div className={styles.title}>
        <h2>Services</h2>
      </div>
        <div className={styles.grids}>
          {Services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.servicesTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <button className={styles.button}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services