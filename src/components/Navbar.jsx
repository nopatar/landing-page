'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronDown, X, Menu } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState({})

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleExpand = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const menuItems = {
    บริการของอีโวลท์: [
      'บริการติดตั้งแบบครบวงจร',
      'บริการเครื่องชาร์จ',
      'บริการแพลตฟอร์มและแอปพลิเคชั่น',
      'บริการให้คำปรึกษาจากวิศวกร',
    ],
    'ผู้ใช้งานรถ EV': [],
    เกี่ยวกับอีโวลท์: [],
    ติดต่อเรา: [],
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="https://placehold.co/60x40" alt="logo" className="h-8" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          absolute top-16 right-0 w-full bg-white shadow-lg
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
          md:hidden min-h-screen z-10
  `}
      >
        <div className="px-4 py-3 space-y-4">
          {Object.entries(menuItems).map(([title, subItems]) => (
            <div key={title} className="border-b border-gray-100">
              <button
                onClick={() => toggleExpand(title)}
                className="w-full py-2 flex justify-between items-center"
              >
                <span>{title}</span>
                {subItems.length > 0 && (
                  <ChevronDown
                    className={`transform transition-transform duration-200 ${
                      expandedItems[title] ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>
              {subItems.length > 0 && expandedItems[title] && (
                <div className="pl-4 py-2 space-y-2">
                  {subItems.map((item) => (
                    <div key={item} className="text-gray-600">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
