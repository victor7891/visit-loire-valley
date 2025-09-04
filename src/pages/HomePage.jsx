import { Link } from 'react-router-dom'
import { Star, MapPin, Clock } from 'lucide-react'
import SEOHead from '../components/ui/SEOHead'
import HeroBanner from '../components/ui/HeroBanner'
import CastleCard from '../components/castle/CastleCard'
import castlesData from '../data/castles.json'

export default function HomePage() {
  return (
    <>
      <SEOHead 
        title="Loire Valley Castles - Skip-the-line tickets to French châteaux"
        description="Discover magnificent French châteaux in Loire Valley. Book skip-the-line tickets for Chambord, Chenonceau, Amboise, Villandry & Blois. UNESCO World Heritage sites."
        url="https://loirevalleycastles.com"
      />
      
      <div className="min-h-screen">
        {/* Hero Banner */}
        <HeroBanner 
          title="Discover the Loire Valley Castles"
          buttonText="Discover"
          buttonLink="/castles"
        />

        {/* Featured Castles */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Châteaux</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start with these magnificent castles that showcase the best of Loire Valley architecture and history
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {castlesData.castles.map(castle => (
              <CastleCard key={castle.id} castle={castle} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/castles"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Castles
            </Link>
          </div>
        </section>

        {/* Why Visit Section */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Loire Valley?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">UNESCO Heritage</h3>
                <p className="text-gray-600">World Heritage sites with over 1000 years of French history and architecture</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Perfect Location</h3>
                <p className="text-gray-600">Just 1-2 hours from Paris, easily accessible by train or car</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Skip the Lines</h3>
                <p className="text-gray-600">Pre-book your tickets and spend more time exploring, less time waiting</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}