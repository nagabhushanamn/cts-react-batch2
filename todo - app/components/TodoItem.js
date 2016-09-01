


import React, {Component,PropTypes} from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component{

    constructor(props,context) {
        super(props, context);
        this.state = {editing:false};
    }

    handleDoubleClick(e) {
        this.setState({editing:true});
    }

    handleSave(id,text) {
        if (text.length === 0) {
            this.props.deleteTodo(id);
        } else {
            this.props.editTodo(id, text);
        }
         this.setState({editing:false});
    }
    
     render() {

         let {todo,deleteTodo,completeTodo} = this.props; // es6  ( destructuring )

         let element;            
         if (this.state.editing) {
             element =
                 <TodoTextInput
                 onSave={(text) => { this.handleSave(todo.id,text) }}
                 text={todo.text}
                 editing={this.state.editing}
                />
         } else {
             element =
            <div className="view">
                 <input type="checkbox"
                     onChange={() => { completeTodo(todo.id) } }
                     checked={todo.completed}
                     className="toggle"/>
                 <label onDoubleClick={this.handleDoubleClick.bind(this) }>
                     {todo.text}
                 </label>
                 <button onClick={() => { deleteTodo(todo.id) } } className="destroy"></button>
             </div>
         }    

        return (
            <li className={classnames({
                completed: todo.completed,
                editing:this.state.editing
              })}>
                {element}
            </li>     
        );    
    }

}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo:PropTypes.func.isRequired
};


export default TodoItem;