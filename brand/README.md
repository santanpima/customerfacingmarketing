# Temporary santan.ai brand (Q11)

Supplied 16 October 2026. **Temporary.** Replace when a finished kit exists. There is no Pima logotype yet.

**Use SVG on the site.** PNG is a raster fallback (Open Graph, email, or a host that will not serve SVG). Navy SVG filenames originally had spaces (`Navy Blue` / `Navy BLue`); they were renamed to kebab-case so URLs stay clean. Do not reintroduce spaces.

## Color tokens

Use these for **site surfaces**. Do not invent extra brand colors.

| Token | Hex | Use |
| --- | --- | --- |
| Dark Blue | `#0E2841` | Text, header/footer bars, dark sections, links on light |
| White Smoke | `#F5F5F5` | Page background, light sections |
| White | `#FFFFFF` | Text on Dark Blue (required contrast) |

The **navy mark fill in the SVG is `#0F264F`**, not Dark Blue `#0E2841`. Close, not the same. Do not recolor the artwork to match the surface token. Use the **navy** files on White Smoke; use the **white** files (`#FFFFFF`) on Dark Blue.

Type is still open. Until a family is supplied, a self-hosted grotesque sans is fine. Do not pull Google Fonts at runtime if a self-hosted file is available.

## Files (prefer `.svg`)

| File | What it is | On |
| --- | --- | --- |
| `santan-ai-icon-navy.svg` | Icon only | White Smoke |
| `santan-ai-icon-white.svg` | Icon only | Dark Blue |
| `santan-ai-wordmark-navy.svg` | `santan.ai` wordmark | White Smoke |
| `santan-ai-wordmark-white.svg` | `santan.ai` wordmark | Dark Blue |
| `santan-ai-logo-navy.svg` | Icon + wordmark lockup | White Smoke (default header/footer) |
| `santan-ai-logo-white.svg` | Icon + wordmark lockup | Dark Blue |

Matching `.png` files exist with the same stems. Implementation should `<img src="…svg">` or inline the SVG. Inline only if you keep the supplied fills; do not restyle the path to Dark Blue.

Favicon: navy icon SVG on light; PNG icon if a raster favicon is required. Dedicated OG art is still Q12; until then, rasterize the navy lockup on White Smoke (PNG is already that).

## How it sits with Pima

- These marks are **santan.ai**, company identity. The wordmark reads `santan.ai`, not Pima.
- **Pima** is typeset as the product name, not as a logo, until a Pima mark exists.
- Header: navy lockup linking `/`, with the word **Pima** nearby as the product (not a second competing logo).
- Footer: lockup + © santan.ai. No ™ or ® on Pima (L9).
- Do not stretch, outline, recolor, add drop shadows, or put the mark on a competing hue.
- Do not use the eight Beta testers or any customer mark next to this lockup.

## Not in this kit

- A Pima product mark
- Type files
- Spacing/clear-space spec beyond “do not crowd the rounded square”
