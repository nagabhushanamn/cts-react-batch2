/*

   JS data-structures
   -------------------

   1. simple / primitives

        a. string
        b. number
        c. boolean
        d. undefined
        e. null

        f. symbol  ( from es6 )


   2. complex / objects

       


*/


//----------------------------------------------------------

// string

var name = "Nag";
var selection = 'A';


//----------------------------------------------------------

// number

var count = 12;
var cost = 12.12;


//----------------------------------------------------------

// boolean

var found = true;

// imp note :   'falsy' values in JS-lang are

/*
    
    false,"",0,null,undefined,NAN

    ref : https://dorey.github.io/JavaScript-Equality-Table/

*/

//----------------------------------------------------------

// null

var person = null;


//----------------------------------------------------------

// undefined

var v;

//----------------------------------------------------------



// complex types  ( objects )

/*

  object  ==> collection key:value pair of any entity


  How to create obj in Js-lang ?

  syntax:

  var ref=new ConstructorFunction();

  e.g

       Object , Array , XMLHttpRequest , Person

*/


var person = new Object();
person.name = 'Nag'; // string
person.age = 32; // number
person.doWork = function() {
    console.log('teaching js');
};

delete person.age;


//----------------------------------------------------------


// some objects we can create with literal-style syntax


/*

    some built-in types

    Object
    Array
    RegExp
    Function


*/

//----------------------------------------------------------

// Object

var employee = new Object(); // creates obj's wrapper
employee.name = 'Nag';
employee.age = 32;
employee.doWork = function() {
    console.log('working...');
}



// literal-style  ( really good while creating any configuration objs)
var employee = {
    name: 'Nag',
    age: 32,
    doWork: function() {
        //...
    }
};

//----------------------------------------------------------


// Array

var arr = new Array();
arr[0] = "red";
arr.push("green");
arr.push("blue");


// literal style
var colors = ["red", "green", "blue"];


//----------------------------------------------------------

// RegExp

// ssn pattern   --> '\d{3}-\d{2}-\d{4}'

var ssnPattern = new RegExp('\\d{3}-\\d{2}-\\d{4}');


// literal style
var newssnPattern = /\d{3}-\d{2}-\d{4}/;


//----------------------------------------------------------

// Function

/*

   imp note : by default, every function in JS-lang is an 'object' it can have other properties and func.

*/

// var add = new Function('n1', 'n2', 'var result=n1+n2;return result;'); // difficult in read,debug and refactoring

// add.someProp = 123;
// add.method = function () {
//     console.log('some logic');
// }


// literal style

function add(n1, n2) {
    var result = n1 + n2;
    return result;
}


//----------------------------------------------------------


// how to access obj's properties


/*

    way-1 : '.'  notation  , when property is valid identifier
    way-2 : '[]' notation  , when property contains any spl chars

*/

var person = {
    name: 'Nag',
    'full-name': 'Nagabhushanam N'
};

console.log(person.name);
console.log(person['name']);

console.log(person['full-name']);

var p = "name";

console.log(person.p); // undefined
console.log(person[p]);

//----------------------------------------