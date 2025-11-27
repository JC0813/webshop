import { FakeDatabase } from "./fakedatabase.js";
import { Product } from "./product.js";

export class Webpagina {
  constructor() {

    this.openBtn = document.getElementById('openCartBtn');
    this.closeBtn = document.getElementById('closeCartBtn');
    this.cart = document.getElementById('cart');
    this.overlay = document.getElementById('overlay');
    this.cartItems = document.getElementById('cartItems');
    this.emptyMessage = document.getElementById('emptyMessage');
    this.productplaceholder = document.getElementById('products');

    this.addButtons = document.querySelectorAll('.addBtn');
    this.items = [];

  }

  init() {
    this.ToonProducten()
    this.addEvents()
  }

  ToonProducten() {
    // haal data op van de fake database
    let database = new FakeDatabase();
    database.database.forEach((item) => {
      this.items.push(new Product(item));
    });

    //toon de producten
    let html = "";
    this.items.forEach((product) => {
      html += `
      <div class="product">
        <img src="${product.foto}" alt="${product.naam}" class="product-foto"/>
        <p>${product.naam}</p>
        <p>kleur: ${product.kleur}</p>
        <p>€${product.prijs.toFixed(2)}</p>
        <button class="addBtn" data-naam="${product.naam}" data-prijs="${product.prijs}">
          Toevoegen
        </button>
      </div>
    `;
    });

    this.productplaceholder.innerHTML = html;
    this.WinkelMandje();

  }

  addEvents() {
    this.productplaceholder.addEventListener('click', (e) => {
      if (e.target.classList.contains('addBtn')) {
        let productnaam = e.target.dataset.naam
        let productprijs = e.target.dataset.prijs

        this.toeVoegproduct(productnaam, productprijs)
      }
    })
  }

  WinkelMandje() {
    // --- Winkelmandje openen/sluiten ---
    this.openBtn.addEventListener('click', () => {
      this.cart.classList.add('active');
      this.overlay.classList.add('active');
    });

    let closeCart = () => {
      this.cart.classList.remove("active");
      this.overlay.classList.remove("active");
    }

    this.closeBtn.addEventListener('click', closeCart);
    this.overlay.addEventListener('click', closeCart);


  }

  toeVoegproduct(naam, prijs) {
    // --- Product toevoegen ---
    this.items.push({ naam, prijs });

    console.log(this.items)
    this.updateCart();
  }

  // --- Winkelmandje updaten ---
  updateCart() {
    if (this.items.length === 0) {
      cartItems.innerHTML = '';
      emptyMessage.style.display = 'block';
    } else {
      emptyMessage.style.display = 'none';

      let html = '';
      for (let i = 0; i < this.items.length; i++) {
        html += `
        <li>
          ${this.items[i].naam} - €${this.items[i].prijs}
        </li>
      `;
      }

      cartItems.innerHTML = html;
    }
  }


}