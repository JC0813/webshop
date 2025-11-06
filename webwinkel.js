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
  }

  ToonProducten(){
    //haal data van data van fake data base
    let database = new FakeDatabase()
    database.database.forEach((item) => {
      this.items.push(new Product(item))
    });

    //toon de producten

  }

  WinkelMandje() {
    // --- Winkelmandje openen/sluiten ---
    openBtn.addEventListener('click', () => {
      cart.classList.add('active');
      overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);

    function closeCart() {
      cart.classList.remove('active');
      overlay.classList.remove('active');
    }
    this.toeVoegproduct();
  }

  toeVoegproduct() {
    // --- Product toevoegen ---
    for (let i = 0; i < addButtons.length; i++) {
      let btn = addButtons[i];
      btn.addEventListener('click', () => {
        let naam = btn.dataset.naam;
        let prijs = btn.dataset.prijs;

        items.push({ naam, prijs });
        updateCart();
        console.log(items)
      });
    }
    this.updateCart();
  }

  // --- Winkelmandje updaten ---
  updateCart() {
    if (items.length === 0) {
      cartItems.innerHTML = '';
      emptyMessage.style.display = 'block';
    } else {
      emptyMessage.style.display = 'none';

      let html = '';
      for (let i = 0; i < items.length; i++) {
        html += `
        <li>
          ${items[i].name} - €${items[i].price}
        </li>
      `;
      }

      cartItems.innerHTML = html;
    }
  }


}