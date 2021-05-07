const animals = [

    "macska",
    1,
    true,
    "akad"
];

console.log(animals);
console.log(typeof (animals));

animals.push("alma");
console.log(animals);


let removeElement = animals.pop();
console.log(animals);

console.log(removeElement);


console.log(animals.indexOf("macska"));


const Nber = {
    nev: 'Béla',
    kor: 21,
    hobbi: ["foca", "edzés"],
    cim: {
        utca: 'nagypalaj',
        kozseg: 'vahi'
    }
};
/*ezt csak JS-be lehet így megadni és nem is hasznos
a megadása ilyen módon*/
Nber.email = 'pinter.beci99@gmail.com';


console.log(Nber.nev);
console.log(Nber.kor);
console.log(Nber.hobbi[0]);

/*JSON formátummá konvertálódik át az objektumom,
ha esetlegesen szerver felé küldenénk az objektumunk,
akkor így a szerver meg fog "éretni" mit is küldtünk neki*/

console.log(JSON.stringify(Nber));


//ES6-ban jött létre ez a megadás
const { nev, kor, cim: { utca } } = Nber;
console.log(nev);



/*objektum létrehozása

egy objektum nem példányosítható, lesz tulajdonsága amit deklarációkor meg kap vagy később adunk meg,
vagy változtatjuk azt
az osztály, ami példányosítható, és minden minden példányának adhatunk egyéni tulajdonságot,
vagy viselkedést, avagy örökli azt a szülő osztálytól

*/

const animal = {

    blood: String,
    weight: Number,
    name: String,
    isPate: Boolean,
    madeFrom: String,
    hasKid: Boolean,
    /*itt konstans értéket is deffiniálhatunk, amit felül tudunk írni!!*/

    voice(voice) {

        return `${voice}`;
    }


}

console.log(animal);

animal.name = "Crimi";
animal.weight = 10;
animal.hasKid = false;
animal.isPate = true;
animal.madeFrom = "Ukraine";
animal.voice("meeoaoao");

console.log(animal);

/*itt is a deklatációnál is kaphat értéket vagy később, a deklaráció után*/
const cats = {

    names: [],
    weight: [],
    color: []
};



/*Osztályok*/



class Employee {

    /*constructor egy típusa*/
    /*  constructor() {
  
          this.age = Number;
          this.genre = String;
          /* ilyen esetekben használjuk az objektumokat, amikor egy attribútum több adatból tevődik össze*/
    /*  this.address = {

          idAddress: Number,
          village: String,
          street: String
      };
      this.isParent = Boolean;
      this.workOurs = Number;

  }

  constructor() {

  }*/

    /* JS-ben csak egy konstrúktora lehet egy osztálynak, nem úgy Java-ban, sok megannyi, csak külömbözniük, kell*/

    address = {

        idAddress: Number,
        village: String,
        street: String
    };

    constructor(age, genre/*, address*/, isParent, workOurs) {


        this.age = age;
        this.genre = genre;
        /* ilyen esetekben használjuk az objektumokat, amikor egy attribútum több adatból tevődik össze*/
        /*  this.address = {
              idAddress: address.idAddress,
              village: address.village,
              street: address.street
  
          };*/
        this.isParent = isParent;
        this.workOurs = workOurs;

    }


    set setName(name) {

        this.name = name;
    }
    get getName() {

        return this.name;
    }

    //ha egy objektum tipusú attribútimot adunk át, hogy kell settert és gettert beállítani
    set setAddress({ idAddress, village, street }) {

        this.address = {

            idAddress = idAddress,
            village = village,
            street = street
        };
    }

    get getAddress() {

        return this.address;
    }

};


/*const employee1 = new Employee();

console.log(employee1);
*/
const employee2 = new Employee(25, "male", /*{ idAddress: 90255, village: "Vari", street: "Nagypalaj str. 24" },*/
    false, 40);

console.log(employee2.address);


