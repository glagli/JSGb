"use stict";

console.log("task1_1");
console.log("es5");

function ProductEs5(name, price) {
    this.name = name;
    this.price = price;
}

ProductEs5.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75
}

let product1 = new ProductEs5("Orange", 500);
console.log('Начальные характеристики продукта: ' + 'name = ' + product1.name + ', price = ' + product1.price);
product1.make25PercentDiscount();
console.log('Xарактеристики продукта после применения функции: ' + 'name = ' + product1.name + ', price = ' + product1.price);

console.log("_____________________________________________________");
console.log("es6");

class ProductEs6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75
    }
}

let product2 = new ProductEs6("Chiken", 700);
console.log('Начальные характеристики продукта: ' + 'name = ' + product2.name + ', price = ' + product2.price);
product2.make25PercentDiscount();
console.log('Xарактеристики продукта после применения функции: ' + 'name = ' + product2.name + ', price = ' + product2.price);
