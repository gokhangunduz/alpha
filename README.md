<div align="center">
  <img src="./assets/alpha.png" alt="" width="96" height="96" />

  <h1>Alpha</h1>

  <p><strong>Perceptually balanced syntax palette with a restrained interface. Two variants for VS Code — <code>alpha dark</code> and <code>alpha light</code>.</strong></p>

  <p>
    <a href="https://marketplace.visualstudio.com/items?itemName=gokhangunduz.alpha"><img alt="Marketplace" src="https://img.shields.io/visual-studio-marketplace/v/gokhangunduz.alpha?label=marketplace&style=flat-square&color=862323"></a>
    <a href="./LICENSE"><img alt="License" src="https://img.shields.io/github/license/gokhangunduz/alpha?style=flat-square&color=222"></a>
  </p>

  <p>
    <a href="https://marketplace.visualstudio.com/items?itemName=gokhangunduz.alpha"><strong>Install</strong></a> ·
    <a href="https://gokhangunduz.github.io/alpha"><strong>Website</strong></a> ·
    <a href="./CHANGELOG.md"><strong>Changelog</strong></a> ·
    <a href="https://github.com/gokhangunduz/alpha/issues"><strong>Issues</strong></a>
  </p>
</div>

---

![alpha — dark variant](./assets/screenshot-1.webp)

## Why alpha

- **Two variants.** `alpha dark` and `alpha light`. Switch with your OS, or pin one.
- **Equal-weight syntax palette.** Seven hues calibrated so no token visually dominates another — the eye reads structure, not emphasis.
- **Restrained interface.** Editor, sidebar, status bar, tabs, panels, terminal — all tuned to stay out of the way.
- **WCAG-AA on light.** Light variant retuned per hue to clear ≥ 4.5:1 contrast on white.
- **Free & open source.** MIT-licensed. No telemetry, no account, no paywall.

## Install

**From VS Code**

1. Open the Extensions panel (`⌘+Shift+X` / `Ctrl+Shift+X`).
2. Search for **Alpha**.
3. Click **Install**.
4. Run **Preferences: Color Theme** (`⌘+K ⌘+T` / `Ctrl+K Ctrl+T`) and pick **alpha dark** or **alpha light**.

**From the command line**

```bash
code --install-extension gokhangunduz.alpha
```

Or grab it directly from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=gokhangunduz.alpha) or [Open VSX](https://open-vsx.org/extension/gokhangunduz/alpha).

## Match your system theme

To switch between dark and light automatically with your OS:

1. Open settings (`⌘+,` / `Ctrl+,`) and search for **Auto Detect Color Scheme**, enable it.
2. Set **Preferred Dark Color Theme** to **alpha dark**.
3. Set **Preferred Light Color Theme** to **alpha light**.

## The palette

The dark variant locks every syntax color at `HSL(h, 100%, 68%)` — only the hue rotates, so weights stay equal across all seven colors. The light variant keeps saturation at 100% but lowers lightness per hue so each one clears WCAG-AA contrast on white.

| Hue  | Used for           | Dark        | Light       |
| ---- | ------------------ | ----------- | ----------- |
| 0°   | variables, tags    | `#ff5c5c`   | `#ed0000`   |
| 20°  | constants, numbers | `#ff925c`   | `#d14600`   |
| 49°  | classes, types     | `#ffe15c`   | `#8c7300`   |
| 143° | strings            | `#5cff9a`   | `#008734`   |
| 186° | functions          | `#5cefff`   | `#008391`   |
| 221° | operators          | `#5c8fff`   | `#266bff`   |
| 284° | keywords           | `#d35cff`   | `#bd08ff`   |

## In action

![alpha — command palette](./assets/screenshot-2.webp)

## Contributing

Bug reports, palette suggestions, and pull requests are welcome.

- [Report a bug](https://github.com/gokhangunduz/alpha/issues/new?template=bug_report.yml)
- [Suggest a feature or color](https://github.com/gokhangunduz/alpha/issues/new?template=feature_request.yml)
- [Reach out](https://gokhangunduz.github.io/alpha/contact)

## License

[MIT](./LICENSE) © Gökhan Gündüz
