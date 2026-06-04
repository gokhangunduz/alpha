# Changelog

## [1.1.7] - 2026-06-04

### Changed

- Active state indicators pulled to a more dominant red. Dark `#f76666` → `#ef4444`, light `#fd7373` → `#dc2626`. Affects `tab.activeBorderTop`, `activityBar.activeBorder`, and `panelTitle.activeBorder` — the previous shade still read as salmon/orange against the surrounding UI.
- Primary button colors moved from oxblood toward a familiar, recognizable button red. Dark `button.background` `#862323` → `#dc2626`, `button.hoverBackground` `#a02e2e` → `#ef4444`. Light `button.background` `#881f1f` → `#dc2626`, `button.hoverBackground` `#7f1a1a` → `#b91c1c` (kept darker on light per the GitHub convention that hover deepens on white).

## [1.1.6] - 2026-06-04

### Changed

- Marketplace description, README hero, website hero, and about subtitle rewritten — none lead with "A VS Code theme…" or "Minimal VS Code color theme…" anymore. New copy: "Perceptually balanced syntax palette with a restrained interface. Two variants for VS Code — alpha dark and alpha light."
- Changelog cleaned up: intro paragraphs ("All notable changes…", "The format is based on Keep a Changelog…") removed, and the 0.0.1 – 0.0.4 entries expanded to match the semantic detail of the newer ones.

## [1.1.5] - 2026-06-04

### Changed

- Active state indicators hue-shifted from orange to red, preserving saturation and lightness. Dark `#f78166` → `#f76666`, light `#fd8c73` → `#fd7373`. Affects `activityBar.activeBorder` (active sidebar icon), `tab.activeBorderTop` (active tab), and `panelTitle.activeBorder` (active panel) — all three share the same indicator color.

## [1.1.4] - 2026-06-04

### Changed

- README hero rewritten — no longer leads with "A VS Code theme with…". Matches the Marketplace description.
- README badges trimmed from five (version, installs, rating, Open VSX, license) down to two reliable, consistently styled ones (Marketplace + license). Rating, installs, and Open VSX badges were rendering as empty or inconsistent shields.

## [1.1.3] - 2026-06-04

### Changed

- Remaining UI greens hue-shifted to red, preserving saturation and lightness. Dark `#3fb950` → `#b93f3f`, `#56d364` → `#d35656`, and the residual `#2ea043`/`#238636` instances; light `#4ac26b` → `#c24a4a`, `#aceebb` → `#eeacac`, `#6fdd8b` → `#dd6f6f`, and residual `#1a7f37`/`#1f883d`. Covers selection highlight, bracket match, diff inserts, gutter added, terminal ANSI green, git "added/untracked" decorations, debug expression highlights, symbol icons, and bracket pair colorization.
- Marketplace description rewritten — no longer leads with "A VS Code theme with…". New: "Minimal VS Code color theme with two variants — alpha dark and alpha light — built around a perceptually balanced isoluminant syntax palette."

## [1.1.2] - 2026-06-04

### Changed

- Primary button colors hue-shifted from green to red, preserving saturation and lightness per variant. Dark: `button.background` `#238636` → `#862323`, `button.hoverBackground` `#2ea043` → `#a02e2e`. Light: `button.background` `#1f883d` → `#881f1f`, `button.hoverBackground` `#1a7f37` → `#7f1a1a`. Semantic greens (git "added", diff inserts, terminal ANSI, bracket pair) are untouched.

## [1.1.1] - 2026-06-04

### Reverted

- Reverted the syntax palette change shipped in v1.1.0. Constants/numbers hue is back at 20° (dark `#ff925c`, light `#d14600`). v1.1.0 changed the syntax palette under a misread intent — the orange the maintainer wanted updated was on the project website, not in the theme. Users on v1.1.0 should upgrade to restore the original palette.

## [1.1.0] - 2026-06-04

### Changed

