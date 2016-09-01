
import {ADD_TODO,DELETE_TODO,EDIT_TODO,COMPLETE_TODO,COMPLETE_ALL,CLEAR_COMPLETED} from '../constants/ActionTypes'

var initialState = {
    todos: [
        { text: 'Learn React', completed: true, id: 1 }
    ]
};


export default function todos(state=initialState.todos,action) {
    
    console.log(action);
    switch (action.type){
        
        case ADD_TODO:
            return [
                {
                    text: action.text,
                    completed: false,
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1 // testing
                },
                ...state
            ];
            
        case DELETE_TODO:
            return state.filter(todo => { return todo.id !== action.id });
            
        case EDIT_TODO:
            return state.map(todo => { 
                return todo.id === action.id ? Object.assign({}, todo, {text:action.text}):todo
            });   

        case COMPLETE_TODO:
             return state.map(todo => { 
               return todo.id === action.id ? Object.assign({}, todo, {completed:!todo.completed}):todo
             });     

        case COMPLETE_ALL:
            const areAllMarked = state.every(todo => todo.completed);
            console.log(areAllMarked);
            return state.map(todo => Object.assign({}, todo, {
                completed: !areAllMarked
            }));
            
        case CLEAR_COMPLETED:
             return state.filter(todo => { return todo.completed === false });

        default:
            return state;    
    
    }

}


 