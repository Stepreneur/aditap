  import Image from 'next/image'
  import Link from 'next/link'
  import { useState, useEffect } from 'react'

   
      export default function UserCard() {
        const [isMenuOpen, setIsMenuOpen] = useState(false)
      const [scrolled, setScrolled] = useState(false)
  
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }, [])

  return <div>

    <nav style={{ backgroundColor: '#F5F3EB' }} className={` fixed w-full z-50 transition-all duration-300 ${
              scrolled ? ' backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 rounded-lg items-center justify-center relative bg-transparent">
                      <Link href='/'>
                        <Image alt='logo' fill src="/img/bung_logo_black.png" className ="rounded-full absolute bg-transparent" />
                      </Link>
                    </div>
                    <Link href='/' className="text-base font-bold  bg-clip-text text-black">
                      ไร่หญ้าอาบังการ์เด้น 
                    </Link>
                  </div>
    
                  {/* Desktop Menu */}
                  <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" target="_blank" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                      หน้าแรก
                    </Link>
                    <Link href="/service#services" target="_blank" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                      บริการ
                    </Link>
                    <Link href="/service#products" target="_blank" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                      สินค้า
                    </Link>
                    <Link href="/portfolio" target="_blank" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                      ผลงาน
                    </Link>
                  </div>
    
                  {/* Mobile Menu Button */}
                  <button 
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <div className={`w-6 h-6 flex flex-col justify-center items-center ${isMenuOpen ? 'gap-0' : 'gap-1'}`}>
                      <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0' : ''}`}></span>
                      <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                      <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                    </div>
                  </button>
                </div>
    
                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${
                  isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-2">
                    <Link href="/" className="block px-4 py-2 text-gray-800 hover:text-green-600">หน้าแรก</Link>
                    <Link href="/service#services" className="block px-4 py-2 text-gray-800 hover:text-green-600">บริการ</Link>
                    <Link href="/product#products" className="block px-4 py-2 text-gray-800 hover:text-green-600">สินค้า</Link>
                    <Link href="/portfolio" className="block px-4 py-2 text-gray-800 hover:text-green-600">ผลงาน</Link>
                  </div>
                </div>
              </div>
            </nav>
    
  </div>
}
