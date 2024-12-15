 export const deliveryOptions = [
  {
    id: '1',
    deliveryDays: '7',
    deliveryPrice: 0
  },
  {
    id: '2',
    deliveryDays: '3',
    deliveryPrice: 499
  },
  {
    id: '3',
    deliveryDays: '1',
    deliveryPrice: 999
  }
];
export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;
deliveryOptions.forEach((option) => {
if(option.id === deliveryOptionId) {
deliveryOption = option;
//console.log('Found delivery option:', option);
}
});
return deliveryOption || deliveryOption[deliveryPrice];
}