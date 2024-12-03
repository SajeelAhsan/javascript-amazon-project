export let  cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6' ,
  quantity: 2
},
{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}
];

//This function will allows us to add products into the cart
export function addToCart(productId, quantity) {
  let matchingItem;
    cart.forEach((cartItem) => {
      if(productId === cartItem.productid)
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
        quantity 
      });
    }
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
 }