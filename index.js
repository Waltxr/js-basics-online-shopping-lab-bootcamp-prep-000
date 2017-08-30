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

function addToCart(item) {
 cart.push({itemName: item, itemPrice: getRandomInt(0, 100)});
 console.log(`${item} has been added to your cart.`)
 return cart
}

var cartItems = []

function viewCart() {
  for (var i = 0; i < cart.length - 1; i++) {
     cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  return `In your cart you have ${cartItems.join(', ')} and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
}

function total() {
  i = 0
  totalCost = 0
  while (i < cart.length) {
    totalCost += parseInt(cart[i].itemPrice)
    i++
  }
  return totalCost
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      i++
    } else {
      return "That item is not in your cart."
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
