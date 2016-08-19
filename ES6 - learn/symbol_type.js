//var mySymbol = Symbol('my symbol');

//console.log(typeof mySymbol);
// console.log(mySymbol.toString());

//--------------------------------------


// var s1 = Symbol('event');
// var s2 = Symbol('event');

// console.log(s1 === s2);

//-----------------------------------

// var s = Symbol.for('event');

// var s2 = Symbol.for('event');

// console.log(s === s2);

//------------------------------------------

// var book = {
//     id: 3123123123,
//     [Symbol.for('desc')]: 'this is desc'
// };

// console.log(book[Symbol.for('desc')]);

//-------------------------------------------


// well-known symbols

var Blog = function() {

}
Blog.prototype[Symbol.toStringTag] = 'Blog';

var blog = new Blog();

console.log(blog.toString());

//------------------------------------------


var menu = ['item1', 'item2', 'item3'];
var it = menu[Symbol.iterator]();

//-------------------------------------------

let idMaker = {
    [Symbol.iterator]() {
        let nextId = 8001;
        return {
            next() {
                let value = nextId > 8005 ? undefined : nextId++;
                let done = !value;
                return { value, done };
            }

        };
    }
};

// for (var id of idMaker) {
//     console.log(id);
// }


function f(id1, id2, id3, id4, id5) {
    console.log(id1);
    console.log(id2);
    console.log(id3);
    console.log(id4);
    console.log(id5);
}

f(...idMaker);