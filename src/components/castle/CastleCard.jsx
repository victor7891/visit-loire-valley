import { Link, useNavigate } from 'react-router-dom'
import { MapPin, Clock, Ticket } from 'lucide-react'

export default function CastleCard({ castle }) {
  const navigate = useNavigate()

  const handleBuyTicket = (e) => {
    e.preventDefault() // Prevent the Link's navigation
    navigate(`/castles/${castle.id}`)
  }

  return (
    <Link 
      to={`/castles/${castle.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={castle.heroImage} 
          alt={castle.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium">
          {castle.region}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {castle.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
          {castle.shortDescription}
        </p>
        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {castle.location}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {castle.visitDuration}
            </div>
          </div>
          <button
            onClick={handleBuyTicket}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Ticket className="w-4 h-4" />
            Buy Ticket
          </button>
        </div>
      </div>
    </Link>
  )
}