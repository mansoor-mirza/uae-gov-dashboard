# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies (required before first run)
npm run dev        # start dev server at http://localhost:5173
npm run build      # type-check then bundle for production (tsc && vite build)
npm run preview    # serve the production build locally
```

No test runner is configured yet.

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS v3. No router, no state library — all state is local React hooks.

**Layout pattern (`src/App.tsx`):**
- `TopNav` is `position: fixed` at the top (h-16).
- `Sidebar` is `position: fixed` on the right edge (RTL), top-16 to bottom-0, width 64 (w-64).
- `<main>` is offset with `pt-16 md:pr-64` to avoid overlap.
- Mobile: sidebar slides in as an overlay; toggled via `sidebarOpen` state in `App`.

**RTL:** The entire app is Arabic right-to-left. `index.html` sets `<html lang="ar" dir="rtl">` and `body` in `src/index.css` sets `direction: rtl`. All new components must be RTL-compatible — use `text-right`, `pr-*`/`pl-*` correctly, and test that flex/grid rows flow right-to-left.

**Design tokens (`tailwind.config.js`):** All colours, radii, and shadows come from the UAE Design System Figma community file. Never use raw hex values in components — always use the named tokens:

| Token | Value | Use |
|---|---|---|
| `uae-gold` | `#c78b29` | primary accent, active states, CTA buttons |
| `uae-dark` | `#232528` | TopNav background, secondary buttons |
| `uae-card` / `uae-border` | `#fcfcfc` / `#d7bc6d` | card backgrounds and borders |
| `uae-title` | `#361e12` | card headings |
| `uae-link` | `#92722a` | inline links |
| `uae-sidebar` | `#1a1c1f` | sidebar background |

Status colour pairs always come together: `uae-success`/`uae-success-bg`, `uae-warning`/`uae-warning-bg`, `uae-error`/`uae-error-bg`, `uae-info`/`uae-info-bg`.

**Typography:** Three font families are loaded via Google Fonts in `index.html`:
- `font-arabic` (`Noto Kufi Arabic`) — all Arabic UI text and headings
- `font-display` (`Inter`) — numeric values, stat card numbers
- `font-body` (`Roboto`) — English labels where needed

**Component conventions:**
- Inline SVG icons are defined as small local functions at the top of each file — do not install an icon package.
- The `accent` boolean prop on `StatCard` switches it to a solid gold background variant.
- Status badges use the `statusConfig` lookup pattern (object keyed by status string → `{ label, className }`) — follow this pattern when adding new status types.
- `ServiceCard` and `StatCard` accept all data as props; data lives in the page (`src/pages/Dashboard.tsx`), not in the components.

**Commit style:** `type: description` — types used are `chore`, `design`, `feat`, `fix`. Keep the body factual (what changed and why), no bullet padding.
