'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useScroll } from '@/hooks/useScroll'

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
    SHOP: {
      link: '/shop',
      items: [],
    },
    SERVICES: {
      link: '/services',
      items: [
        { name: 'INTERIOR', link: '/services/interior' },
        { name: 'REPAIR', link: '/services/repair' },
      ],
    },
    ABOUT: {
      link: '/about',
      items: [
        { name: 'COMPANY', link: '/about/company' },
        { name: 'CAREER', link: '/about/careers' },
      ],
    },
    CONTACT: {
      link: '/contact',
      items: [],
    },
  }

  const scrollDirection = useScroll()
  return (
    <nav
      className={`
      fixed w-full bg-white transition-transform duration-300
      ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
      md:relative md:translate-y-0 z-10
    `}
    >
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-1 gap-1">
            <Link href="/">
              {/* <img src="https://placehold.co/150x60" alt="logo" /> */}
              <div className="flex justify-center items-center p-2 rounded-lg text-orange-500 hover:text-slate-500 hover:bg-gray-100 gap-1">
                <span className="text-4xl font-extrabold">Aut</span>
                <CircleSlash2 className="" size={32} />
              </div>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(menuItems).map(([title, { link, items }]) => (
              <div key={title} className="relative group z-10">
                <Link
                  href={link}
                  className="py-2 hover:text-orange-500 transition-colors"
                >
                  {title}
                  {items.length > 0 && (
                    <ChevronDown className="inline-block ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>
                {items.length > 0 && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.link}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
          {Object.entries(menuItems).map(([title, { link, items }]) => (
            <div key={title} className="border-b border-gray-100">
              <div className="w-full py-2 flex justify-between items-center">
                <Link
                  href={link}
                  className="hover:text-orange-500 transition-colors"
                >
                  {title}
                </Link>
                {items.length > 0 && (
                  <button onClick={() => toggleExpand(title)} className="p-2">
                    <ChevronDown
                      className={`transform transition-transform duration-700 ease-in-out ${
                        expandedItems[title] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
              {items.length > 0 && (
                <div
                  className={`
              overflow-hidden transition-all duration-700 ease-in-out
              ${expandedItems[title] ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
            `}
                >
                  <div className="pl-4 py-2 space-y-2">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.link}
                        className={`
                    block text-gray-600 hover:text-orange-500 transition-all duration-700 ease-in-out transform
                    ${expandedItems[title] ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
                  `}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
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
