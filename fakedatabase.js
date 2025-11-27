export class FakeDatabase {

constructor(){
this.database = [
    {
        ID : 1,
        naam : "Elite Sport Neo Revolution",
        kleur: "Zwart Wit",
        prijs : 130.00,
        foto : "300190_elite-sport-neo-revolution-keepershandschoenen-zwart-wit.jpg",
    },

    {
        ID : 2,
        naam : "Uhlsport FM Cybertec Flex HN",
        kleur: "wit en blauw",
        prijs : 129.99,
        foto : "307947_uhlsport-fm-cybertec-flex-hn-keepershandschoenen-wit-felblauw-zwart.jpg",
    },

    {
        ID : 3,
        naam : "Reusch Attrakt Freegel Fusion",
        kleur: "gestippeld wit",
        prijs : 140.00,
        foto : "81UnbESepdL._AC_SX522_.jpg",
    }
]

}
    getAlleProducten(){
        return this.database;
    };
}