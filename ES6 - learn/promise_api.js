/*

  promise API:-
  
   --> to deffer  actions to future , then execute asych.

*/

// hotel-module
var hotel = {
    getCoffee: function() {
        var promise = new Promise(function(resolve, reject) {
            setTimeout(() => {
                //console.log('coffee ready...');
                 resolve('Capi');
                //reject('No Milk');
            }, 5000);

        });
        return promise;

    }
};



// trainer-module
var trainer = {
    doTeach: function() {
        console.log('teaching js...');
        console.log('need coffee...');
        var promise = hotel.getCoffee(); // sync-call
        console.log('got promise , deffering driking actions to future');
        var newPromise = promise.then(function(coffee) {
            console.log('yummy....' + coffee);
            return "by 2";
        }, function(reason) {
            console.log('ooops ,, shud go out ' + reason);
        });

        newPromise.then(function(coffee) {
            console.log('yummy....' + coffee);
        });

        console.log('continue firther teching.... end');
    }
};

trainer.doTeach();