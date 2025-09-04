import { Link } from 'react-router-dom'
import { MapPin, Clock } from 'lucide-react'

export default function CastleCard({ castle }) {
  return (
    <Link 
      to={`/castles/${castle.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={castle.heroImage} 
          alt={castle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium">
          {castle.region}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {castle.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {castle.shortDescription}
        </p>
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
      </div>
    </Link>
  )
}