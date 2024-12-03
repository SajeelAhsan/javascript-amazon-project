export const cart = [];

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