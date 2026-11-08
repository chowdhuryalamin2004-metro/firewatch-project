import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Placeholder from './pages/Placeholder.jsx'

export default function App() {
  return (
    <div className="shell">
      <Sidebar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Placeholder title="Analytics" owner="Frontend Developer 2" />} />
          <Route path="/comparison" element={<Placeholder title="MODIS vs VIIRS" owner="Frontend Developer 2" />} />
          <Route path="/history" element={<Placeholder title="Historical Calendar" owner="Frontend Developer 2" />} />
        </Routes>
      </main>
    </div>
  )
}
