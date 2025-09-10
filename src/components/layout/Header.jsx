import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, MapPin } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            <img 
              src="/logo-visit-loire-castles-02.svg" 
              alt="Visit Loire Castles" 
              className="h-[50px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/castles" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              All Castles
            </Link>
          
            
            <Link 
              to="/castles" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                onClick={toggleMenu}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/castles"
                onClick={toggleMenu}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md font-medium transition-colors"
              >
                All Castles
              </Link>
              <a
                href="#about"
                onClick={toggleMenu}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md font-medium transition-colors"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Link
                  to="/castles"
                  onClick={toggleMenu}
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}