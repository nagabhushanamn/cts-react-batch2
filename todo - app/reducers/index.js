

import {combineReducers} from 'redux'
import todos from './todos'; 

//...

var rootReducer = combineReducers({
    todos
});

export default rootReducer;
