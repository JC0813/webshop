export class FakeDatabase {

    constructor() {
        this.database = [
            {
                ID: 1,
                naam: "Elite Sport Neo Revolution",
                kleur: "Zwart Wit",
                prijs: 130.00,
                foto: "./img/elite_sport_neo_revolution.jpg",
            },

            {
                ID: 2,
                naam: "Uhlsport FM Cybertec Flex HN",
                kleur: "wit en blauw",
                prijs: 129.99,
                foto: "./img/uhlsport_fm_cybertec_flex_hn.jpg",
            },

            {
                ID: 3,
                naam: "Reusch Attrakt Freegel Fusion",
                kleur: "gestippeld wit",
                prijs: 140.00,
                foto: "./img/reusch_attrakt_freegel_fusion.jpg",
            }
        ]

    }
    getAlleProducten() {
        return this.database;
    };
}