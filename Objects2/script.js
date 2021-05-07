console.log("Lesson5");


//factory function
function createCircle(radius) {

    return {

        /*js-ben egy kulcs-érték pár kollekció az objektum*/

        /*
        radius: radius 
        ES6-ban elég, ha ennyit írok, mivel a
        a formális paraméter listában szereplő
        érték megegyezik az egyik property-vel (tulajdonsággal)

        */

        radius,

        draw: () => {

            console.log('draw a circle');
        }
    };

}

const circle = createCircle(1);
//circle.draw();


//constructor function, az első betűje mindig nagybetű


function Circle(radius) {

    /*az adott objektumunkra utal a 'this' kulcsszó*/
    console.log(this);

    this.radius = radius;

    this.draw = () => {
        console.log('draaw');
    }
}

const anotherCircle = new Circle(1.4);

anotherCircle.draw();

anotherCircle.constructor();
circle.constructor();
/*minden objetktum rendelkezik konstruktorral, ami
 visszaadja az objektum létrehozó függvényét, 
 értéke maga a függvény*/

let x = {};

x.constructor();
// let x = new Object();
/*rendelkezni, fog az object is konstruktorral*/



/*
function Circle(radius) {

    this.radius = radius;

    this.draw = () => {
        console.log('draaw');
    }
}*/

/*ugyanaz lesz a Circle és a Circel2*/
const Circle2 = new Function("radius", `
    
    this.radius = radius;

     this.draw = () => {
         console.log('draaw');
     }`

);


const circle3 = new Circle(1);
const circle4 = new Circle2(3);

/*érték szerinti paraméteráradás miatt
nem változik az értéke az y-nak*/
let z = 10;
let y = z;


z = 20;
console.log(y);


/*itt viszont fog, mivel objektumokkal dolgozunk*/

let obj = { value: 10 };

function increase(obj) {

    obj.value++;
}

increase(obj);
console.log(obj);


/*ez azért történik,
mivel a primitív típusok esetében az érék "csak" másolva lesz,
míg az objektumok esetében a property értéke átadódik*/


/*primitív típusok esetében az érték másolódik át,
míg az objetumok esetében a cím*/





function Circle5(radius) {

    this.radius = radius;

    this.draw = () => {
        console.log('draaw');
    }
}

const circle6 = new Circle5(5);

/*plusz property-t tudunk megadni az alábbi két módon*/
circle6.location = { x: 1 };
circle6['location'] = { x: 1 };

/*property törlése*/
delete circle6.location;
delete circle6['location'];


console.log('Objektum bejárása:');

for (let key in circle6) {

    if (typeof (circle6[key]) !== 'function') {

        console.log(key);
        console.log(circle6[key]);

    }
}

const keys = Object.keys(circle6);
console.log(keys);


if ('radius' in circle6) {

    console.log('Circle has radius!');
}




