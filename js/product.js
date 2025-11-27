export class Product {
    constructor(data){
        this.naam = data.naam
        this.kleur = data.kleur
        this.prijs = data.prijs
        this.foto = data.foto
    }

    maakHTML(){
        return`<div class="product">
        <p>${this.naam} - €${this.prijs}</p>
        <button class="addBtn" data-name="Product 1" data-price="10">Toevoegen</button>
      </div>`
    }
}