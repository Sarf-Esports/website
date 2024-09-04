# Specifications

<details>
<summary>Z-Index</summary>
<div>

| Z-Index | Entity | Path |
| --: | --- | --- |
| 255 | modal | `Modal.svelte>style>.modal` |
| 254 | modal bg | `layout.scss>.modal-bg` |
| 253 | header, header2 | `Header.svelte>style>header`, `Header.svelte>style>#header2` |
| 252 | header bg | `Header.svelte>style>#header-bg` |
| -1 | bg | `layout.scss>main::before` |

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
- [Josefin Sans](#josefin-sans)

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
**We can use only uppercase letters of [`HEADER_ITEMS`](/src/lib/scripts/data/HEADER_ITEMS.ts) constant.**

---

## `Josefin Sans`

<!-- - Thin: `100`
- Thin Italic: `100` + `italic`
- ExtraLight: `200`
- ExtraLight Italic: `200` + `italic`
- Light: `300`
- Light Italic: `300` + `italic`
- Regular: `400`
- Regular Italic: `400` + `italic`
- Medium: `500`
- Medium Italic: `500` + `italic`
- SemiBold: `600`
- SemiBold Italic: `600` + `italic` -->
- Bold: `700`
<!-- - Bold Italic: `700` + `italic` -->

**Must specify the `font-weight` to `700`**.  
**We can use only uppercase letters of [`HEADER_ITEMS`](/src/lib/scripts/data/HEADER_ITEMS.ts) constant.**

---

</div>
</details>
