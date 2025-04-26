// class banate hai jisse nayi objects create kar paye
// Constructor function before ES6
  
// function Cupcake(){
//     this.kitchen = 1;
//     this.bedoom = 2;
//     this.window = 2;
// }

// let ghar1 = new Cupcake();
// console.log(ghar1.kitchen);
// agar func ko call karte waqt new ka use kar liya turant man mein ek object banao

// jab bhi function mein this ko dekho turant uss blank object ko yaad karke us jagah rakh do

// purana tareeka objects banane kaa ek constructor function se jab js mein classes ka concept nahi tha

// function Toffee(flavour,expiry, price){
//     this.flavour = flavour;
//     this.expiry = expiry
//     this.price = price
// }

// let t1 = new Toffee("vanilla", "22/10", 222);
// let t2 = new Toffee("chocolate", "24/10", 25);
// console.log(t1.flavour, t1.expiry, t1.price);
// console.log(t2.flavour, t2.expiry,t2.price);


// ES6 Class directly

class Toffee{
    // har class banate hi pehli cheez jo banate hai uski aadat daal lo uska naam hai constructor
    constructor(flavour, color,taste,texture){
        this.flavour = flavour;        
        this.color = color;        
        this.taste = taste;        
        this.texture = texture;        
        this.shape = "cube";        
        this.size = "small";        
        this.smell = "sweet";        
        this.sound = "crunch";        
        this.temperature = "room temperature";        
        this.origin = "INDIA";        
        this.ingredients = ["Sugar", "butter", "milk", "vanilla extract"];        
    }
}

let t1 = new Toffee("vanilla", "brown", "sweet", "hard");
let t2 = new Toffee("chocolate", "brown", "sweet", "hard");
let t3 = new Toffee("strawberry", "pink", "sweet", "hard");

