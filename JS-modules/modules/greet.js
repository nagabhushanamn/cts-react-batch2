// console.log('hello....');

var message = "Hello..."; // private to this module..

function sayHello() {
    console.log(message);
}

// sayHello();

module.exports = sayHello;