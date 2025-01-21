import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from '@/styles/components/Partner.module.css'

const Partner = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      // Set 6 items for laptop screens (1024px and above)
      setItemsPerPage(window.innerWidth >= 1024 ? 3 : 4)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const partners = [
    {
      name: 'TOYOTA',
      logo: 'https://www.carlogos.org/car-logos/toyota-logo.png',
    },
    { name: 'BMW', 
      logo: 'https://www.carlogos.org/car-logos/bmw-logo.png' 
    },
    {
      name: 'VOLVO',
      logo: 'https://www.carlogos.org/car-logos/volvo-logo.png',
    },
    {
      name: 'AUDI',
      logo: 'https://www.carlogos.org/car-logos/audi-logo.png',
    },
    {
      name: 'PORSCHE',
      logo: 'https://evolt.co.th/wp-content/uploads/2022/09/38.jpg',
    },
    {
      name: 'MG',
      logo: 'https://www.carlogos.org/car-logos/mazda-logo.png',
    },
    {
      name: 'HYUNDAI',
      logo: 'https://www.carlogos.org/car-logos/hyundai-logo.png',
    },
    {
      name: 'BENZ',
      logo: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png',
    },
    {
      name: 'VOLK',
      logo: 'https://www.carlogos.org/car-logos/volkswagen-logo.png',
    },
    { name: 'FORD', 
      logo: 'https://www.carlogos.org/car-logos/ford-logo.png'
    },
    {
      name: 'HONDA',
      logo: 'https://www.carlogos.org/car-logos/honda-logo.png',
    },
    {
      name: 'NISSAN',
      logo: 'https://www.carlogos.org/car-logos/nissan-logo.png',
    },
  ]
  const totalPages = Math.ceil(partners.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const startIndex = currentPage * itemsPerPage
  const visiblePartners = partners.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className={styles.partnerContainer}>
      {/* Header */}
      <div className={styles.title}>
        <h2>Partners</h2>
      </div>
      {/* Grid of Logos */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-6"> */}
      <div className={styles.partnerGrid}>
        {visiblePartners.map((partner, index) => (
          <div
            key={index}
            className="aspect-video flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className={styles.partnerImage}
            />
          </div>
        ))}
      </div>
      {/* Navigation Buttons - Centered */}
      <div className={styles.navigation}>
        <button
          onClick={prevPage}
          className={styles.navButton}
          aria-label="Previous page"
        >
          <ChevronLeft size={36} />
        </button>
        <button
          onClick={nextPage}
          className={styles.navButton}
          aria-label="Next page"
        >
          <ChevronRight size={36} />
        </button>
      </div>
    </div>
  )
}

export default Partner
