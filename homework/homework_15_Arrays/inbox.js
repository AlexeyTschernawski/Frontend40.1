const arr = [1, 2, 3, 4, 5, 500, 7, 90, 1, 2, 7, 4, 3, 50];
const res = arr.filter(x => x > 10);
const filter = document.getElementById('div');
filter.innerHTML = arr;



const arr1 = [
    { ProductName: 'galaxi s24', price: 529.87, Manufacturer: 'Samsung' },
    { ProductName: 'J9', price: 514.58, Manufacturer: 'Huawei' },
    { ProductName: 'BG125', price: 700.50, Manufacturer: 'Sony' },
    { ProductName: 'tototo', price: 687.60, Manufacturer: 'Ugugu' },
    { ProductName: 'Ultra', price: 357.58, Manufacturer: 'LG' },
];

const pruductList = document.getElementById('div1');

arr1.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
    <strong>Prudact name: </strong>${product.ProductName} 
    <strong>Price: </strong> ${product.price} €
    <strong>Model: </strong>${product.Manufacturer}`;
    pruductList.appendChild(productDiv);
});


const inputPrice = document.getElementById('input');
const inputPriceBtn = document.getElementById('search');

const filteredProducts = arr1.filter(product => product.price > inputPrice);

filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
    <strong>Prudact name: </strong>${product.ProductName} 
    <strong>Price: </strong> ${product.price} €
    <strong>Model: </strong>${product.Manufacturer}`;
    pruductList.appendChild(productDiv);
});