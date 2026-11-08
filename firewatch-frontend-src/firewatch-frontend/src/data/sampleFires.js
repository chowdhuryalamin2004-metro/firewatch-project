// Sample data. Backend will replace this with GET /api/fires (see API_REQUIREMENTS.md)
export const REGIONS = {
  all: { label: 'Worldwide', center: [20, 10], zoom: 2 },
  asia: { label: 'South & Southeast Asia', center: [18, 95], zoom: 4 },
  africa: { label: 'Africa', center: [2, 20], zoom: 3 },
  americas: { label: 'Americas', center: [5, -75], zoom: 3 },
  europe: { label: 'Europe', center: [46, 14], zoom: 4 },
  australia: { label: 'Australia', center: [-27, 134], zoom: 4 },
}

const seeds = [
  ['asia', 22.5, 92.1], ['asia', 21.0, 96.5], ['asia', 16.3, 100.2], ['asia', 24.8, 91.9], ['asia', 12.1, 105.0],
  ['asia', 19.4, 83.2], ['asia', 26.1, 94.0], ['asia', 15.0, 101.7],
  ['africa', 8.2, 20.4], ['africa', -4.5, 25.1], ['africa', 11.9, 8.6], ['africa', -12.3, 28.0], ['africa', 5.4, 31.7],
  ['africa', -8.8, 34.9], ['africa', 13.5, 2.1],
  ['americas', -10.2, -55.4], ['americas', -15.6, -60.1], ['americas', 38.9, -121.3], ['americas', 34.1, -118.5],
  ['americas', 19.4, -99.1], ['americas', -3.2, -62.7], ['americas', 48.5, -120.4],
  ['europe', 39.5, -8.1], ['europe', 40.2, 22.3], ['europe', 38.0, 23.7], ['europe', 41.9, 12.5],
  ['australia', -33.8, 150.9], ['australia', -23.7, 133.9], ['australia', -17.9, 122.2], ['australia', -37.8, 144.9],
]

export const FIRES = seeds.map(([region, lat, lng], i) => {
  const day = (i * 3) % 30
  const d = new Date(Date.UTC(2026, 9, 1 + day))
  return {
    id: i + 1,
    region,
    lat,
    lng,
    satellite: i % 2 === 0 ? 'MODIS' : 'VIIRS',
    confidence: ['low', 'nominal', 'high'][i % 3],
    frp: Math.round((8 + ((i * 37) % 120)) * 10) / 10, // fire radiative power, MW
    date: d.toISOString().slice(0, 10),
  }
})
