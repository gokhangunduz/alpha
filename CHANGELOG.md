# Changelog

All notable changes to the Alpha theme are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-06-03

### Added

- New **alpha light** variant — UI matches GitHub Light Default v6.3.5 byte-for-byte. Syntax palette uses the same seven hues as the dark variant, retuned per-hue (saturation 100%, lightness lowered) so every token meets WCAG-AA contrast (≥4.5:1) on white while preserving equal perceived weight across colors.

### Changed

- Dark variant renamed from `alpha` to **alpha dark** in the theme picker.
- UI colors of the dark variant now match GitHub Dark Default v6.3.5 byte-for-byte (editor, sidebar, status bar, terminal ANSI, git decorations, tabs, panels, debug, peek view, etc.).
- README rewritten with palette table, install instructions, and marketplace badges.
- `package.json` metadata expanded: `keywords`, `galleryBanner`, `homepage`, `bugs`; `engines.vscode` lowered to `^1.74.0` for broader compatibility.

### Unchanged

- Syntax (token) colors and semantic token colors are preserved exactly — the isoluminant HSL(*, 100%, 68%) palette is untouched and applied to both variants.

## [0.0.4] - 2023-07-22

### Added

- Theme screenshots.

### Changed

- Updated README.

## [0.0.3] - 2023-07-21

### Changed

- Updated README.
- Updated folder structure.

## [0.0.2] - 2023-07-21

### Added

- Theme icon.

## [0.0.1] - 2023-07-21

### Added

- Initial release.
