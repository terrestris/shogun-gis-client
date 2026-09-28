---
applyTo: "**/*.spec.ts,**/e2e-tests/**"
---

---

## Playwright E2E conventions for this project

This project runs Playwright end-to-end tests against a shared **test server** (not localhost).
Tests cover web mapping applications (OpenLayers / Masterportal / ...), which have specific rendering non-determinism you must account for.

### Running tests

- Use `playwright-cli` (skills installed) for running, debugging, and inspecting tests where
  available, over raw ad-hoc scripts.
- **Always run headed (`--headed`)** unless explicitly told otherwise for this session. Never
  silently switch to headless to save time — ask first if headed is impractical for a step.
- Before changing a failing test, capture a trace and a snapshot/screenshot of the current page
  state and compare it against what the test expects. Don't guess from the stack trace alone.

### Fixing failing tests

- First classify *why* a test fails:
  1. The app intentionally changed (selector, copy, flow, DOM) → update the test.
  2. A real regression → do **not** patch the assertion to hide it. Leave it failing, mark it
     `test.fixme()` with a comment explaining the suspected regression, and call it out
     explicitly in your summary.
  3. Flaky/timing-related, not an app change → fix per the stabilization rules below, don't just
     silence it.
- Never delete an assertion, loosen a comparison threshold, or add `.skip()` purely to make the
  suite green. If you can't resolve something, say so.

### Locators

- Prefer, in order: `getByRole`, `getByTestId`, `getByLabel`, then CSS only if none of those are
  available.
- Don't use nth-child/absolute-position selectors or brittle XPath.
- Extract repeated selectors into Page Object classes/fixtures rather than duplicating them.

### Waiting & timing

- No `waitForTimeout` or manual sleeps. Use auto-waiting assertions (`toBeVisible`, `toHaveText`,
  `toHaveCount`, etc.) or `waitForResponse`/`waitForLoadState` tied to a real event.
- For map-based pages (OpenLayers/Masterportal): wait for a concrete render-complete signal (a
  `moveend`/`load` event, tile-loaded marker, stable DOM attribute) before clicking the map
  canvas or taking a screenshot — never a fixed delay.

### Screenshots & visual comparisons

- Pin `deviceScaleFactor` and `viewport` explicitly in config — don't rely on machine defaults.
- Disable animations (`prefersReducedMotion: 'reduce'` or an animation-disabling init script) on
  any test that screenshots the map.
- If a baseline is outdated, regenerate it deliberately and say so — don't quietly raise
  `maxDiffPixelRatio`/threshold as a first fix. If you do tune a threshold, comment why.

### Test isolation & CI

- Every test must be runnable alone and in parallel — no reliance on execution order or shared
  state between tests.
- Seed/reset test-server state explicitly and idempotently in setup (API call or fixture), not by
  assuming leftover state from a previous run.
- A small `retries` count in CI is fine as a safety net, but a test that only passes on retry is
  still buggy — flag it, don't rely on retries to hide it.
- On failure, capture trace/screenshot/video (`retain-on-failure` / `only-on-failure`) — don't
  capture these on every green run.

### Reporting back

Whenever you fix, stabilize, or add tests, summarize: what changed and why, which category
(intentional app change / regression / flakiness) each fix falls into, and anything you left
failing or unresolved. Flag suspected real regressions separately and clearly — don't bury them
in a list of routine fixes.

### File structure

- Any file you create as part of test work — screenshots, screenshot baselines, traces, videos,
  generated fixtures/data, temporary output, new spec files — must be placed **inside the
  existing e2e-tests folder structure**, next to the tests it belongs to. Do not create
  new top-level folders, and do not write output to the repo root or outside the e2e-tests
  directory.
- Match the existing subfolder conventions already used in that folder (e.g. if screenshots
  already live under a `screenshots/` or `__screenshots__/` subfolder next to the specs, put new
  ones there too — don't invent a new location).
- If you're unsure where a generated file belongs, ask before creating it, rather than guessing a
  new path.
  