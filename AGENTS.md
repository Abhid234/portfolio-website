# AGENTS.md

React 19 + Vite 8 portfolio SPA. Plain JavaScript (`.jsx`), no TypeScript, no test framework.

## Commands
- `npm run dev` — Vite dev server (HMR)
- `npm run build` — production build
- `npm run lint` — oxlint (not ESLint)
- `npm run preview` — preview the built output

There are no tests and no typecheck. Verify changes with `npm run lint` and a dev-server smoke test.

## Code style (enforced by Prettier, set as default formatter)
- 4-space indentation, no semicolons, single quotes (`trailingComma: es5`) — matches `.prettierrc`.
- JSX element props span multiple lines when long (see existing pages). Mimic surrounding code rather than reformatting.

## Toolchain notes
- Tailwind CSS v4 via `@tailwindcss/vite` — there is **no `tailwind.config` file**. Theme tokens, custom utilities (e.g. `grid-background`), and keyframes live as CSS in `src/index.css`. Use `@utility` there for new custom utilities.
- Path alias `@/` → `src/` (configured in both `vite.config.js` and `jsconfig.json`).
- Routing uses `react-router` v8 — import `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink` from `react-router` (the `react-router-dom` package is not installed). `BrowserRouter` wraps `<App />` in `src/main.jsx`.
- shadcn (`components.json`) is JS-mode (`tsx: false`), uses the phosphor icon library and the `@react-bits` registry; generated files land in `src/components/`. `src/lib/utils` and `src/components/ui` don't exist yet — the shadcn CLI will create them.

## Project structure & conventions
- Routes live in `src/App.jsx` (`/`, `/about`, `/projects`, `/contact`); each page is a **named export** in `src/Pages/*.jsx` (e.g. `export function HomePage`). `App.jsx` is a default export.
- Reusable components in `src/components/`: `Header.jsx` (named export), `StarBorder.jsx` / `RotatingText.jsx` (default exports). Match the existing export style of the file you touch.
- Every page sets its own document title inline in JSX via a `<title>` element (see `HomePage.jsx`); new pages should follow suit.
- Visual conventions: dark background `#0A0A0F`, cyan-400 accent (`#22d3ee`), JetBrains Mono font, arbitrary Tailwind values like `bg-[#16161d]` and `max-w-125`.
- Icons come from three libraries, used in the same files: `lucide-react` (line icons), `react-icons/fa6` and `react-icons/si` (brand icons), `@phosphor-icons/react` (available but unused so far).
