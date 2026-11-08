export default function StatCards({ fires }) {
  const total = fires.length
  const high = fires.filter((f) => f.confidence === 'high').length
  const modis = fires.filter((f) => f.satellite === 'MODIS').length
  const viirs = total - modis
  const maxFrp = total ? Math.max(...fires.map((f) => f.frp)) : 0
  const stats = [
    { label: 'Fire detections', value: total },
    { label: 'High confidence', value: high },
    { label: 'MODIS / VIIRS', value: `${modis} / ${viirs}` },
    { label: 'Strongest fire (MW)', value: maxFrp },
  ]
  return (
    <section className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </section>
  )
}
