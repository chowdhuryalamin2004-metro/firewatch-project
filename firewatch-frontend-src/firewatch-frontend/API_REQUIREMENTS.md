# API Requirements (from Frontend)

## GET /api/fires
Query params (all optional): `satellite` (MODIS|VIIRS), `region` (asia|africa|americas|europe|australia), `from` (YYYY-MM-DD), `to` (YYYY-MM-DD)

Response:
```json
[
  { "id": 1, "lat": 22.5, "lng": 92.1, "satellite": "MODIS",
    "confidence": "high", "frp": 45.2, "date": "2026-10-04", "region": "asia" }
]
```
- `confidence`: low | nominal | high (backend harmonizes MODIS numeric % and VIIRS l/n/h into these three)
- `frp`: fire radiative power in MW
- `date`: acquisition date, ISO format

## GET /api/stats (optional)
Totals for the same filters: total, high_confidence, modis_count, viirs_count, max_frp.

## Notes
- Enable CORS for http://localhost:5173
- Large date ranges: please paginate or cap at a sensible limit
