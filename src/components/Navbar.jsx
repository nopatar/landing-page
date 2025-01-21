'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import { ChevronDown, CircleSlash2 } from 'lucide-react'

import AnimatedMenuIcon from '@/components/animated/AnimatedMenuIcon'
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
    SHOP: [],
    SERVICES: [
      'INTERIOR',
      'REPAIR',
    ],
    'ABOUT': [
      'COMPANY',
      'JOIN TEAM'
    ],
    CONTACT: [],
  }

  return (
    <nav className="relative bg-white shadow-lg min-h-24">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              {/* <img src="https://placehold.co/150x60" alt="logo" /> */}
              <div className='flex justify-center items-center p-2 rounded-lg hover:bg-gray-100'>
                <span className='text-4xl font-extrabold'>Aut</span>
                <CircleSlash2 className='' size={32} />
              </div>
            </Link>
          </div>
          <AnimatedMenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        </div>
      </div>

      {/* Mobile menu Expanded*/}
      <div
        className={`
          absolute top-26 right-0 w-full bg-white shadow-lg px-12
          transition-all duration-700 ease-in-out origin-top transform
          ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
          md:hidden z-10 min-h-screen
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
                    className={`transform transition-transform duration-700 ease-in-out ${
                      expandedItems[title] ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>
              <div
                className={`
                  overflow-hidden transition-all duration-700 ease-in-out
                  ${expandedItems[title] ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="pl-4 py-2 space-y-2">
                  {subItems.map((item) => (
                    <div 
                      key={item} 
                      className={`
                        text-gray-600 transition-all duration-700 ease-in-out transform
                        ${expandedItems[title] ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
                      `}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar
