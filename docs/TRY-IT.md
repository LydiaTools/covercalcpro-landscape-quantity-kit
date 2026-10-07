# Try the landscape quantity kit

## Choose an entry point

- **Without downloading, with inspectable code:** [try the standalone checker on GitHub Pages](https://lydiatools.github.io/covercalcpro-landscape-quantity-kit/tools/landscape-volume-check.html). It serves the HTML file in this repository.
- **For the wider garden tools:** use the companion [CoverCalc Pro online calculators](https://covercalcpro.com/?utm_source=github&utm_medium=referral&utm_campaign=covercalcpro_kit#calculator).
- **Offline, with inspectable code:** [download the v0.1.1 ZIP](https://github.com/LydiaTools/covercalcpro-landscape-quantity-kit/releases/download/v0.1.1/CoverCalcPro-Landscape-Volume-Check-v0.1.1.zip), extract it, and open `landscape-volume-check.html` in a modern browser. The ZIP includes the MIT license and a short quick-start. It is a single HTML tool, not the complete online website.
- **ZIP integrity:** 5,173 bytes; SHA-256 `5e82e0f4e47e75cd318f080f9f870300832d54a422e664ef4ead3cf0f5538389`. Verify the download before opening it.

To browse the fields, data, and integration examples as well, clone the full repository:

```sh
git clone https://github.com/LydiaTools/covercalcpro-landscape-quantity-kit.git
cd covercalcpro-landscape-quantity-kit
```

No Node.js, account, API key, build step, or dependency installation is needed for the local checker. Keep the HTML file intact when copying it.

## Run the example shown in the README

| Input | Example value |
| --- | --- |
| Shape | Rectangle |
| Units | US · ft / in |
| Length | 20 ft |
| Width | 10 ft |
| Depth | 3 in |
| Ordering allowance | 0% |

Click **Check volume**. The calculation is `20 × 10 × (3 ÷ 12) = 50 cu ft`. The display shows measured and planned volume of **50 cu ft**, **1.85 yd³**, and **1415.8 L**. The 2 cu ft bag row shows **25 whole bags**.

Those inputs are deliberately selected for a reproducible example, not a recommended bed size, material depth, allowance, or package size. Yard and litre values are rounded for display; bag counts use the calculated volume, not the rounded yard value.

For a second check, choose **Circle**, use a diameter of **10 ft**, a depth of **3 in**, and **0% allowance**. `π × 5² × (3 ÷ 12)` gives approximately **19.63 cu ft**, **0.73 yd³**, and **10 whole 2 cu ft bags**.

## What the local checker does—and does not do

- Supports one rectangle or circle, US customary or metric dimensions, a user-selected allowance, and the bag volumes listed in its result table.
- Shows the formula and conversions. Dry-quart output is explicitly approximate.
- Does not send measurements over the network.
- Does not infer density, weight, price, delivery fees, supplier minimums, or a suitable mulch depth.
- Does not save project history or calculate several areas together. Use the appropriate online tool if that is the task you need.

## Keep purchasing facts separate

Use your own measured dimensions and the volume printed on the bag. Confirm depth, coverage, increments, and delivery rules with the relevant product label or supplier. The [quantity checklist](quantity-checklist.md) helps keep geometry, product facts, and quoted costs separate.

For an incorrect result, [open an issue](https://github.com/LydiaTools/covercalcpro-landscape-quantity-kit/issues) with the shape, units, input values, expected calculation, and actual output. Do not include addresses or other personal information.
