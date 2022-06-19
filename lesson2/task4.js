"use stict";

// task4
alert("Cумма числел: 4 + 5 = "+sum(4,5));
alert("Деление числел: 12 / 4 = "+div(12,4));

function sum(number_one,number_two){
    return number_one + number_two;
}

let dif = (number_one,number_two) => {
    return number_one - number_two;
}

let mult = (number_one,number_two) => number_one * number_two;

function div(number_one,number_two){
    return number_one / number_two;
}


alert("Разность числел: 10 - 3 = "+dif(10,3));
alert("Умножение числел: 5 * 6 = "+mult(5,6));
