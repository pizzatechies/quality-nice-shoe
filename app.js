/* ===== Shop settings: edit these to match your business ===== */
const CONFIG = {
  shopName: "Quality Nice Shoes",
  phone: "254759230955",          // international format, no "+" (used for WhatsApp & calls)
  phoneDisplay: "+254 759 230 955",
  email: "info@qualityniceshoes.co.ke",
  mpesaTill: "000000",
  delivery: { pickup: 0, nairobi: 200, upcountry: 400 },
  freeDeliveryOver: 5000          // free Nairobi delivery above this subtotal
};

/* ===== Products: add, remove or edit shoes here (prices in KSh) ===== */
const PRODUCTS = [
  { id: 1,  name: "Street Runner Sneaker", img: "1542291026-7eec264c27ff", category: "Sneakers", price: 3500, was: 4200, shape: "sneaker", colors: ["#ffffff", "#e85d2a", "#1b1b1f"], bg: "#ffe3d3", sizes: [38,39,40,41,42,43,44,45], desc: "Lightweight, breathable everyday sneaker with a cushioned sole. Perfect for town and weekend outings." },
  { id: 2,  name: "Classic White Kicks", img: "1525966222134-fcfa99b8ae77",   category: "Sneakers", price: 2800, shape: "sneaker", colors: ["#f8f8f8", "#d9d9d9", "#0f7b4f"], bg: "#dff3e9", sizes: [36,37,38,39,40,41,42,43,44], desc: "Clean all-white low-top that goes with everything — jeans, chinos or a dress.", badge: "Bestseller" },
  { id: 3,  name: "Night Sprint Trainer", img: "1491553895911-0055eca6402d",  category: "Sneakers", price: 4500, shape: "sneaker", colors: ["#1b1b1f", "#ffffff", "#3d7bfd"], bg: "#dfe8ff", sizes: [40,41,42,43,44,45,46], desc: "Sporty trainer with a grippy sole for the gym, jogging or the matatu rush." },
  { id: 4,  name: "Oxford Leather Official", img: "1533867617858-e7b97e060509", category: "Men's Official", price: 4800, shape: "formal", colors: ["#3b2416", "#1a0f08", "#6b4428"], bg: "#f1e4d6", sizes: [39,40,41,42,43,44,45], desc: "Genuine leather Oxford for the office, weddings and church. Polishes beautifully." },
  { id: 5,  name: "Black Derby Classic", img: "1614252369475-531eba835eb1",   category: "Men's Official", price: 3900, shape: "formal", colors: ["#141414", "#000000", "#3a3a3a"], bg: "#e8e8ec", sizes: [39,40,41,42,43,44,45,46], desc: "Timeless black derby with a comfortable padded insole for long days." },
  { id: 6,  name: "Ruby Block Heel", img: "1543163521-1bf539c55dd2",       category: "Ladies' Heels", price: 3200, was: 3800, shape: "heel", colors: ["#c0182c", "#5a0a14", "#f2b8c0"], bg: "#fde2e6", sizes: [36,37,38,39,40,41], desc: "Elegant 7cm block heel that's easy to walk in. Great for events and dinners." },
  { id: 7,  name: "Nude Stiletto Pump", img: "1515347619252-60a4bf4fff4f",    category: "Ladies' Heels", price: 3600, shape: "heel", colors: ["#e3b896", "#8a5a3a", "#f7dcc6"], bg: "#fbeee3", sizes: [36,37,38,39,40,41], desc: "Classic pointed pump in a versatile nude tone. Office to evening.", badge: "New" },
  { id: 8,  name: "Maasai Beaded Sandal", img: "1603487742131-4160ec999306",  category: "Sandals", price: 1800, shape: "sandal", colors: ["#8b5a2b", "#5a3a1a", "#e8452c"], bg: "#fff1d6", sizes: [36,37,38,39,40,41,42,43], desc: "Handmade Kenyan leather sandal with colourful Maasai beadwork.", badge: "Made in Kenya" },
  { id: 9,  name: "Comfy Slide", img: "1562183241-b937e95585b6",           category: "Sandals", price: 1200, shape: "sandal", colors: ["#1b1b1f", "#333333", "#e85d2a"], bg: "#ececf2", sizes: [37,38,39,40,41,42,43,44,45], desc: "Soft cushioned slide for the house, the beach or a quick errand." },
  { id: 10, name: "Desert Chelsea Boot", img: "1608256246200-53e635b5b65f",   category: "Boots", price: 5200, shape: "boot", colors: ["#a86b3c", "#3a2414", "#c9905e"], bg: "#f5e6d3", sizes: [39,40,41,42,43,44,45], desc: "Suede Chelsea boot with elastic sides — smart-casual and built to last." },
  { id: 11, name: "Rainy Season Boot", img: "1520639888713-7851133b1ed0",     category: "Boots", price: 3400, shape: "boot", colors: ["#2e4a3a", "#14221a", "#4f7a60"], bg: "#dceee3", sizes: [37,38,39,40,41,42,43,44], desc: "Water-resistant boot for the long rains. Strong grip on wet roads." },
  { id: 12, name: "Kids School Shoe", img: "1549298916-b41d501d3772",      category: "Kids", price: 1600, shape: "formal", colors: ["#1b1b1f", "#000000", "#444444"], bg: "#e6eefb", sizes: [25,26,27,28,29,30,31,32,33,34,35], desc: "Tough black school shoe with a scuff-resistant toe. Survives the whole term.", badge: "Back to school" },
  { id: 13, name: "Kids Light-Up Sneaker", img: "1600185365483-26d7a4cc7519", category: "Kids", price: 2200, shape: "sneaker", colors: ["#ff6fb5", "#ffffff", "#8a5cf6"], bg: "#f6e3ff", sizes: [25,26,27,28,29,30,31,32,33], desc: "Fun sneakers with light-up soles and easy velcro straps." }
];

