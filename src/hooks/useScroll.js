import { useState, useEffect } from 'react'

export const useScroll = () => {
  const [scrollDirection, setScrollDirection] = useState("up")
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setScrollDirection("up")
      } else if (currentScrollY > prevScrollY) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }
      
      setPrevScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollY])

  return scrollDirection
}