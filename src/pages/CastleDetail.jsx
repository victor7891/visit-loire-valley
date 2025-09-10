import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { MapPin, Clock, ExternalLink } from 'lucide-react'
import castlesData from '../data/castles.json'
import TiqetsCalendarWidget from '../components/ui/TiqetsCalendarWidget'
import Gallery from '../components/ui/Gallery'

export default function CastleDetail() {
  const { id } = useParams()
  const castle = castlesData.castles.find(c => c.id === id)

  // Scroll to top when component mounts or when castle ID changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!castle) {
    return <div>Castle not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96">
        <img 
          src={castle.heroImage} 
          alt={castle.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{castle.name}</h1>
          <div className="flex items-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {castle.location}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {castle.visitDuration}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-3xl font-bold mb-4">About {castle.name}</h2>

              {castle.fullDescription ? castle.fullDescription.map((description, index) => (
                <p key={index} className="text-gray-600 text-lg mb-6">{description}</p>
              )) : (
                <p className="text-gray-600 text-lg mb-6">{castle.shortDescription}</p>
              )}
        
              <h3 className="text-2xl font-bold mb-4">Highlights</h3>
              <ul className="space-y-2">
                {castle.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Section */}
            {castle.gallery && castle.gallery.length > 0 && (
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-6">Photo Gallery</h3>
                <Gallery 
                  images={castle.gallery} 
                  alt={castle.name}
                />
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            
            {castle.calendarWidget ? (
              <TiqetsCalendarWidget 
                productId={castle.calendarWidget.productId}
                campaign={castle.calendarWidget.campaign}
                castleName={castle.name}
              />
            ) : (
              // Fallback to manual ticket links
              <div className="bg-white rounded-xl p-6 shadow-lg sticky top-8">
                <h3 className="text-2xl font-bold mb-6">Book Your Visit</h3>
                <div className="space-y-4">
                  {castle.ticketTypes.map(ticket => (
                    <div key={ticket.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">{ticket.name}</h4>
                        <span className="text-xl font-bold text-blue-600">{ticket.price}</span>
                      </div>
                      
                      <a 
                        href={ticket.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                      >
                        Book Now
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to castles link */}
        <div className="mt-8">
          <Link 
            to="/castles"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to all castles
          </Link>
        </div>
      </div>
    </div>
  )
}