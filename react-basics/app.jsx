

var Button = React.createClass({
    getInitialState: function () {
        return {counter:10};  
    },
    clickHandler: function () {
        //console.log('u hit me..');
        this.setState({counter:this.state.counter+1}); // comp will get re-render
    },
    render: function () {
        return (
            <button className="ui primary button" onClick={this.clickHandler}>
                {this.state.counter}
            </button>
        );
    }
});

ReactDOM.render(<Button />, document.getElementById('root'));