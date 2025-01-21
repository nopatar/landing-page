'use client'
import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from '@/styles/components/Hero.module.css'

const Hero = ({ scrollToProducts }) => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={heroRef} className={`${styles.heroContainer} ${styles.fadeIn}`}>
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage:
            'url(https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY40,$PPSW,$WY19P,$IPB5&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&overlay=0&)',
        }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <h1 className={styles.title}>Hello there</h1>
            <p className={styles.description}>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <button className={styles.button}>Get Started</button>
          </div>
          <button 
            onClick={scrollToProducts}
            className={styles.scrollButton}
            aria-label="Scroll to products"
          >
            <ChevronDown size={38} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero