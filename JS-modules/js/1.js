// (function() {

//     App.b.doWork(); // 2.js
//     App.c.doWork(); // 3.js

//     var o = {
//         doWork: function() {
//             console.log('work-1....');
//         }
//     };

//     App.a = o; // export    

// })();

//-------------------------------------------

//  AMD spec

define('js/1', ['js/2','js/3'], function(b,c) {

    b.doWork();
    c.doWork();

    var o = {
        doWork: function() {
            console.log('work-1....');
        }
    };

    return o;

});