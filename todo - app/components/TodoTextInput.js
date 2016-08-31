
import React,{Component,PropTypes} from 'react';

class TodoInputText extends Component{

    constructor(props,context) {
        super(props, context);
        //this.state = {text:''};
    }

    handleSubmit(e) {
        const text = e.target.value;
        if (e.which === 13) {
            this.props.onSave(text);
            //this.setSate({text:''});
        }
    }

    render() {
        return (
            <input
                autoFocus='true'
                placeholder={this.props.placeholder}
                className='new-todo'
                type="text"
                onKeyDown={this.handleSubmit.bind(this)}
                />
        );
    }

}


TodoInputText.propTypes = {
    onSave:PropTypes.func.isRequired,
    placeholder:PropTypes.string
};

export default TodoInputText;