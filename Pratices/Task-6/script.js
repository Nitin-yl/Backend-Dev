// Q-1
const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

// { a: 'three', b: 'two' } // reason:- in object they have unique key value pair if any key appear two or more time so last one key override the last one.

// Q-2 
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;
// console.log(a[b]);

// 456   //Reason:- Objects as keys in normal objects are converted to the SAME string.

// Q-3
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };
// console.log(admin);

// { admin: true, name: 'Lydia', age: 21 } // Reason:- using rest operator

//Q-4
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

// console.log(shape.diameter());
// console.log(shape.perimeter());

// 20, NaN    //reason:- Arrow functions don’t bind this, so they can’t access object properties using this.

//Q-5
function test() {
    // console.log(a);
    // console.log(b);
   
    var a = 10;
    let b = 20;
}
test();

// reason:- var is hoisted and initialized with undefined , For a This phase is called TDZ (Temporal Dead Zone)

//Q-6

var x = 10;
if (true) {
  var x = 20;
  console.log(x);
}
console.log(x);

let y = 10;
if (true) {
  let y = 20;
  console.log(y);
}
console.log(y);

//20 20 20 10 //  Reason:- var → no block scope,  let → block scope

