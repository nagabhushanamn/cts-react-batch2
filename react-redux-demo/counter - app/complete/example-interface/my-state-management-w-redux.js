"use strict";


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
var store = Redux.createStore(reducer,initialState);  // globa-var  ( for testing )

//---------------------------------------













