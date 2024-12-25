import {renderCheckoutHeader} from "./Checkout/checkoutHeader.js";
import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import '../data/cart-class.js' ;

loadProducts(() =>{
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});