/* ===== Helpers ===== */
const $ = (s, el = document) => el.querySelector(s);
const ksh = n => "KSh " + n.toLocaleString("en-KE");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const waLink = text => `https://wa.me/${CONFIG.phone}${text ? "?text=" + encodeURIComponent(text) : ""}`;

function shoeSVG(shape, [main, sole, accent]) {
  const shapes = {
    sneaker: `
      <path d="M18 70 C18 52 30 40 46 38 L78 34 C92 32 98 22 112 24 C126 26 132 44 150 50 C168 56 186 58 188 70 L188 76 L18 76 Z" fill="${main}" stroke="rgba(0,0,0,.15)"/>
      <path d="M14 74 H190 Q192 86 180 88 H24 Q12 86 14 74 Z" fill="${sole}"/>
      <path d="M50 54 C80 50 110 58 150 52" stroke="${accent}" stroke-width="7" fill="none" stroke-linecap="round"/>
      <g stroke="${accent}" stroke-width="3" stroke-linecap="round"><path d="M92 34 L102 46"/><path d="M100 30 L110 44"/><path d="M108 27 L118 42"/></g>`,
    formal: `
      <path d="M16 72 C16 58 28 50 46 48 L90 44 C104 42 110 34 122 36 C140 40 160 54 182 60 C192 63 194 70 190 74 L16 74 Z" fill="${main}"/>
      <path d="M12 72 H194 Q194 80 186 80 H20 Q12 80 12 72 Z" fill="${sole}"/>
      <path d="M96 44 C108 40 120 46 128 54" stroke="${accent}" stroke-width="3" fill="none"/>
      <ellipse cx="160" cy="60" rx="14" ry="4" fill="rgba(255,255,255,.25)"/>`,
    heel: `
      <path d="M30 40 C40 34 52 36 60 44 C80 62 120 66 168 64 C184 64 192 70 188 76 L130 78 C100 78 70 70 52 60 L44 56 Z" fill="${main}"/>
      <path d="M30 40 L44 56 L48 92 L38 92 L34 58 Z" fill="${sole}"/>
      <path d="M130 78 L188 76" stroke="${sole}" stroke-width="4"/>
      <path d="M58 46 C70 58 100 64 130 64" stroke="${accent}" stroke-width="3" fill="none" opacity=".7"/>`,
    sandal: `
      <path d="M14 76 H190 Q192 86 180 86 H24 Q12 86 14 76 Z" fill="${sole}"/>
      <path d="M18 74 H188 Q190 68 182 68 H24 Q16 68 18 74 Z" fill="${main}"/>
      <path d="M70 70 C80 40 130 40 150 70" stroke="${main}" stroke-width="12" fill="none" stroke-linecap="round"/>
      <g fill="${accent}"><circle cx="86" cy="50" r="4"/><circle cx="100" cy="45" r="4" fill="#ffd23f"/><circle cx="114" cy="45" r="4"/><circle cx="128" cy="50" r="4" fill="#2b9de8"/></g>
      <path d="M30 70 C30 50 46 46 52 70" stroke="${main}" stroke-width="8" fill="none"/>`,
    boot: `
      <path d="M30 10 H86 L90 48 C110 52 150 56 176 62 C190 66 192 72 190 78 L24 78 C22 60 26 30 30 10 Z" fill="${main}"/>
      <path d="M20 76 H194 Q194 88 184 88 H28 Q20 88 20 76 Z" fill="${sole}"/>
      <rect x="40" y="24" width="18" height="40" rx="4" fill="${accent}" opacity=".9"/>
      <path d="M30 10 H86" stroke="${sole}" stroke-width="5"/>`
  };
  return `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${shapes[shape] || shapes.sneaker}</svg>`;
}

