export let  cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6' ,
    quantity: 2, 
    deliveryOptionId: '1'
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliverOptionId: '2'
  }
  ];
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}
//This function will allows us to add products into the cart
export function addToCart(productId, quantity) {
  let matchingItem;
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId)
      {
        matchingItem = cartItem;
      }
    });
    if(matchingItem) {
      matchingItem.quantity += quantity;
    }
    else {
      cart.push({ 
        productId,
        quantity,
        deliveryOptionId: '1'
      });
    }
    saveToStorage();
 }

 //This function will allows us to remove products from the cart
 export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart= newCart;
  saveToStorage();
 }
//This function will allows us to update the products into the cart.
 export function claculateCartQuantity(){
  let cartQuantity = 0 ;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
  return cartQuantity;
 }
 export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}
 