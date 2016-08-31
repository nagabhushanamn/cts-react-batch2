
import React, {Component,PropTypes} from 'react';
import TodoInputText from './TodoTextInput'

class Header extends Component{

    handleSave(text) {
        if (text.length !== 0) {
            this.props.addTodo(text);
        }
    }    

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoInputText
                    onSave={this.handleSave.bind(this)}
                    placeholder='what needs to be done ?'/>
            </header>   
        );
    }

}

Header.propTypes = {
    addTodo:PropTypes.func.isRequired
}


export default Header;