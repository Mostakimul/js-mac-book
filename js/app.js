/**
 * memory8gb
 * memory16gb
 * storage256gb
 * storage512gb
 * storage1tb
 * deliveryFree
 * deliveryCost
 * bestPrice
 * extraMemoryCost
 * extraStorageCost
 * deliverCharge
 * totalPrice
 * promoCode
 * promoApply
 * finalTotal
 */

const memory8gb = document.getElementById('memory8gb');
const memory16gb = document.getElementById('memory16gb');

const storage256gb = document.getElementById('storage256gb');
const storage512gb = document.getElementById('storage512gb');
const storage1tb = document.getElementById('storage1tb');

const deliveryFree = document.getElementById('deliveryFree');
const deliveryCost = document.getElementById('deliveryCost');

const bestPrice = document.getElementById('bestPrice');
const extraMemoryCost = document.getElementById('extraMemoryCost');
const extraStorageCost = document.getElementById('extraStorageCost');
const deliverCharge = document.getElementById('deliverCharge');
const totalPrice = document.getElementById('totalPrice');

const promoCode = document.getElementById('promoCode');
const promoApply = document.getElementById('promoApply');
const finalTotal = document.getElementById('finalTotal');

// totalPrice without Promo
function priceWithoutPromo() {
  let combinePrice =
    parseInt(bestPrice.innerText) +
    parseInt(extraMemoryCost.innerText) +
    parseInt(extraStorageCost.innerText) +
    parseInt(deliverCharge.innerText);
  totalPrice.innerText = combinePrice;
  finalTotal.innerText = combinePrice;
}

// memory selection
function memorySelection(memory) {
  // console.log(memory);
  if (memory == '16gb') {
    extraMemoryCost.innerText = 180;
  } else {
    extraMemoryCost.innerText = 0;
  }
  priceWithoutPromo();
}

// Memory reference
memory8gb.addEventListener('click', function () {
  memorySelection('8gb');
});
memory16gb.addEventListener('click', function () {
  memorySelection('16gb');
});

// storage selection
function storageSelection(storage) {
  if (storage == '512gb') {
    extraStorageCost.innerText = 100;
  } else if (storage == '1tb') {
    extraStorageCost.innerText = 180;
  } else {
    extraStorageCost.innerText = 0;
  }
  priceWithoutPromo();
}

// storage reference
storage256gb.addEventListener('click', function () {
  storageSelection('256gb');
});
storage512gb.addEventListener('click', function () {
  storageSelection('512gb');
});
storage1tb.addEventListener('click', function () {
  storageSelection('1tb');
});

// delivery selection
function deliverySelection(delivery) {
  if (delivery == 'cost') {
    deliverCharge.innerText = 20;
  } else {
    deliverCharge.innerText = 0;
  }
  priceWithoutPromo();
}

// delivery reference
deliveryFree.addEventListener('click', function () {
  deliverySelection('free');
});
deliveryCost.addEventListener('click', function () {
  deliverySelection('cost');
});

// total price with promo
function priceWithPromo(promo) {
  let currentFinalTotal = parseInt(finalTotal.innerText);
  let promoAmount = (currentFinalTotal * promo) / 100;
  console.log(promoAmount);
  let afterPromo = currentFinalTotal - promoAmount;
  finalTotal.innerText = afterPromo;
  promoCode.value = '';
}

// promo reference
promoApply.addEventListener('click', function () {
  const userPromo = promoCode.value;
  if (userPromo == 'stevekaku') {
    priceWithPromo(20);
  } else {
    priceWithoutPromo();
  }
});
