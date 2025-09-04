import { Link } from 'react-router-dom'
import castlesData from '../data/castles.json'

export default function CastleList() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Loire Valley Castles</h1>
        
        <div className="space-y-6">
          {castlesData.castles.map(castle => (
            <div key={castle.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={castle.heroImage} 
                    alt={castle.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{castle.name}</h2>
                  <p className="text-gray-600 mb-4">{castle.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{castle.location}</span>
                    <Link 
                      to={`/castles/${castle.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}