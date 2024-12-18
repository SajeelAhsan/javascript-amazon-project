class Cart{

  cartItems;
  localStorageKey;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  loadFromStorage() {
    const storedCart = localStorage.getItem(this.localStorageKey);
    this.cartItems = storedCart ? JSON.parse(storedCart) : null;
   //this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));
   
     if (!this.cartItems){
       this.cartItems = [{
         productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6' ,
         quantity: 1, 
         deliveryOptionId: '2'
       },
       {
         productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
         quantity: 2,
         deliveryOptionId: '2'
       }
       ];
     }
     else {
       // Sanitize cart items
       this.cartItems = this.cartItems.filter(
         (item) =>
           item.productId &&
           item.quantity > 0 &&
           !isNaN(item.quantity) &&
           item.deliveryOptionId
       );
     }
     this.saveToStorage();
   }

  saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }
//This function will allows us to add products into the cart
  addToCart(productId, quantity) {

  if (!quantity || quantity <= 0) {
    console.error('Invalid quantity. It must be altleast one.');
    return;
  }
  let matchingItem;
  this.cartItems.forEach((cartItem) => {
    if(productId === cartItem.productId)
    {
      matchingItem = cartItem;
    }
  });
  if(matchingItem) {
    matchingItem.quantity += quantity;
  }
  else {
    this.cartItems.push({ 
      productId,
      quantity,
      deliveryOptionId: '1'
    });
  }
  this.saveToStorage();
  }

//This function will allows us to remove products from the cart
  removeFromCart(productId) {
  const newCart = [];
  this.cartItems.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  this.cartItems = newCart;
  this.saveToStorage();
 }

 //This function will allows us to Calculate the CartQuantity.
  calculateCartQuantity(){
  let cartQuantity = 0 ;
    this.cartItems.forEach((cartItem) => {
     cartQuantity += cartItem.quantity;
   });
  return cartQuantity;
 }
//This function will allows us to update the products into the cart
  updateQuantity(productId, newQuantity) {

  if (!newQuantity || newQuantity <= 0 || isNaN(newQuantity)) {
    console.error('Invalid quantity. It must be altleast one.');
    return;
  } 
let matchingItem;
this.cartItems.forEach((cartItem) => {

  if (productId === cartItem.productId) {
    matchingItem = cartItem;
  }
});
matchingItem.quantity = newQuantity;
if (matchingItem) {
  matchingItem.quantity = newQuantity;
  this.saveToStorage();
} else {
  console.error(`Cart item with productId ${productId} not found.`);
}
}
//This function will allows us to update the Delivery Options into the cart.
  updateDeliveryOption(productId, deliveryOptionId) {
    let cartItem = this.cartItems.find(item => item.productId === productId);
    if (cartItem) {
        cartItem.deliveryOptionId = deliveryOptionId; // Update the delivery option in the cart
    } else {
        console.error(`Cart item with productId ${productId} not found.`);
    }
    this.saveToStorage();
  }
}
   
const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

cart.addToCart('id1', 2);
console.log(cart);
console.log(businessCart);