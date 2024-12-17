import { renderOrderSummary } from "../../scripts/Checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart.js";

describe('test suite: renderOrderSummary', () => {
  it('displays the cart', () => {

    document.querySelector('.js-test-container').innerHTML= `
    <div class="js-order-summary"></div>
    <div class="js-return-to-home-link"></div>
    `;
    const product1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const product2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'
    spyOn(localStorage, 'getItem').and.callFake(() =>{
      return JSON.stringify([{
        productId: product1,
        quantity: 2, 
        deliveryOptionId: '1'
      },
      {
        productId: product2,
        quantity: 6,
        deliverOptionId: '1'
      }, ]);
    });   
   loadFromStorage();
   renderOrderSummary();
   expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2);
   expect(document.querySelector(`.js-product-quantity-${product1}`).innerText).toContain('Quantity: 2');
   expect(document.querySelector(`.js-product-quantity-${product2}`).innerText).toContain('Quantity: 6');
  });

  it('Delete the Product from the Cart', () => {
    document.querySelector('.js-test-container').innerHTML= `
    <div class="js-checkout-header"></div>
    <div class="js-order-summary"></div>
    <div class="js-return-to-home-link"></div>
    <div class="js-payment-summary"></div>
    `;
    const product1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const product2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'
    spyOn(localStorage, 'getItem').and.callFake(() =>{
      return JSON.stringify([{
        productId: product1,
        quantity: 2, 
        deliveryOptionId: '1'
      },
      {
        productId: product2,
        quantity: 6,
        deliverOptionId: '1'
      }, ]);
    });   
   loadFromStorage();
   renderOrderSummary();
   document.querySelector(`.js-delete-link-${product1}`).click();
   expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
  // expect(document.querySelector(`.js-cart-item-container-${product1}`).toEqual(null));
  // expect(document.querySelector(`.js-cart-item-container-${product2}`).not.toEqual());
  });
});


