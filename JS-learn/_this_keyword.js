// why we need 'this' keyword ?

/*

    to access obj's properties in function we need obj's reference

    best-practice:-

    Never access obj's properties in function with reference var-names ,
    try to use 'this' keyword.

*/

// var person = {
//     pname: 'Nag', // property of person-obj
//     sayName: function() {
//         console.log('im ' + this.pname);
//     }
// };

// //person.sayName(); // New context

// var p = person;
// person = { pname: 'Ria' };

// p.sayName();


//----------------------------------------------------------------------


// var p1 = { name: 'Nag', sayName: function() { console.log('im ' + this.name) } };
// var p2 = { name: 'Ria', sayName: function() { console.log('im ' + this.name) } };


/*

    owner of 'execution context' is 'this'

*/

// function sayNameForAll() {
//     console.log('im ' + this.name);
// }

// static function binding

// var p1 = { name: 'Nag', sayName: sayNameForAll };
// var p2 = { name: 'Ria', sayName: sayNameForAll };


// sayNameForAll(); // im ''  ,  function-invocation  ( context owned by 'global-obj')  ( this ---> global-obj)
// p1.sayName(); // im Nag    ,  method-invocation    ( context owned by 'invoker-obj') ( this ---> invoker-obj)
// p2.sayName(); // im Ria


//----------------------------------------------------------------------

// dynamic function-binding

var p1 = { name: 'Nag' };
var p2 = { name: 'Ria' };


var personServices = {
    sayName: function(message, from) {
        console.log(message + ' im ' + this.name + " : " + from);
    }
};


//personServices.sayName();  // method-invocation



// Eager invocation

// personServices.sayName.call(p1, "Hello", "Bengalore"); // 
// personServices.sayName.call(p2, "Hi", "Chennai"); //

// personServices.sayName.apply(p1, ["Hello", "Bengalore"]); // 
// personServices.sayName.apply(p2, ["Hi", "Chennai"]); //


// on event , function invocation

var greetFunc = personServices.sayName.bind(p1, "Hello", "Bengalore");

setTimeout(greetFunc, 5000);



//----------------------------------------------------------------------


// i need 1000+ person objs

/*

     to create similar objs , we need either ConstructorFunctions or class ( from ES6)

*/

// ConstructorFunction

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log('im ' + this.name);
    }
}

var p1 = new Person('Nag', 32); // Constructor-Invocation  ( context owned by new-obj )
var p2 = new Person('Ria', 1);



//--------------------------------------------------------


/*

   in JS , we can invoke funtiokn in 4 ways


   way-1 : function-invocation           ( this --> global-obj )
   way-2 : method-invocation             ( this --> invoker-obj)
   way-4 : call/apply/bind invocation    ( this --> arg-obj    )
   way-4 : constructor-invocation        ( this --> new-obj    )



*/


//--------------------------------------------------------