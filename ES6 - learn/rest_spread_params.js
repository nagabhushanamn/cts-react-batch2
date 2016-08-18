"use strict";

var showCategories = function(productId, ...categories) {
    //console.log(categories instanceof Array);
    //console.log(categories);
    //console.log(arguments.length);
}

showCategories(123, 'hw', 'sw', "someware");
// showCategories(123);


//-----------------------------------------


// spread  parameters


// var maxPrice = Math.max(10, 20, 100, 40);
// console.log(maxPrice);


// var prices = [10, 20, 100, 40, 200];

// // var maxPrice = Math.max(prices[0],prices[1],prices[2]);
// var maxPrice = Math.max(...prices);
// console.log(maxPrice);

//-------------------------------------------


var menu1 = ['idly', 'vada', 'poori'];
var menu2 = ['biryani', 'other'];

var fullMenu = ["first", ...menu1, ...menu2, "last"];

//console.log(fullMenu);

//--------------------------------------------


var maxCode = Math.max(...
    "123456789");
// console.log(maxCode);


//--------------------------------------------

var codeArray = ["A", ...
    "BCD", "E"
];
console.log(codeArray);

//--------------------------------------------