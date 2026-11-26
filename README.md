# One-Line Roast: The Gadget You Use Every Day

[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![Rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/Samot72/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610-entry/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![Reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/Samot72/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610-entry/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

Entry for make.fun's [One-Line Roast: The Gadget You Use Every Day](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610) bounty — one original line (max 200 characters) roasting a gadget used every day.

## The roast

> My laptop fan sounds like a jet taking off just to open a spreadsheet, then falls dead silent the second IT walks over, like it is gaslighting me.

146 characters, one line.

## How it works

`main.ts` (Node 22+, no dependencies) holds the single entry line, validates it
(1–200 Unicode code points, one line, not blank), writes it byte-exact with no
trailing newline to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then
reads the file back and verifies it matches exactly.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
