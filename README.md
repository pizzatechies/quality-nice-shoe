# Quality Nice Shoes – online shoe shop

Static website for a shoe shop at **Dubai Merchants Mall, Shop F44, Nairobi**.

- Product catalogue with category filters, search and sort (prices in KSh)
- Size picker and cart (saved in the browser)
- Checkout sends the order to the shop on **WhatsApp**; payment via Lipa na M-Pesa till or on pickup
- Pickup at Shop F44, Nairobi delivery or upcountry delivery
- Shop location, map, opening hours and contact form

## Customise
Open `app.js`:
- `CONFIG` – shop name, WhatsApp/phone number, email, M-Pesa till, delivery fees
- `PRODUCTS` – add/edit shoes (name, category, price, sizes, colours)

## Run
No build step. Open `index.html` in a browser, or host the folder on GitHub Pages, Netlify or any static host.

## Photos
Each product has an `img` field. It holds an Unsplash stock photo id for now.
To use your own photos, put them in an `images/` folder and set e.g. `img: "images/street-runner.jpg"`.
If a photo can't load, the site shows a drawing of the shoe instead.