- Constants/numbers hue shifted from 20° (orange) toward red: 10°. Dark `#ff925c` → `#ff775c`, light `#d14600` → `#d12300`. Lightness preserved per variant; numbers and constants now read as a deeper red while staying distinct from the variables/tags hue at 0°.

## [1.0.2] - 2026-06-04

### Changed

- README rewritten with a centered hero (icon, title, badges, quick links), a "Why alpha" highlights block, an "In action" gallery, and a "Match your system theme" how-to.

## [1.0.1] - 2026-06-04

### Changed

- Screenshots converted to WebP (down from oversized PNG-disguised-as-JPEG), trimming the VSIX by ~60%.

### Fixed

- Duplicate screenshot reference in the README (`screenshot-2` and `screenshot-3` were identical files).

## [1.0.0] - 2026-06-04

### Added

- New app icon: a code window mark with a `>_` prompt on a black iOS-style squircle.

### Changed

- `galleryBanner.color` updated from `#0d1117` to `#000000` to match the new icon.
- First stable release. The two-variant palette and interface are locked at 1.0.

## [0.1.0] - 2026-06-03

### Added

- `alpha light` variant with a fully retuned interface and syntax palette for white backgrounds.
- `galleryBanner`, `homepage`, and `bugs` fields in `package.json` for richer Marketplace presentation.
- Expanded `keywords` list to improve Marketplace discoverability.

### Changed

- **Dark variant interface rebuilt for a cleaner, more restrained surface.** Editor, sidebar, status bar, tabs, panels, terminal ANSI, git decorations, debug, and peek view colors are all updated.
- Dark variant renamed from `alpha` to `alpha dark` in the theme picker.
- Light variant syntax palette retuned per hue (saturation kept at 100%, lightness lowered) so every color clears WCAG-AA contrast (≥ 4.5:1) on white.
- Dark variant syntax palette is preserved exactly. The isoluminant HSL(_h_, 100%, 68%) palette is untouched.
- `package.json` `description` rewritten to highlight the theme's distinctive features.
- `engines.vscode` minimum lowered from `^1.80.0` to `^1.74.0` for broader VS Code compatibility.
- README rewritten with a palette table, two-variant install instructions, and Marketplace badges.

### Fixed

- Repository URL in `package.json` after the upstream repo was renamed from `alpha-theme` to `alpha`.

## [0.0.4] - 2023-07-22

### Added

- Screenshots of `alpha` rendered in real editor views, embedded in the README so the Marketplace listing previews the palette before install.

### Changed

- README structure polished — clearer install steps, tighter palette section, and consistent code-fence formatting.

## [0.0.3] - 2023-07-21

### Changed

- Repository folder layout reorganized — theme JSON moved under `themes/`, assets consolidated under `assets/`, metadata at the root.
- README content rewritten to match the new layout and to describe the theme's intent more directly.

## [0.0.2] - 2023-07-21

### Added

- Marketplace icon (`assets/alpha.png`) wired into `package.json`, so the extension shows a recognizable thumbnail in the Extensions sidebar and the Marketplace listing tile.

## [0.0.1] - 2023-07-21

### Added

- Initial release. Dark variant of `alpha` — a perceptually balanced syntax palette in seven hues, paired with a calm dark interface. Packaged as a VS Code color theme and published to the Marketplace.

<!-- Comparison links. Earlier versions were not tagged, so no compare links are provided for them. -->
[1.1.7]: https://github.com/gokhangunduz/alpha/compare/v1.1.6...v1.1.7
[1.1.6]: https://github.com/gokhangunduz/alpha/compare/v1.1.5...v1.1.6
[1.1.5]: https://github.com/gokhangunduz/alpha/compare/v1.1.4...v1.1.5
[1.1.4]: https://github.com/gokhangunduz/alpha/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/gokhangunduz/alpha/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/gokhangunduz/alpha/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/gokhangunduz/alpha/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/gokhangunduz/alpha/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/gokhangunduz/alpha/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/gokhangunduz/alpha/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/gokhangunduz/alpha/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/gokhangunduz/alpha/releases/tag/v0.1.0
