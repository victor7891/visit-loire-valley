import { Link } from 'react-router-dom'
import castlesData from '../data/castles.json';
import CastleCard from '../components/castle/CastleCard'


export default function CastlesList() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Loire Valley Castles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             Explore the complete collection of iconic châteaux, each with its own story, architecture, and charm.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {castlesData.castles.map(castle => (
              <CastleCard key={castle.id} castle={castle} />
            ))}
          </div>
        </section>
  )
}