/* Product photo with the drawing as a fallback if the photo can't load.
   img can be an Unsplash photo id or a path to your own photo, e.g. "images/runner.jpg". */
const photoURL = (img, w = 600) => /[/.]/.test(img) ? img : `https://images.unsplash.com/photo-${img}?auto=format&fit=crop&w=${w}&q=70`;
const media = (p, w) => (p.img ? `<img src="${photoURL(p.img, w)}" alt="${esc(p.name)}" loading="lazy" onerror="this.parentNode.classList.add('no-photo')">` : "") + shoeSVG(p.shape, p.colors);
const mediaClass = p => p.img ? "media" : "media no-photo";

/* ===== Fill shop details from CONFIG ===== */
document.querySelectorAll("[data-config]").forEach(el => el.textContent = CONFIG[el.dataset.config]);
document.querySelectorAll("[data-config-href]").forEach(el => {
  const t = el.dataset.configHref;
  el.href = t === "tel" ? `tel:+${CONFIG.phone}` : t === "email" ? `mailto:${CONFIG.email}` : waLink("Hi " + CONFIG.shopName + ", I'd like to ask about your shoes.");
});
$("#year").textContent = new Date().getFullYear();
$("#heroShoe").innerHTML = media({ name: CONFIG.shopName, img: "1460353581641-37baddab0fa2", shape: "sneaker", colors: ["#ffffff", "#1b1b1f", "#e85d2a"] }, 900);

/* ===== Mobile menu ===== */
$("#menuBtn").addEventListener("click", () => $("#nav").classList.toggle("open"));
$("#nav").addEventListener("click", e => { if (e.target.tagName === "A") $("#nav").classList.remove("open"); });

/* ===== Product listing ===== */
const state = { category: "All", query: "", sort: "featured" };
const categories = ["All", ...new Set(PRODUCTS.map(p => p.category))];

