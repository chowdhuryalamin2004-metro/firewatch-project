import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet'
import { useEffect } from 'react'
import { REGIONS } from '../data/sampleFires.js'

function Recenter({ region }) {
  const map = useMap()
  useEffect(() => {
    const r = REGIONS[region]
    map.setView(r.center, r.zoom)
  }, [region, map])
  return null
}

const color = { low: '#E9B44C', nominal: '#E4572E', high: '#9E1B1B' }

export default function FireMap({ fires, region }) {
  return (
    <div className="map-wrap">
      <MapContainer center={REGIONS.all.center} zoom={REGIONS.all.zoom} scrollWheelZoom className="map">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Recenter region={region} />
        {fires.map((f) => (
          <CircleMarker key={f.id} center={[f.lat, f.lng]} radius={5 + Math.min(f.frp / 20, 8)}
            pathOptions={{ color: color[f.confidence], fillColor: color[f.confidence], fillOpacity: 0.65 }}>
            <Popup>
              <strong>{f.satellite}</strong> detection<br />
              Date: {f.date}<br />
              Confidence: {f.confidence}<br />
              Power: {f.frp} MW<br />
              {f.lat}, {f.lng}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
      <div className="legend">
        <span><i style={{ background: color.low }} />Low</span>
        <span><i style={{ background: color.nominal }} />Nominal</span>
        <span><i style={{ background: color.high }} />High confidence</span>
      </div>
    </div>
  )
}
