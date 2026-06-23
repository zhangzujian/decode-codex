# Workflow — React/Vite/Rollup bundle: rename + polish to recover JSX

A single React/Vite/Rollup component chunk is just the **default single-file flow** — there's no separate recipe. The `--fast` polish already runs jsx-runtime recovery, so `jsxRuntime.jsx("svg", …)` and `jsxs`/`Fragment` calls come back as JSX automatically.

→ Use [small-minified.md](small-minified.md) for the default readable restore.

Typed `.tsx` output — `Props` interfaces, `forwardRef`, `as const` lookup tables — is **deep mode only**, via [Stage 3](../stages/stage-3-finalize.md).