$("#filters").innerHTML = categories.map(c => `<button class="chip${c === "All" ? " active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
$("#filters").addEventListener("click", e => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  state.category = btn.dataset.cat;
  document.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === btn));
  renderProducts();
});
$("#search").addEventListener("input", e => { state.query = e.target.value.trim().toLowerCase(); renderProducts(); });
$("#sort").addEventListener("change", e => { state.sort = e.target.value; renderProducts(); });

function renderProducts() {
  let list = PRODUCTS.filter(p =>
    (state.category === "All" || p.category === state.category) &&
    (!state.query || (p.name + " " + p.category).toLowerCase().includes(state.query)));
  if (state.sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (state.sort === "high") list = [...list].sort((a, b) => b.price - a.price);

  $("#empty").hidden = list.length > 0;
  $("#products").innerHTML = list.map(p => `
    <article class="card">
      <div class="card-img ${mediaClass(p)}" style="background:${p.bg}" data-open="${p.id}">
        ${p.was ? `<span class="badge sale">-${Math.round((1 - p.price / p.was) * 100)}%</span>` : p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
        ${media(p, 600)}
      </div>
      <div class="card-body">
        <p class="tag">${esc(p.category)}</p>
        <h3>${esc(p.name)}</h3>
        <p class="price">${ksh(p.price)}${p.was ? `<s>${ksh(p.was)}</s>` : ""}</p>
        <button class="btn btn-primary" data-open="${p.id}">Choose size</button>
      </div>
    </article>`).join("");
}
$("#products").addEventListener("click", e => {
  const el = e.target.closest("[data-open]");
  if (el) openModal(+el.dataset.open);
});

/* ===== Product modal ===== */
let current = null, chosenSize = null;
function openModal(id) {
  current = PRODUCTS.find(p => p.id === id);
  chosenSize = null;
  $("#modalImg").style.background = current.bg;
  $("#modalImg").className = "modal-img " + mediaClass(current);
  $("#modalImg").innerHTML = media(current, 900);
  $("#modalCat").textContent = current.category;
  $("#modalTitle").textContent = current.name;
  $("#modalPrice").innerHTML = ksh(current.price) + (current.was ? `<s>${ksh(current.was)}</s>` : "");
  $("#modalDesc").textContent = current.desc;
  $("#modalSizes").innerHTML = current.sizes.map(s => `<button type="button" data-size="${s}">${s}</button>`).join("");
  $("#sizeError").hidden = true;
  $("#modal").hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal() { $("#modal").hidden = true; document.body.style.overflow = ""; }
$("#modalSizes").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  chosenSize = +b.dataset.size;
  $("#modalSizes").querySelectorAll("button").forEach(x => x.classList.toggle("active", x === b));
  $("#sizeError").hidden = true;
});
$("#addToCart").addEventListener("click", () => {
  if (!chosenSize) { $("#sizeError").hidden = false; return; }
  addToCart(current.id, chosenSize);
  closeModal();
  toast(`Added ${current.name} (size ${chosenSize})`);
});
$("#closeModal").addEventListener("click", closeModal);
$("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });

/* ===== Cart ===== */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("cart")) || []; } catch { cart = []; }
cart = cart.filter(i => PRODUCTS.some(p => p.id === i.id));
const save = () => { try { localStorage.setItem("cart", JSON.stringify(cart)); } catch {} };

function addToCart(id, size) {
  const item = cart.find(i => i.id === id && i.size === size);
  item ? item.qty++ : cart.push({ id, size, qty: 1 });
  save(); renderCart();
}
function totals() {
  const subtotal = cart.reduce((s, i) => s + PRODUCTS.find(p => p.id === i.id).price * i.qty, 0);
  const opt = $("#deliveryOption").value;
  let delivery = CONFIG.delivery[opt];
  if (opt === "nairobi" && subtotal >= CONFIG.freeDeliveryOver) delivery = 0;
  return { subtotal, delivery, total: subtotal + delivery, opt };
}
function renderCart() {
  $("#cartCount").textContent = cart.reduce((s, i) => s + i.qty, 0);
  $("#cartFoot").hidden = cart.length === 0;
  if (!cart.length) {
    $("#cartItems").innerHTML = `<div class="cart-empty"><p>Your cart is empty.</p><a href="#shop" class="btn btn-ghost" id="keepShopping">Start shopping</a></div>`;
    return;
  }
  $("#cartItems").innerHTML = cart.map((i, idx) => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return `<div class="cart-item">
      <div class="cart-thumb ${mediaClass(p)}" style="background:${p.bg}">${media(p, 160)}</div>
      <div><h4>${esc(p.name)}</h4><small>Size ${i.size} · ${ksh(p.price)}</small>
        <div class="qty"><button data-dec="${idx}" aria-label="Decrease">−</button><span>${i.qty}</span><button data-inc="${idx}" aria-label="Increase">+</button></div>
      </div>
      <button class="remove" data-rm="${idx}">Remove</button>
    </div>`;
  }).join("");
  updateTotals();
}
function updateTotals() {
  const t = totals();
  $("#subtotal").textContent = ksh(t.subtotal);
  $("#delivery").textContent = t.delivery ? ksh(t.delivery) : "Free";
  $("#total").textContent = ksh(t.total);
}
$("#cartItems").addEventListener("click", e => {
  const d = e.target.dataset;
  if (d.inc) cart[d.inc].qty++;
  else if (d.dec) { if (--cart[d.dec].qty < 1) cart.splice(d.dec, 1); }
  else if (d.rm) cart.splice(d.rm, 1);
  else if (e.target.id === "keepShopping") { closeCart(); return; }
  else return;
  save(); renderCart();
});
$("#deliveryOption").addEventListener("change", e => {
  const needsLoc = e.target.value !== "pickup";
  $("#locationInput").hidden = !needsLoc;
  $("#locationInput").required = needsLoc;
  updateTotals();
});

function openCart() { $("#cartDrawer").classList.add("open"); $("#cartDrawer").setAttribute("aria-hidden", "false"); $("#overlay").hidden = false; }
function closeCart() { $("#cartDrawer").classList.remove("open"); $("#cartDrawer").setAttribute("aria-hidden", "true"); $("#overlay").hidden = true; }
$("#cartBtn").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeModal(); closeCart(); } });

/* ===== Checkout via WhatsApp ===== */
$("#checkoutForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const t = totals();
  const labels = { pickup: "Pick up at Dubai Merchants Mall, Shop F44", nairobi: "Delivery within Nairobi", upcountry: "Delivery outside Nairobi" };
  const lines = cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return `• ${p.name} — size ${i.size} × ${i.qty} = ${ksh(p.price * i.qty)}`;
  });
  const msg = [
    `Hello ${CONFIG.shopName}, I'd like to order:`, "", ...lines, "",
    `Subtotal: ${ksh(t.subtotal)}`,
    `Delivery: ${t.delivery ? ksh(t.delivery) : "Free"}`,
    `TOTAL: ${ksh(t.total)}`, "",
    `Name: ${f.get("name")}`,
    `Phone: ${f.get("phone")}`,
    `Option: ${labels[t.opt]}${t.opt !== "pickup" ? " — " + f.get("location") : ""}`
  ].join("\n");
  window.open(waLink(msg), "_blank", "noopener");
  toast("Opening WhatsApp to confirm your order…");
});

/* ===== Contact form via WhatsApp ===== */
$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  window.open(waLink(`Hi ${CONFIG.shopName}, my name is ${f.get("name")} (${f.get("phone")}).\n\n${f.get("message")}`), "_blank", "noopener");
  e.target.reset();
});

/* ===== Toast ===== */
let toastTimer;
function toast(text) {
  const el = $("#toast");
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

renderProducts();
renderCart();
