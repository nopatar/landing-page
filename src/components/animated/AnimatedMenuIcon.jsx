import { X, Menu } from 'lucide-react'

const AnimatedMenuIcon = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-500"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="relative w-12 h-12">
          <div
            className={`absolute transition-all duration-700 ease-in-out transform ${
              isMenuOpen
                ? 'opacity-0 rotate-180 scale-0'
                : 'opacity-100 rotate-0 scale-100'
            }`}
          >
            <Menu size={48} />
          </div>
          <div
            className={`absolute transition-all duration-700 ease-in-out transform ${
              isMenuOpen
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-180 scale-0'
            }`}
          >
            <X size={48} />
          </div>
        </div>
      </button>
    </div>
  )
}

export default AnimatedMenuIcon