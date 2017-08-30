var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// function addToCart(item) {
//  var addition = new Object({[item]: getRandomInt(0, 100)});
//  cart.push(addition);
//  console.log(item + " has been added to your cart.")
//  return cart
// }

function addToCart(item) {
 var itemName = item
 var itemPrice = getRandomInt(0, 100)
 var addition = new Object({[item]: [itemPrice]]});
 cart.push(addition);
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  for (var i = 0; i < cart.length; i++) {
    return `In your cart, you have cart[i]`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
