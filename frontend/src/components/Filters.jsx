import { REGIONS } from '../data/sampleFires.js'

export default function Filters({ filters, onChange, onReset }) {
  const set = (key) => (e) => onChange({ ...filters, [key]: e.target.value })
  return (
    <section className="filters" aria-label="Filters">
      <div className="field">
        <label>Satellite</label>
        <div className="seg">
          {['all', 'MODIS', 'VIIRS'].map((s) => (
            <button key={s} className={filters.satellite === s ? 'on' : ''}
              onClick={() => onChange({ ...filters, satellite: s })}>
              {s === 'all' ? 'Both' : s}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label htmlFor="region">Region</label>
        <select id="region" value={filters.region} onChange={set('region')}>
          {Object.entries(REGIONS).map(([k, r]) => <option key={k} value={k}>{r.label}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="from">From</label>
        <input id="from" type="date" value={filters.from} onChange={set('from')} />
      </div>
      <div className="field">
        <label htmlFor="to">To</label>
        <input id="to" type="date" value={filters.to} onChange={set('to')} />
      </div>
      <button className="reset" onClick={onReset}>Reset filters</button>
    </section>
  )
}
