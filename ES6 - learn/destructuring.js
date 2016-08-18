// use strict

// var salary = [30000, 50000, 75000];

// var low = salary[0];
// var avaerage = salary[1];
// var high = salary[2];


// let [low, avaerage, high] = salary;

// console.log(high);

//------------------------------------------

// var salary = [30000, 50000];
// let [low, avaerage, high] = salary;
// console.log(high);



//------------------------------------------

// var salary = [30000, 50000, 75000];
// let [low, ,high] = salary;
// console.log(high);


//-------------------------------------------

// var salary = [30000, 50000, 75000];
// let [low, ...remining] = salary;
// console.log(remining);



//-------------------------------------------

// var salary = [30000, 50000];
// let [low, avaerage, high = 88000] = salary;
// console.log(high);

//-------------------------------------------

// var salary = [30000, 50000, [88000, 99000]];
// let [low, aveerage, [actualLow, actualHigh]] = salary;

// console.log(actualLow);

//-------------------------------------------

// let [low, high];
// var salary = [30000, 50000];
// [low, high] = salary;

//-------------------------------------------

// let salary = {
//     low: 30000,
//     average: 50000,
//     highest: 75000
// };

// let { low, average, highest: high } = salary;

// console.log(high);

//-------------------------------------------


let newLow, newAverage, newHigh;


let salary = {
    low: 30000,
    average: 50000,
    high: 75000
};

({ low: newLow, average: newAverage, high: newHigh } = salary);


//-------------------------------------------

// let [maxCode, minCode] = "AZ";

// console.log(minCode);


//-------------------------------------------

// let [low, high] = undefined;
// let [low, high] = null;

// let [low, high] = [,];
// console.log(low);

//--------------------------------------------


//let [low, high] = [5, 10];


//--------------------------------------------


for ([a, b] of[[5, 10]]) {
    console.log('once..');
    console.log(a);
    console.log(b);
}


//--------------------------------------------