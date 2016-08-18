/*

*/

// syntax


// var getPrice = () => 5.99;
// console.log(getPrice());

//----------------------------------


// var getPrice = count => count * 4.00;
// console.log(getPrice(2));

//----------------------------------


// var getPrice = (count, tax) => count * 4.00 * (1 + tax);
// console.log(getPrice(2, .07));



//----------------------------------


// var getPrice = (count, tax) => {
//     var price = count * 4.00;
//     price *= (1 + tax);
//     return price;
// };
// console.log(getPrice(2, .07));

//-------------------------------------------



// adv of arrow functions:-


// use-1

var nums = [1, 3, 10];
//nums.sort();

// nums.sort(function (a, b) { return a - b; });
// nums.sort((a, b) => a - b);

// console.log(nums);

//-------------------------------------------



// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     // var self = this;
//     // setInterval(function() {
//     //     self.age++;
//     //     console.log(self.age);
//     // }, 1000);


//     setInterval(() => { 
//         this.age++;
//         console.log(this.age);
//     } ,1000);

// }

// var p1 = new Person("Nag", 32);


//-------------------------------------------



// var invoice = {
//     number: 123,
//     process: function() {
//         console.log(this);
//     }
// };

// invoice.process();


//----------------------------------------------


// var invoice = {
//     number: 123,
//     process: () => console.log(this)
// };

// invoice.process();


//----------------------------------------------


// var invoice = {
//     number: 123,
//     process: function() {

//         //return () => console.log(this.number);

//         // return function() {
//         //     console.log(this.number);
//         // }
//     }
// };

// invoice.process()();

//----------------------------------------------


var invoice = {
    number: 123,
    process: function() {
        return () => console.log(this.number);
    }
};


var newInstance = { number: 456 };

invoice.process().call(newInstance);

/*
    imp-note:

    we cant bind arrow functions to any object .

*/

//----------------------------------------------