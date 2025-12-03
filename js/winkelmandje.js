export class Winkelmandje {
    constructor(containerId) {
        this.items = []; 
        this.container = document.getElementById(containerId);
    }

    // Voeg product toe of verhoogt het aantal als het al bestaat
    voegToe(naam, prijs) {
        prijs = parseFloat(prijs);
        let gevonden = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].naam === naam) {
                this.items[i].aantal++;
                gevonden = true;
                break;
            }
        }
        if (!gevonden) {
            this.items.push({ naam, prijs, aantal: 1 });
        }
        this.render();
    }

    // Verminder het aantal van product
    verminder(index) {
        if (this.items[index]) {
            this.items[index].aantal--;
            if (this.items[index].aantal <= 0) {
                this.items.splice(index, 1);
            }
            this.render();
        }
    }

    // Verwijder het volledige product
    verwijder(index) {
        this.items.splice(index, 1);
        this.render();
    }

    // Bereken de totaalprijs
    totaalPrijs() {
        let totaal = 0;
        for (let i = 0; i < this.items.length; i++) {
            totaal += this.items[i].prijs * this.items[i].aantal;
        }
        return totaal;
    }

    // Leegt het mandje 
    afrekenen() {
        this.items = [];
        this.render();
        alert("Bedankt voor uw bestelling!");
    }

    // Genereert de HTML voor het mandje
    genereerHTML() {
        if (this.items.length === 0) {
            return `<p>Winkelmandje is leeg</p>`;
        }

        let html = "<ul>";
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            html += `
                <li>
                    ${item.naam} - €${item.prijs.toFixed(2)} x ${item.aantal}
                    <button class="verminderBtn" data-index="${i}">-</button>
                    <button class="verwijderBtn" data-index="${i}">X</button>
                </li>
            `;
        }
        html += "</ul>";
        html += `<p><strong>Totaal: €${this.totaalPrijs().toFixed(2)}</strong></p>`;
        html += `<button id="afrekenBtn">Afrekenen</button>`;
        return html;
    }

    render() {
        this.container.innerHTML = this.genereerHTML();

        // verwijder-knoppen
        const delBtns = this.container.getElementsByClassName("verwijderBtn");
        for (let i = 0; i < delBtns.length; i++) {
            delBtns[i].addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                this.verwijder(index);
            });
        }

        // verminder-knoppen
        const minBtns = this.container.getElementsByClassName("verminderBtn");
        for (let i = 0; i < minBtns.length; i++) {
            minBtns[i].addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                this.verminder(index);
            });
        }

        // afreken-knop
        const afrekenBtn = document.getElementById("afrekenBtn");
        if (afrekenBtn) {
            afrekenBtn.addEventListener("click", () => {
                this.afrekenen();
            });
        }
    }
}
