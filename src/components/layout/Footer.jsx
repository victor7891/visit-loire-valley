import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 text-xl font-bold mb-4">
              <MapPin className="w-8 h-8 text-blue-400" />
              <span>Loire Valley</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover the magnificent châteaux of the Loire Valley with skip-the-line tickets and expert guides.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/castles" className="hover:text-white transition-colors">
                  All Castles
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Castles */}
          <div>
            <h3 className="font-semibold mb-4">Popular Castles</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/castles/chambord" className="hover:text-white transition-colors">
                  Château de Chambord
                </Link>
              </li>
              <li>
                <Link to="/castles/chenonceau" className="hover:text-white transition-colors">
                  Château de Chenonceau
                </Link>
              </li>
              <li>
                <Link to="/castles/amboise" className="hover:text-white transition-colors">
                  Château d'Amboise
                </Link>
              </li>
              <li>
                <Link to="/castles/villandry" className="hover:text-white transition-colors">
                  Château de Villandry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@visitloirecastles.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <a 
                  href="https://www.tiqets.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Powered by Tiqets
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Visit Loire Castles. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}