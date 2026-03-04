'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, Phone, Mail, Clock } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Our Team', href: '/team' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)

  useEffect(() => {
    const banner = document.querySelector('[class*="bg-amber-500"]')
    if (banner) {
      setBannerHeight(banner.getBoundingClientRect().height)
      const observer = new MutationObserver(() => {
        if (!document.querySelector('[class*="bg-amber-500"]')) setBannerHeight(0)
      })
      observer.observe(document.body, { childList: true, subtree: true })
      return () => { observer.disconnect() }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) {
        return item.name
      }
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header className="sticky z-50" style={{ top: bannerHeight }}>
      {/* Top utility bar */}
      <div className="bg-slate-800 text-slate-300 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="hidden sm:flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              (555) 234-5678
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3" />
              info@greenfieldcpa.com
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:ml-auto">
            <Clock className="w-3 h-3" />
            Mon-Fri 8:30 AM - 5:30 PM
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={clsx(
        'bg-white border-b border-slate-200 transition-shadow duration-200',
        isScrolled && 'shadow-md'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
              <div className="flex-shrink-0 w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G&A</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-base font-bold text-slate-900 leading-tight block">
                  Greenfield & Associates
                </span>
                <span className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase">
                  Certified Public Accountants
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'px-4 py-2 text-sm font-medium transition-colors relative',
                    activeTab === item.name
                      ? 'text-slate-900 border-b-2 border-emerald-500'
                      : 'text-slate-600 hover:text-slate-900'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className={clsx(
                  'hidden sm:inline-flex items-center bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-500 transition-colors duration-200 font-semibold text-sm',
                  pathname === '/contact' && 'ring-2 ring-emerald-300'
                )}
              >
                Contact Us
              </Link>

              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 py-4">
              <nav className="flex flex-col space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      'px-4 py-3 text-sm font-medium transition-colors',
                      activeTab === item.name
                        ? 'text-slate-900 bg-emerald-50 border-l-2 border-emerald-500'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mx-4 mt-2 text-center bg-emerald-600 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-500 transition-colors duration-200 font-semibold text-sm"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
