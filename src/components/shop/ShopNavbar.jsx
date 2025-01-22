'use client'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { ChevronDown, CircleSlash2, ShoppingCart, CircleUserRound } from 'lucide-react'
import { login, logout } from '@/store/slices/authSlice'

const ShopNavbar = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const totalItems = useSelector((state) => state.cart.totalItems)

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

  return (
    <nav className="w-full bg-white shadow-lg transition-transform duration-300">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-1">
            <Link href="/">
              <div className="flex justify-center items-center">
                
                <span className="text-4xl font-bold text-slate-500 hover:text-orange-500 hover:bg-gray-100">
                <CircleSlash2 size={32} />
                </span>
              </div>
            </Link>
            <Link href="/shop">
              <div className="flex justify-center items-center p-2 rounded-lg hover:bg-gray-100">
                <span className="text-4xl font-bold text-orange-500">SHOP</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
            {Object.entries(menuItems).map(([title, { link, items }]) => (
              <div key={title} className="relative group z-10">
                <Link href={link} className="py-2 hover:text-orange-500 transition-colors">
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

          {/* Cart Icon */}
          <div className="flex flex-1 justify-end items-center gap-1 lg:gap-3 relative">
            <Link href="/shop/cart" className="p-2 hover:text-orange-500 relative">
              <ShoppingCart size={30} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-orange-600 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            {isLoggedIn ? (
              <div className='flex flex-col justify-center items-center cursor-pointer hover:text-orange-500' onClick={() => dispatch(logout())}>
                <CircleUserRound size={18} className="" />
                <span>LOGOUT</span>
              </div>
            ) : (
              <p className="btn cursor-pointer" onClick={() => dispatch(login())}>LOGIN</p>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ShopNavbar