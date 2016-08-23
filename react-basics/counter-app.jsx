

var Button = React.createClass({
    handleClick: function () {
        this.props.handleClick(this.props.increment);
    },
    render: function () {
        return (
            <button className="btn btn-lg btn-danger" onClick={this.handleClick}>
                + {this.props.increment}
            </button>
        );
    }
});

var Result = React.createClass({
    render: function () {
        return (
            <div className="badge">
                {this.props.count}
            </div>
        );
    }
});




var Main = React.createClass({
    getInitialState: function () {
        return {count:10};  
    },
    handleClick: function (val) {
        this.setState({count:this.state.count+val});
    },
    render: function () {
        return (
            <div className="well">
                <Button handleClick={this.handleClick} increment={1}/>
                <Button handleClick={this.handleClick} increment={10}/>
                <Button handleClick={this.handleClick} increment={100}/>
                <hr/>    
                <Result count={this.state.count}/>
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('root'));