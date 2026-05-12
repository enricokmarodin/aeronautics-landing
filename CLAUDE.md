# CLAUDE.md — Aeronautics Landing Page

This file tells Claude Code how to work on this project.

## What this project is

A **static landing page** (HTML + CSS + JS, no framework, no build step) for the Minecraft Create Mod addon *Aeronautics* by aEnderW. It is NOT the mod itself.

## Git workflow

Every set of changes must be committed and pushed to GitHub before reporting done:

```powershell
cd "c:\Users\User\ClaudeCurso\aeronautics"
git add index.html style.css main.js  # (plus any new files)
git commit -m "vX.Y: description"
git push
```

Use `& "C:\Program Files\GitHub CLI\gh.exe"` if `gh` is not on PATH.
Git identity: user.email = enrico.kmarodin@gmail.com, user.name = enricokmarodin (already set locally).

## Correct mod facts — do not invent or contradict these

| Fact | Value |
|---|---|
| Mod name | Aeronautics |
| Mod author | aEnderW |
| Minecraft version | 1.21.1 |
| Mod loader | NeoForge **only** (no Fabric, no Forge) |
| Create dependency | 6.0.10 |
| Combat weapon | Mounted potato cannon (NOT cannons, NOT ballistas) |
| Navigation | Navigation Table for routes/waypoints |
| Atmosphere mechanic | Air pressure decreases with altitude (NO wind currents) |
| Factions | No "sky pirates" or similar factions exist in the mod |

## Design rules

**Aesthetic:** Blocky steampunk — Minecraft pixel art meets Victorian brass-and-steam machinery.

- `border-radius: 0` everywhere — square corners only
- All interactive elements use a 4px offset `box-shadow` that shrinks to 2px on hover/active (pixel press effect)
- `fill-rule="evenodd"` on all SVG gear paths so holes render correctly
- SVG gear teeth are `<rect>` elements rotated around the gear center (blocky look)
- VT323 pixel font for: stat numbers, badges, dates, step numerals, the author credit
- Cinzel Decorative for hero title and section headings
- Grid overlay (`repeating-linear-gradient`) at 32px pitch on hero and features backgrounds
- Color palette: `--bg: #100803`, `--amber: #E8A020`, `--copper: #B87333`, `--brass: #C8A96E`

## File structure

```
index.html   — all HTML, inline SVG defs at bottom of body
style.css    — all styles (no preprocessor)
main.js      — steam canvas, scroll reveal, stat counters, parallax
README.md    — human-readable project docs
CLAUDE.md    — this file
```

## What NOT to do

- Do not add a build system, bundler, or framework
- Do not add external JS libraries (no jQuery, no GSAP, etc.)
- Do not round any corners (`border-radius` stays 0 everywhere)
- Do not invent mod features not listed in the "Correct mod facts" table above
- Do not create new files unless explicitly asked
