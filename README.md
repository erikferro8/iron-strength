# Iron Strength (Everfit-style demo)

This is a mobile-first demo of a trainer/client workout experience:
- Client calendar list: guided vs optional
- Workout details + set logging
- Trainer view: assigned programs + see logs
- All data stored in browser localStorage (demo only)

## Run locally
1) Install Node.js 18+
2) `npm install`
3) `npm run dev`

## Deploy (no code editing)
This project is configured for static export (`next.config.mjs` => output: 'export').

### Netlify Drop
1) Run: `npm install`
2) Run: `npm run export`
3) Drag the generated `out` folder into Netlify Drop

### Vercel (static)
You can import the project and set the output directory to `out` after running the export build.
