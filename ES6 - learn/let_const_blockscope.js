"use strict";

//-------------------------------------

// console.log(productId);
// var productId = 12;

//-------------------------------------


// console.log(productId);
// let productId = 12;

//-------------------------------------


// let productId = 12;
// console.log(productId);

//-------------------------------------

// let productId;
// console.log(productId);

//-------------------------------------


// let productId = 12;
// {
//     let productId = 2000; // block-scoped
// }
// console.log(productId);

//-------------------------------------

// {
//     let productId = 2000; // block-scoped
// }
// console.log(productId);

//-------------------------------------

// function updateProductId() {
//     productId = 123;
// }
// let productId = null;
// updateProductId();
// console.log(productId);

//-------------------------------------

// let productId = 123;
// for (let productId = 0; productId < 10; productId++) {

// }
// console.log(productId);

//-------------------------------------

// var updateFunctions = [];
// for (let i = 0; i < 2; i++) {
//     updateFunctions.push(function() {return i });
// }

// console.log(updateFunctions[1]());


//==================================================


// var PI = 3.14;
// Object.defineProperty(window, 'PI', { writable: false });



// const PI = 3.14;
// console.log(PI);


//-------------------------------------

// const MARKUP_PCT = 100;
// // MARKUP_PCT = 10;  
// console.log(MARKUP_PCT);


//-------------------------------------


const MARKUP_PCT = 100;
if (MARKUP_PCT > 0) {
    const MARKUP_PCT = 10; // block-scoped
}
console.log(MARKUP_PCT);

//-------------------------------------


/*

let vs const    are 'block-scoped ' variable

let  --> mutable
const --> immutable

*/