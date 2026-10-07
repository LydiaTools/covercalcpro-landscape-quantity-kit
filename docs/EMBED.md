# Add a quantity calculator to a garden guide

Choose a hosted mulch worksheet if you already know the bed area. Choose the standalone checker if you want to host the code yourself or work offline. Neither tool chooses a suitable depth or guesses product information.

| | Hosted mulch worksheet | Standalone checker in this kit |
| --- | --- | --- |
| Inputs | Measured area, added depth, printed bag volume | Rectangle or circle dimensions, depth, optional allowance |
| Units | sq ft/in or m²/cm; cubic-foot or litre bags | ft/in or m/cm; the cubic-foot bags shown in its table |
| Hosting | Served by covercalcpro.com; internet required | Your files and server, or open the HTML locally |
| Code | The production worksheet is not included in this kit | Inspectable single HTML file under this kit’s MIT license |
| Prices and supplier rules | Not included | Not included |

## Use the hosted mulch worksheet

Paste this into a Custom HTML or iframe block. The installation page is `/embed-mulch-calculator/`; the **frame source** is `/embed/mulch/`. Use the frame source in the code below.

```html
<iframe
  src="https://covercalcpro.com/embed/mulch/"
  title="Mulch calculator by CoverCalc Pro"
  width="100%"
  height="760"
  style="display:block;border:1px solid #9cab9f;max-width:100%"
  loading="lazy"
  referrerpolicy="no-referrer"
></iframe>
<p><a href="https://covercalcpro.com/#calculator" rel="nofollow">Open the full mulch calculator</a></p>
```

1. In WordPress, add a **Custom HTML** block, paste the snippet, and preview the published-page layout.
2. In another builder, use its HTML/iframe block. Some plans or editors strip frames; check that builder’s current rules rather than assuming support.
3. Leave frame scrolling enabled. Adjust the height to your text size and layout; do not hide overflowing controls or results.
4. If frames are unavailable, use the ordinary full-calculator link instead. The link works independently of the iframe.

No parent-page JavaScript, account, API key, automatic resizing message handler, or extra link under the iframe is required. The fallback link above is for your readers and can be changed or omitted. The link inside the hosted frame is visible and marked `nofollow`; this is a utility, not a hidden backlink mechanism.

Open [`examples/hosted-mulch-embed.html`](../examples/hosted-mulch-embed.html) after downloading this repository to try a complete, responsive host page. It makes real requests to the existing public worksheet; it is not a screenshot or a simulated result. An iframe opened from a local file may be restricted by your browser, so test under a local server or your builder preview if necessary.

## Self-host the existing standalone checker

Copy [`tools/landscape-volume-check.html`](../tools/landscape-volume-check.html) and this repository’s [`LICENSE`](../LICENSE) to your own server. Keep the MIT copyright and license notice with redistributed copies. No runtime dependencies or build step are needed. You can also open the HTML file directly for your own offline check.

For example, if you upload the checker to `/tools/landscape-volume-check.html` on your own site, use:

```html
<iframe
  src="/tools/landscape-volume-check.html"
  title="Landscape volume checker"
  width="100%"
  height="1000"
  style="display:block;border:1px solid #9cab9f;max-width:100%"
  loading="lazy"
></iframe>
<p><a href="/tools/landscape-volume-check.html">Open the standalone volume checker</a></p>
```

Replace the path with the path you actually uploaded. The unmodified checker has no external scripts or network calls. Your server and any tracking you add have their own privacy behavior. If your server sends `X-Frame-Options` or CSP `frame-ancestors` restrictions, the browser may prevent embedding; do not remove unrelated site-wide security protections just to install this example.

## Test before publishing

### Hosted worksheet arithmetic

The example values below are selected to check the math, not a recommended mulch depth or package size.

| Input | Test value |
| --- | --- |
| Measurement units | Square feet / inches |
| Measured area | 100 sq ft |
| New layer depth | 3 in |
| Volume printed on each bag | 2 cubic feet |

Expected: `100 × 3 ÷ 12 = 25 cu ft`, `25 ÷ 27 ≈ 0.926 cu yd`, and `ceiling(25 ÷ 2) = 13 whole bags`. No extra allowance, stock deduction, price, or delivery minimum is included.

Switch to metric units. The same measurement should become **9.290304 m²** and **7.62 cm** and still show **13 whole 2-cu-ft bags**. For a separate metric test, enter **10 m²**, **5 cm**, and **50 litres per bag**: `10 × 5 ÷ 100 = 0.5 m³ = 500 L`, so **10 whole bags**.

### Integration checks

- Start with blank measurements. A dash is an empty state, not a zero-material result.
- Check at least 360 px and 390 px widths, zoom, keyboard navigation into and out of the frame, and visible focus.
- Make sure all result text can be reached by scrolling; a frame’s height does not automatically grow with its contents.
- Clear or invalidate an input after a valid result. The previous bag count must not remain as if it were current.
- Try the fallback link if a frame cannot load. The hosted tool requires covercalcpro.com to be reachable.
- “Open CoverCalc Pro” opens a new tab and transfers valid measured inputs to the full calculator. Check the imported units and dimensions before adding other beds or costs.
- For the self-hosted checker, run the separately documented [rectangle and circle examples](TRY-IT.md); it is not the hosted area-entry worksheet.

## Privacy and limits

The hosted calculator computes inside its frame. Its application code has no advertising, analytics script, cookie, browser-storage, or input-upload code; loading the frame still makes ordinary hosting requests. The response uses a `connect-src 'none'` content security policy. This is a statement about the hosted worksheet, not about all code on the site embedding it or all network behavior of a browser.

Choosing the hosted frame’s full-calculator link puts your valid inputs in a URL fragment in the new tab. The URL fragment is not part of the initial HTTP request, but page scripts and people who can see or copy that URL can read it. Do not put addresses or personal details into measurements. The full site has its own [privacy choices](https://covercalcpro.com/privacy/).

No tool measures a photo, infers weight from volume, fetches prices, or guarantees supplier suitability. Use your measurements, the bag label, and the depth you have chosen. The quantity method is area × added depth; see [Iowa State University Extension’s mulch quantity guide](https://yardandgarden.extension.iastate.edu/how-to/how-determine-amount-mulch-needed-garden-bed). For multi-bed allowances and order comparisons, use the appropriate [full CoverCalc Pro calculator](https://covercalcpro.com/?utm_source=github&utm_medium=referral&utm_campaign=covercalcpro_kit#calculator).

The hosted service may change independently of this repository. This repository’s MIT license applies to the files included here, not to the complete production website or a guarantee of hosting availability.
