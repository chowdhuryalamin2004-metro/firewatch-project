import { useMemo, useState } from 'react'
import Filters from '../components/Filters.jsx'
import StatCards from '../components/StatCards.jsx'
import FireMap from '../components/FireMap.jsx'
import { FIRES } from '../data/sampleFires.js'

const DEFAULTS = { satellite: 'all', region: 'all', from: '2026-10-01', to: '2026-10-31' }

export default function Dashboard() {
  const [filters, setFilters] = useState(DEFAULTS)

  const visible = useMemo(
    () =>
      FIRES.filter(
        (f) =>
          (filters.satellite === 'all' || f.satellite === filters.satellite) &&
          (filters.region === 'all' || f.region === filters.region) &&
          (!filters.from || f.date >= filters.from) &&
          (!filters.to || f.date <= filters.to)
      ),
    [filters]
  )

  return (
    <>
      <header className="page-head">
        <h1>Active fires</h1>
        <p>Satellite fire detections from MODIS and VIIRS.</p>
      </header>
      <Filters filters={filters} onChange={setFilters} onReset={() => setFilters(DEFAULTS)} />
      <StatCards fires={visible} />
      {visible.length === 0 && <p className="empty-note">No fires match these filters. Widen the date range or choose another region.</p>}
      <FireMap fires={visible} region={filters.region} />
    </>
  )
}
