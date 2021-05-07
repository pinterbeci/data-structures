var halmaz = new Set();

halmaz.add(1);
halmaz.add(1);
halmaz.add(1);
halmaz.add(1);
halmaz.add(1);
halmaz.add(1);
console.log(halmaz);

/*a halmaz, mint adattípus egy olyan reprezetációt jelenít meg, melyben nem szerepelnek ismétlődő elemek.
Az elemek sorrendje, attól függ, hogy mikor szúrták azt be a halmazba.*/

/*mint minden összeszett adattípús esetében a JS-ben, a halmaz is heterogén adatszerkezet,
ami azt jelenti, hogy elemeinek nem kötelező azonos tipusúnak lennie.*/
/*az adott elemeinek indexe van, ez alapján érhetjük el az elemeket.*/



halmaz.add(2);
halmaz.add(4);
halmaz.add(6);

console.log(halmaz);

halmaz.add(

    objektum = {

        nev: 'Sanyi',
        kor: 25
    }
);


halmaz.add(


    eredmenyekTombje = ['első hely 2010', 'harmadik hely 2016']
);


console.log(halmaz);

halmaz.forEach( (adottEleme, adottElemIndexe) =>{

    console.log(adottEleme);
} );

/*van-e az adott halmaznak ilyen értéke*/
console.log(halmaz.has(5));




console.log(`Map adatstruktúra:`);
/*kulcs-érték párok alkotják az elemeit, az elemek sorrrendje számít
a 'get' segítségével hozzáférhetünk az adatokhoz.
*/

let mapAdattipus = new Map([
    ["gyumi1", "alma"],
    ["gyumi2", 22],
    ["felteteles", false], 

    [ "tombElem", 

    [1, "só", "bors", false, 
    {
            megnevezes: "főzéshez",
            keszKaja: true
        }
    ]
]
]);

console.log(mapAdattipus);


/*új elem hozzáadása, kulcs-érték párral*/
mapAdattipus.set(3, 'oj eleme a mapnek');

/*kulcs értéke alapján kiiratjuk a mapnek az adott kulcshoz tartozó értékék*/
console.log(mapAdattipus.get(3));


