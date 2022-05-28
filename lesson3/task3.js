"use stict";

console.log("-----------------------------------------------------");
console.log("task3");
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(product => {
    product.price = product.price -(product.price * 15  / 100) 
});
console.log(products);