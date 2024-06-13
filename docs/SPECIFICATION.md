# Specifications

<details>
<summary>Z-Index</summary>
<div>

| Z-Index | Entity |
| --: | --- |
| 252 | Header Background |
| 253 | Header, Header II |
| 254 | Contact modal background |
| 255 | Contact modal |
| 32 | News list arrows (`NewsList.svelte>style button`) |
| -1 | Background | (`style.scss>main::before`) |

</div>
</details>

<details>
<summary>CSS Variables</summary>
<div>

| Name | Description | Usable area |
| --: | --- | --- |
| `--vh001` | viewport height * 0.01 (realtime update) | all |
| `--max-vh001` | viewport max height ever * 0.01 (realtime update) | all |

</div>
</details>

<details>
<summary>Fonts</summary>
<div>

Default font is `Zen Kaku Gothic New`.  
Default font weight is `400`.

- [Zen Kaku Gothic New](#zen-kaku-gothic-new)
- [Poppins](#poppins)

---

## `Zen Kaku Gothic New`

<!-- - Light: `300`
- Medium: `500` -->
- Regular: `400`
- Black: `900`
<!-- - Bold: `700` -->

**Do not use**: `100`, `200`, `300`, `500`, `600`, `700`, `800`, `normal`, `bold`, `lighter`, `bolder`

---

## `Poppins`

<!-- - Thin: `100`
- Thin Italic: `100` + `italic`
- ExtraLight: `200`
- ExtraLight Italic: `200` + `italic`
- Light: `300`
- Light Italic: `300` + `italic`
- Regular: `400`
- Regular Italic: `400` + `italic` -->
- Medium: `500`
<!-- - Medium Italic: `500` + `italic`
- SemiBold: `600`
- SemiBold Italic: `600` + `italic`
- Bold: `700`
- Bold Italic: `700` + `italic`
- ExtraBold: `800`
- ExtraBold Italic: `800` + `italic`
- Black: `900`
- Black Italic: `900` + `italic` -->

**Must specify the `font-weight` to `500`**.  
**We can use only uppercase letters of [`HEADER_ITEMS`](/src/lib/data/HEADER_ITEMS.ts) constant.**

---

</div>
</details>
