import { FakeDatabase } from "./fakedatabase.js";
import { Product } from "./product.js";
import { Winkelmandje } from "./winkelmandje.js";

export class Webpagina {
  constructor() {
    this.productplaceholder = document.getElementById("products");
    this.openBtn = document.getElementById("openCartBtn");
    this.closeBtn = document.getElementById("closeCartBtn");
    this.cart = document.getElementById("cart");
    this.overlay = document.getElementById("overlay");

    this.items = [];
    this.winkelmandje = new Winkelmandje("cartItems");
  }

  init() {
    this.ToonProducten();
    this.addEvents();
    this.initCartControls();
  }

  ToonProducten() {
    const database = new FakeDatabase();
    for (let i = 0; i < database.database.length; i++) {
      this.items.push(new Product(database.database[i]));
    }

    let html = "";
    for (let i = 0; i < this.items.length; i++) {
      const p = this.items[i];
      html += `
                <div class="product">
                    <img src="${p.foto}" class="product-foto">
                    <p>${p.naam}</p>
                    <p>Kleur: ${p.kleur}</p>
                    <p>€${p.prijs.toFixed(2)}</p>
                    <button class="addBtn" data-naam="${p.naam}" data-prijs="${p.prijs}">Toevoegen</button>
                </div>
            `;
    }
    this.productplaceholder.innerHTML = html;
  }

  addEvents() {
    this.productplaceholder.addEventListener("click", (e) => {
      if (e.target.classList.contains("addBtn")) {
        const naam = e.target.dataset.naam;
        const prijs = e.target.dataset.prijs;
        this.winkelmandje.voegToe(naam, prijs);
      }
    });
  }

  initCartControls() {
    this.openBtn.addEventListener("click", () => {
      this.cart.classList.add("active");
      this.overlay.classList.add("active");
    });

    const close = () => {
      this.cart.classList.remove("active");
      this.overlay.classList.remove("active");
    };

    this.closeBtn.addEventListener("click", close);
    this.overlay.addEventListener("click", close);
  }
}
