

var Button = React.createClass({
    clickHandler: function () {
        //console.log('btn clicked...');  
        this.props.doIncrement(this.props.increment);
    },
    render: function () {
        return (
            <button className="ui primary button" onClick={this.clickHandler}>
                +{this.props.increment}
            </button>
        );
    }
});


var Result = React.createClass({
    render: function () {
        return (
            <div className="badge">
                {this.props.localCounter}  
            </div>
        );
    }
});


var Main = React.createClass({
    getInitialState: function () {
        return {counter:10};  
    },
    doIncrement: function (inc) {
        this.setState({counter:this.state.counter+inc}); // comp will get re-render
    },
    render: function () {
        return (
            <div className="well">
                <Button doIncrement={this.doIncrement} increment={1}/>
                <Button doIncrement={this.doIncrement} increment={10}/>
                <Button doIncrement={this.doIncrement} increment={100}/>
                <hr/>
                <Result localCounter={this.state.counter}/>  
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('root'));