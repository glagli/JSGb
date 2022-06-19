"use strict";
/* 
Разметка товара:
*/

{/* <div class="product">
    <div>${products.phones.name}</div>
    <img src=`${products.phones.imageUrl}` alt=""> </img>
    <div>${products.phones.price}</div>
    <a href=`https://example.com/producs/${products.phones.id}`> Подробнее </a>
</div> */}


const products = {
    phones: [
        {
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [
        {
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [
        {
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

let my_buttons = document.querySelectorAll('button'); 
my_buttons.forEach(my_button => {
    my_button.addEventListener('click',function(event){
        clickHandler(event)
    })
 });       

 let my_product = document.querySelector('.products'); 
/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    let my_product = document.querySelector('.products'); 
    my_product.innerHTML = "";

    //в showCategory надо передать строку с типом категории, тип берите
    //из атрибута data-type у кнопки, по которой кликнули.
    let type_category = event.target.dataset.type;
    showCategory(type_category)
}

/**
 * Функция берет товары (объекты) из соответствующего массива phones,
 * tablets или tv. Генерирует разметку, используя getProductMarkup
 * и вставляет в .products
 * @param {string} category сюда должно прилетать значение атрибута data-type у кнопки,
 * по которой кликнули.
 */
function showCategory(category) {
    let result = ''
    if (category=='phones'){
        for (let i = 0; i < products.phones.length; i++) {
            result += getProductMarkup(products.phones[i])    
        }
        my_product.innerHTML = result;
    }
    if (category=='tablets'){
        for (let i = 0; i < products.tablets.length; i++) {
            result += getProductMarkup(products.tablets[i])    
        }
        my_product.innerHTML = result;
    }
    if (category=='tv'){
        for (let i = 0; i < products.tv.length; i++) {
            result += getProductMarkup(products.tv[i])    
        }
        my_product.innerHTML = result;
    }
}

/**
 * @param {Object} product объект из массива phones, tablets или tv.
 * @param {number} product.id id продукта
 * @param {string} product.name название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.imageUrl путь до картинки товара
 * @returns {string} html-разметка для товара по аналогии из комментария
 * в верху этого файла.
 */
function getProductMarkup(product) {
    let result_product = 
    `<div>${product.name}</div> \n
    <img src=${product.imageUrl} alt=""> </img> \n
    <div>${product.price}</div> \n
    <a href=https://example.com/producs/${product.id}> Подробнее </a>`

    return result_product
}
