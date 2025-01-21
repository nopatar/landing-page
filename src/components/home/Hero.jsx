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
            'url(https://fastly.picsum.photos/id/605/2513/1670.jpg?hmac=2r8cThRG-HoN42A9oCO19I1RC78posajQDKgVbNqy1s)',
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
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero