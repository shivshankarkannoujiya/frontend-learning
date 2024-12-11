function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("lemon Tea");
// console.log(teaOrder);

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }

  return confirmOrder();
}

let orderConfirmation = orderTea("oolong Tea");
// console.log(orderConfirmation);

const calculateTotal = (price, quantity) => price * quantity;
let totalCost = calculateTotal(2, 4);
// console.log(totalCost);
