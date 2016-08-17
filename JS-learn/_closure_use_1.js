// ex. counter-module


/*

    best practice
    --------------

    avoid many globals in code

*/



// function init() {

//     var count = 0; // private

//     // public behav ( closures )    
//     return {
//         doCount: function() {
//             count++;
//         },
//         getCount: function() {
//             return count;
//         }
//     };

// }

// var counter = init();

//--------------------------------------------


// pattern : self executable or IIFE ( immediatly Invokable Func Expression)


var counter = (function() {

    var count = 0; // private

    // public behav ( closures )    
    return {
        doCount: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };

})();

/*
    --> can avoid globals
*/


//--------------------------------------------