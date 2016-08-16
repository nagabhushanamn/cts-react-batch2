"use strict"


/*

  function  --> new execution context
            --> is an object

        
  we can create function-obj in 2 ways in JS-lang


  1. function declaration  ( Named function )

     --> always get hoisted with func-obj to top-of context

     prefer:
     --> to create func-obj at context-creation phase, no-matter where you declared.

  2. function expression  ( anonymous function )

     --> will not get hoisted with func-obj. we must invoke after expression.

      prefer:
      --> to create function-obj at context-execution phase based on input or conditions
    

*/

//--------------------------------------------------------

// function declaration:-

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12, 13));

//--------------------------------------------------------

// function expression:-


//console.log(add(12, 13));  // will throw TypeError

// var add = function(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12, 13));

//--------------------------------------------------------


// JS  - functional programming language


// a. functions as values


function sayHello() {
    console.log('Hello....');
}

var sayHi = sayHello;

// sayHi();


//--------------------------------------------------------


// b. function as arguments


function greet(f) {
    if (typeof f === 'function') {
        f();
        return;
    }
    console.log('Hello....');
}

//greet();

// with spanish locale
//greet(function () { console.log('Ola..'); });


//e.g


var nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort();
nums.sort(function(a, b) {
    return a - b;
});



//--------------------------------------------------------


// c. function as return values


function teach() {
    console.log('teaching....');

    function learn() {
        console.log('learn....');
    }

    //learn();

    return learn;

}

// var learnFunc = teach();
// learnFunc();
// learnFunc();
// learnFunc();
// learnFunc();


//--------------------------------------------------------



// function arguments

/*
    every function-context has an implicit object called 'arguments' to hold
    all arguments given

    arguments --> is an array-like object
*/


function reflect(a) {
    console.dir(arguments);
    return arguments[0];
}

//console.log(reflect(12, 13, 14));



// e.g , functions to return sum of n numbers

function sum() {
    var i = 0,
        len = arguments.length,
        result = 0;

    while (i < len) {
        result += arguments[i];
        i++;
    }

    return result;

}


//--------------------------------------------------------


// var-scope:-

/*

    1. global-scope
    2. function-scope

    3. block-scope  ( from es6 )

*/

var v1 = 1000; // global-scope variables


function f1() {
    var v2 = 2000; // Local , function-context scope
}

function f2() {
    {
        let v3 = 3000; // will not hoisted...
    }
    console.log(v3);
}

// f2();

//--------------------------------------------------------

// implicit globals  ( variables without 'var' keyword will become globals in non-strict mode)

function g() {
    var p = 1000;
}

g();

//console.log(p);


//--------------------------------------------------------