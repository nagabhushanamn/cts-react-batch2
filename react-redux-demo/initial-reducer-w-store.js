"use strict";

//   custom Redux impln of flux pattern istead of 
//   real Redux- Library to understand terminology

function createStore(reducer) {

    let state = 0;
    let listeners = [];
    
    function getState() {
        return state;
    }
    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listener=>listener());  // notification to View-comp who subscrbed..
    }

    function subscribe(listener) {
        listeners.push(listener);
    }

    return {
        getState,
        dispatch,
        subscribe,
        // unsubscribe
    };

}

//-------------------------------------

function reducer(state,action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENT') {
        return state - action.amount;
    }else {
        return state;
    }
}

let store = createStore(reducer);

//---------------------------------------

// from View  ( in React )


store.subscribe(function () { 
    var newState = store.getState();
    console.log("New - state "+newState);
});

// when user clicks '+' button, create INCREMENT action

var incrementAction = {
    type: 'INCREMENT',
    amount:10
};

// dispatch 'increment' action to store
store.dispatch(incrementAction);
// console.log(store.getState());  // poll



var incrementAction = {
    type: 'INCREMENT',
    amount:20
};
store.dispatch(incrementAction);
// console.log(store.getState()); // poll



var decrementAction = {
    type: 'DECREMENT',
    amount:20
};
store.dispatch(decrementAction);
// console.log(store.getState()); // poll

//---------------------------------------










