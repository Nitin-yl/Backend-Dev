const cart = [
  { item: "Laptop", price: 50000, quantity: 1, inStock: true },
  { item: "Mouse", price: 1500, quantity: 2, inStock: true },
  { item: "Keyboard", price: 3000, quantity: 1, inStock: false },
];

const isReadyToShip = cart.every((product) => product.inStock);

console.log(isReadyToShip ? "Ready to Ship" : "Wait");

const availableItems = cart.filter((product) => product.inStock);

const totalBill = availableItems.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);

console.log("available Item:", availableItems);
console.log("total Bill:", totalBill);
