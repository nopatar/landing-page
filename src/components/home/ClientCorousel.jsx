import { useState, useEffect } from 'react'
import { Users, ChevronLeft, ChevronRight } from 'lucide-react'

const ClientCorousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      // Set 6 items for laptop screens (1024px and above)
      setItemsPerPage(window.innerWidth >= 1024 ? 6 : 4)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const clients = [
    { name: 'TOYOTA', logo: 'https://evolt.co.th/wp-content/uploads/2022/09/27-2.jpg' },
    { name: 'BMW', logo: 'https://evolt.co.th/wp-content/uploads/2022/09/39.jpg' },
    { name: 'VOLVO', logo: 'https://evolt.co.th/wp-content/uploads/2022/09/28.jpg' },
    { name: 'BYD', logo: 'https://evolt.co.th/wp-content/uploads/2022/09/30.jpg' },
    { name: 'PORSCHE', logo: 'https://evolt.co.th/wp-content/uploads/2022/09/38.jpg' },
    { name: 'MG', logo: 'https://evolt.co.th/wp-content/uploads/2022/09/29.jpg' },
    // เพิ่ม clients อื่นๆ ได้ตามต้องการ
    { name: 'GWM', logo: 'https://evolt.co.th/wp-content/uploads/2022/09/37.jpg' },
    { name: 'BENZ', logo: 'https://evolt.co.th/wp-content/uploads/2022/09/36.jpg' },
  ];
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleClients = clients.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-12'>
      {/* Header */}
      <div className='text-center mb-6'>
        <div className='flex items-center justify-center gap-2 mb-2'>
          <Users className='text-red-500' size={48}/>
          <h2 className="text-3xl font-bold text-red-500">CLIENTS</h2>
        </div>
      </div>

            {/* Carousel Container */}
            <div className="relative">
        {/* Navigation Buttons - Now inside the content area */}
        <button
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all"
          aria-label="Previous page"
        >
          <ChevronLeft size={48} className="text-gray-600" />
        </button>

        <button
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all"
          aria-label="Next page"
        >
          <ChevronRight size={48} className="text-gray-600" />
        </button>

        {/* Grid of Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-6">
          {visibleClients.map((client, index) => (
            <div
              key={index}
              className="aspect-video flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ClientCorousel