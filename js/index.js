// ITERATION 1
let somaTotal = 0;
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceV = price.innerText;
  const quantityV = quantity.value;
  let subtotal = Number(priceV) * Number(quantityV);
  console.log(Number(subtotal));
  somaTotal = somaTotal + Number(subtotal);
  product.querySelector('.subtotal span').innerHTML = Number(subtotal);
}

function calculateAll() {
  const arrayProdutos = document.getElementsByClassName('product');
  for (let n = 0; n < arrayProdutos.length; n++) {
    let produto = arrayProdutos[n];
    updateSubtotal(produto);
  }
  console.log(somaTotal);
  document.querySelector('#total-value span').innerHTML = somaTotal;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
