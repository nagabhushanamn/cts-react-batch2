

// reducer   --> function process state with given action

function reducer(state,action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENT') {
        return state - 1;
    }else {
        return state;
    }
}


var incerementAction = {
    type: 'INCREMENT',
    amount:1
};

console.log(reducer(0, incerementAction));
console.log(reducer(1, incerementAction));
console.log(reducer(5, incerementAction));

var unknownAction = {
    type: 'UNKNOWN',
    amount:1
};

console.log(reducer(5, unknownAction));


var decerementAction = {
    type: 'DECREMENT',
    amount:1
};

console.log(reducer(5, decerementAction));


