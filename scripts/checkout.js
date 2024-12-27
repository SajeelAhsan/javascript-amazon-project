import {renderCheckoutHeader} from "./Checkout/checkoutHeader.js";
import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import '../data/cart-class.js' ;


async  function loadPage(){

  try {
    //Manually handling the error in the code.
    //throw 'error1'

    await loadProductsFetch();
    /*const value = await new Promise((resolve, reject) => {
      //throw 'error2';
      loadCart(()=>{
        //second way of handling error but if occurs in future.
        //reject(''error3)
        resolve('value');
      });
    });*/
  }
  catch(error){
  console.log('Unexpected error. Please try agian later');
  }
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*Promise.all([
  loadProductsFetch(),
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


