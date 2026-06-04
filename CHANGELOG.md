# Changelog

All notable changes to the Alpha theme are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

- Theme screenshots in the README.

### Changed

- README polish.

## [0.0.3] - 2023-07-21

### Changed

- Folder layout reorganized.
- README content updated.

## [0.0.2] - 2023-07-21

### Added

- Theme icon.

## [0.0.1] - 2023-07-21

### Added

- Initial release.

<!-- Comparison links. Earlier versions were not tagged, so no compare links are provided for them. -->
[Unreleased]: https://github.com/gokhangunduz/alpha/compare/v1.0.2...HEAD
[1.0.2]: https://github.com/gokhangunduz/alpha/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/gokhangunduz/alpha/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/gokhangunduz/alpha/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/gokhangunduz/alpha/releases/tag/v0.1.0
