import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import CastleList from './pages/CastleList'
import CastleDetail from './pages/CastleDetail'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/castles" element={<CastleList />} />
          <Route path="/castles/:id" element={<CastleDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App