"use strict";

//   custom Redux impln of flux pattern istead of 
//   real Redux- Library to understand terminology

function createStore(reducer,initialState) {
    
    let state = initialState;
    let listeners = [];

    function getState() {
        return state;
    }
    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listener=>listener());  // notification to View-comp who subscrbed..
    }

    function subscribe(listener) {
        listeners.push(listener());
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

var initialState = 0;
var store = createStore(reducer,initialState);  // globa-var  ( for testing )

//---------------------------------------













