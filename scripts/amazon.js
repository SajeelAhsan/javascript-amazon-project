import { formatCurrency } from './utils/money.js';
//import { cart} from '../data/cart-class.js';
import { cart, addToCart, calculateCartQuantity } from '../data/cart.js';
import { products, loadProducts } from '../data/products.js';

loadProducts(renderProductsGrid);

function renderProductsGrid(){
let productsHtml= '';
products.forEach((product)=>
{
  productsHtml += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsUrl()}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${product.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          ${product.extraInfoHtml()}

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
      `;
 });

 document.querySelector('.js-products-grid').innerHTML = productsHtml;
 
 
  //This function will allows us to update the products into the cart.
 function updateCartQuantity(){
  let cartQuantity = calculateCartQuantity();
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
 }
 //By calling this function here it will show the cart quantity into basket whenever the page loads.
 updateCartQuantity();
 document.querySelectorAll('.js-add-to-cart')
 .forEach((button) => {
  
  let addedMessageTimeoutId;

  button.addEventListener( 'click' , () => {
    const {productId} = button.dataset;
    
    const quantitySelector = document.querySelector(`.js-quantity-selector-${button.dataset.productId}`);
    const quantity = Number(quantitySelector.value);
    addToCart(productId, quantity);
    updateCartQuantity();
    const addedMessage = document.querySelector(`.js-added-to-cart-${button.dataset.productId}`);
    addedMessage.classList.add('added-to-cart-visible');
    // Check if a previous timeoutId exists. If it does,
      // we will stop it.
      if (addedMessageTimeoutId) {
        clearTimeout(addedMessageTimeoutId);
      }
      const timeoutId = setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-visible');
      }, 2000);
      // Save the timeoutId so we can stop it later.
      addedMessageTimeoutId = timeoutId; 
  });
 });
}
