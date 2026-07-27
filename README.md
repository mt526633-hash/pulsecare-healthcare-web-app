# PulseCare Urgent Care

PulseCare is a desktop healthcare website concept that organizes services, locations, billing guidance, patient resources, reviews, and visit registration into one consistent React interface.

> Portfolio concept: PulseCare is fictional. It does not provide medical services or advice, and its forms must not be used for real patient information.

## Project overview

**Goal:** Make common urgent-care decisions easy to find without overwhelming the visitor.

**My role:** Interface design, React implementation, interaction states, accessibility details, and repository documentation.

**Outcome:** A multi-view front-end demonstration with reusable content sections, clinic discovery, and a simulated registration journey.

## Screenshots

| Homepage | Clinic locations |
| --- | --- |
| ![PulseCare desktop homepage](docs/screenshots/overview-desktop.png) | ![PulseCare desktop clinic locations](docs/screenshots/locations-desktop.png) |

## Key functionality

- Home, locations, billing, records, events, reviews, and provider-information views
- Searchable clinic-location experience
- Simulated visit-registration form with confirmation state
- Reusable navigation, service, trust, testimonial, and form components
- Desktop layouts for information-rich healthcare journeys
- Semantic form controls with descriptive labeling and clearly communicated validation and confirmation states

## Architecture and decisions

- `App.jsx` owns the current view and registration-dialog state.
- Page components separate each information journey while shared components keep navigation and calls to action consistent.
- The registration flow is deliberately simulated; no personal information is transmitted or stored.
- The desktop layout keeps navigation, clinic discovery, and calls to action visible without crowding the page.

## Technology

- React 19
- Vite
- JavaScript
- CSS
- Lucide React icons
- Oxlint and Node test runner

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm test
npm run build
```

GitHub Actions runs the same checks for every pushed branch and pull request.

## Assets and reuse

See [ASSETS.md](ASSETS.md) for asset notes and [LICENSE](LICENSE) for reuse terms.
