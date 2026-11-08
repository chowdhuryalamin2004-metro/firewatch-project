# FIREWATCH Frontend (Part 1: Dashboard, Map, Filters)

## Run
```
npm install
npm run dev
```
Open http://localhost:5173

## Structure
- `src/pages/Dashboard.jsx` main page, holds filter state
- `src/components/` Sidebar, Filters, StatCards, FireMap
- `src/data/sampleFires.js` sample data (replace with API)
- `src/pages/Placeholder.jsx` slots for Frontend Developer 2 (Analytics, MODIS vs VIIRS, History)

## For Frontend Developer 2
Add your component in `src/pages/` and swap the matching `<Placeholder />` route in `src/App.jsx`.
Reuse the same fire object shape (see API_REQUIREMENTS.md).

## Connect the backend
In `Dashboard.jsx`, replace the `FIRES` import with a `fetch` to `/api/fires` and pass filters as query params.
