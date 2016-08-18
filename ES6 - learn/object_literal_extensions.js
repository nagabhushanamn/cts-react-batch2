"use strict";


var price = 50.99,
    quantity = 10;

// var productView = {
//     price,
//     quantity
// };

//console.log(productView);

//-------------------------------------


// var productView = {
//     price,
//     quantity,
//     calculateValue() {
//         return this.price + this.quantity;
//     }
// };

// console.log(productView.calculateValue());

//---------------------------------------

// var productView = {
//     price,
//     quantity,
//     "calculate value" () {
//         return this.price + this.quantity;
//     }
// };

// console.log(productView['calculate value']());

//---------------------------------------


// var field = "dynamicField";

// var productView = {
//     [field]: price
// };

// console.log(productView);

// ---------------------------------------

// var field = "dynamicField";
// var method = 'doIt';

// var productView = {
//     [field + "-001"]: price,
//     [method + "-001"]() {
//         console.log('in a method');
//     }
// };

// console.log(productView);
// productView['doIt-001']();

// ---------------------------------------


// var prop = "productId";

// var productView = {
//     set [prop]() {},
//     get [prop]() {}
// };

// ---------------------------------------