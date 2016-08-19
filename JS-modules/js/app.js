console.log('in app.js');


// 1.js
// App.a.doWork();


require(null, ['js/1'], function(a) {

    a.doWork();

});