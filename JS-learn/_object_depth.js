"use strict"

// var person = {
//     name: '',
//     age: 32
// };


// how to check property exist??

// way-1
//console.log(person.hasOwnProperty('name'));

// way-2

// if (person.name) {
//     console.log('name property exist');
// }

//way - 3

// if ("name" in person) {
//     console.log('name property exist');
// }

//----------------------------------------

// How to enumerate obj??

// var person = {
//     name: 'Nag',
//     age: 32
// };
// Object.defineProperty(person, 'age', {enumerable: false })

// for (var prop in person) {
//     console.log(prop + ":" + person[prop]);
// }

//------------------------------------------


// ES5  : obj accessor Properties


var person = {
    _name: 'Nag', // data property
    set name(newName) { // accessor property
        console.log('set name');
        if (newName) {
            this._name = newName;
        }
    },
    get name() {
        console.log('get name');
        return this._name;
    }
};

// person.name = 'New Nag'; // set
// console.log(person.name); // get

//------------------------------------------


// Object constraints

var person = {
    name: 'Nag'
};

//Object.defineProperty(person, 'name', { configurable: false, writable: false, enumerable: false })


//Object.defineProperty(person, 'name', { configurable: true })
//delete person.name;

//person.name = '';
// console.log(person.name);


//Object.preventExtensions(person);
//Object.seal(person);
// Object.freeze(person); // --->  immutable obj

//person.newProp = 'value';
//delete person.name;
//person.name = '...';

//--------------------------------------------------------


// var menu = ['biryani', 'idly'];

// menu[0] = null;
// delete menu[0];
// delete menu[1];

//-------------------------------------------------------