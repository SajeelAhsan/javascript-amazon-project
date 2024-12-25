import {renderCheckoutHeader} from "./Checkout/checkoutHeader.js";
import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import '../data/cart-class.js' ;


Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve();
    });
  }).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  })
]).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});








/*new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

/*loadProducts(() =>{
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});*/


