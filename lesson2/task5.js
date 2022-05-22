"use stict";

// task5
function mathOperation(number_one, number_two, operation) {
    switch (operation) {
        case "сумма":
            return alert(`Cумма числел: ${number_one} + ${number_two} = ` + sum(number_one, number_two));
        case "разность":
            return alert(`Разность числел: ${number_one} - ${number_two} = ` + dif(number_one, number_two));
        case "умножение":
            return alert(`Умножение числел: ${number_one} * ${number_two} = ` + mult(number_one, number_two));
        case "деление":
            return alert(`Деление числел: ${number_one} / ${number_two} = ` + div(number_one, number_two));

    }
}

function sum(number_one, number_two) {
    return number_one + number_two;
}

let dif = (number_one, number_two) => {
    return number_one - number_two;
}

let mult = (number_one, number_two) => number_one * number_two;

function div(number_one, number_two) {
    return number_one / number_two;
}

mathOperation(12, 4, "сумма")
mathOperation(5, 15, "разность")
mathOperation(5, 6, "умножение")
mathOperation(36, 6, "деление")