# CoverCalc Pro Landscape Quantity Kit

Open, dependency-free building blocks for checking landscape material quantities before a purchase or quote. The kit is aimed at homeowners and small contractors working with mulch, soil, compost, pine straw, raised beds, and container media.

The companion calculators at [covercalcpro.com](https://covercalcpro.com/) turn the same inputs into browser-based order checks. This repository keeps the reusable field model, formulas, and a small standalone volume checker inspectable.

## Included

- `data/landscape-calculator-fields.csv` — a compact field dictionary for area, container, material, allowance, bag, density, and price inputs.
- `data/mulch-coverage-tables.csv` — a consolidated CSV export of the live depth-coverage and bag-quantity tables, with source URLs on every row.
- `tools/landscape-volume-check.html` — a zero-dependency browser tool for rectangle and circle volumes, allowances, cubic-yard/litre conversions, and common bag-size checks.
- `docs/quantity-checklist.md` — a supplier-ready checklist that separates measured geometry from product facts and quoted prices.

Open the HTML file directly in a modern browser. It does not send measurements anywhere, require an account, or guess prices, density, coverage, or supplier minimums.

## Formula notes

The tool deliberately exposes the calculation chain:

```text
rectangle volume = length × width × depth
circle volume = π × (diameter ÷ 2)² × depth
planned volume = measured volume × (1 + allowance ÷ 100)
cubic yards = cubic feet ÷ 27
litres = cubic feet × 28.316846592
whole bags = ceiling(planned volume ÷ printed bag volume)
```

For metric input, length, width or diameter and depth are converted to metres before geometry is calculated. The displayed dry-quart result is an approximate planning conversion of `1 cubic foot ≈ 25.7 dry quarts`; printed product volume remains the authority for bag counts.

No default price, density, bale coverage, or material prescription is embedded. Put those facts in from the label or supplier quote you actually have.

The mulch CSV contains only rows shown in the two linked CoverCalc Pro charts. Blank fields mean that a value is not supplied for that row; the file does not interpolate omitted depths or invent product facts.

## Why the fields stay separate

Measured area or container geometry answers “how much space is there?” Product volume, density, coverage, order increments, and prices answer “how will this supplier sell it?” Keeping those layers separate makes a result easier to audit and prevents a planning example from looking like a universal product claim.

## License

MIT. See [LICENSE](LICENSE).
