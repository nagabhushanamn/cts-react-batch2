/*

    Inheritence

    JS --> using 'protypes' can bring Inheritence



    best-practice:-

    Never augment built-in properties 

*/

function Person(name, age) {

    this.name = name;
    this.age = age;
    // this.sayName = function() {
    //     console.log('im ' + this.name);
    // };
    // this.sayAge = function() {
    //     console.log('im ' + this.age + " old");
    // };
}

Person.prototype.sayName = function() {
    console.log('im ' + this.name);
};
Person.prototype.sayAge = function() {
    console.log('im ' + this.age + " old");
};

var p1 = new Person('Nag', 32);
var p2 = new Person('Ria', 1);


var p11 = Object.create(p1);


///--------------------------------------------------

/// <reference path="https://www.pluralsight.com/blog/software-development/understanding-javascript-prototypes" />
