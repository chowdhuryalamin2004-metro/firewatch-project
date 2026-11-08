import { NavLink } from 'react-router-dom'
import { Flame, Map, BarChart3, GitCompare, CalendarDays } from 'lucide-react'

const links = [
  { to: '/', label: 'Fire map', icon: Map },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/comparison', label: 'MODIS vs VIIRS', icon: GitCompare },
  { to: '/history', label: 'History', icon: CalendarDays },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <Flame size={26} />
        <div>
          <strong>FIREWATCH</strong>
          <span>RiskLabs wildfire intelligence</span>
        </div>
      </div>
      <nav>
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
      <p className="note">Data source: NASA FIRMS (sample data for now)</p>
    </aside>
  )
}
