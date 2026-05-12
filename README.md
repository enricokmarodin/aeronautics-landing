# Aeronautics — Landing Page

Static landing page for **Aeronautics**, a [Create Mod](https://www.curseforge.com/minecraft/mc-mods/create) addon for Minecraft that adds fully functional steampunk airships and flying contraptions.

> **Mod author:** aEnderW
> **Mod requirements:** Minecraft 1.21.1 · NeoForge · Create 6.0.10

---

## Files

```
aeronautics/
├── index.html   # Full page structure and SVG assets
├── style.css    # Blocky steampunk styles
├── main.js      # Steam particle canvas, scroll reveal, stat counters
├── README.md
└── CLAUDE.md
```

No build step, no dependencies, no frameworks. Open `index.html` directly in a browser or serve with any static file server.

```bash
# Quick local server (Python)
python -m http.server 8080

# Or with Node
npx serve .
```

---

## Design

**Aesthetic:** Blocky steampunk — Minecraft's pixel art sensibility combined with Victorian brass-and-steam machinery.

- Color palette: dark browns, amber, copper, brass on near-black backgrounds
- Grid overlay on all section backgrounds (32px block grid)
- Zero border-radius everywhere; 4px offset box-shadows for the "pixel press" effect
- VT323 pixel font for stat counters, badges, changelog dates
- Cinzel Decorative for display headings; Cinzel for labels; IM Fell English for body flavor text

**Interactive elements:**
- Steam particle canvas (fixed, full-viewport, canvas 2D)
- Animated CSS airship (float keyframe, spinning propeller, smoke puffs, glowing portholes)
- Rotating gear decorations with parallax on scroll
- Scroll-reveal for cards (IntersectionObserver)
- Animated stat counters (IntersectionObserver + requestAnimationFrame)
- Active nav link highlighting on scroll

---

## Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#hero` | Title, author credit, airship illustration, badges |
| Stats | — | Downloads, blocks, airship types |
| Features | `#features` | 6 feature cards |
| Showcase | `#showcase` | Community build gallery |
| How It Works | `#how` | 3-step process |
| Captain's Log | `#changelog` | Version changelog |
| Download | `#download` | CurseForge, Modrinth, GitHub links |

---

## Updating content

**Mod version / requirements** — edit the badges in the hero section and the `<p class="req-note">` in the download section of `index.html`.

**Feature cards** — each `.feature-card` div in `#features`. Keep descriptions accurate to what the mod actually contains.

**Changelog** — add a new `.log-entry` div at the top of `.log-entries` in `#changelog`.

**Download links** — update `href="#"` placeholders on the `.dl-card` anchors once live URLs are known.

---

## Known correct mod facts

- Platform: **NeoForge only** (no Fabric, no Forge)
- Minecraft version: **1.21.1**
- Create dependency: **6.0.10**
- Combat: **mounted potato cannon** (not cannons/ballistas)
- Navigation: uses the **Navigation Table** for route/waypoint programming
- Atmosphere: **air pressure decreases with altitude** (there are no wind currents)
- No "sky pirates" faction exists in the mod

---

## GitHub

Repository: [github.com/enricokmarodin/aeronautics-landing](https://github.com/enricokmarodin/aeronautics-landing)

Each version is committed and pushed via Claude Code. Commit messages follow the pattern `vX.Y: short description`.
