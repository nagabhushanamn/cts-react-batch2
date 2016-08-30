

// React's View Component
var Counter = React.createClass({
    componentDidMount: function () {
      // need Redux store
      let unsubscripe=store.subscribe(()=>{this.forceUpdate()});

    },
    incrementHandler: function () { 
      let amount = 1;
      var val = this.refs.amountField.value;
      if (val) {
        amount = Number.parseInt(val);
      }

      var action = { type: 'INCREMENT', amount: amount };
      store.dispatch(action);
      
    },
    decrementHandler: function () {
      let amount = 1;
      var val = this.refs.amountField.value;
      if (val) {
        amount = Number.parseInt(val);
      }

      var action = { type: 'DECREMENT', amount: amount };
      store.dispatch(action);
      
    },
    render: function () {

      var count = store.getState();   // complete state  from sinele tree...    

        return (
            <div className='card'>
                <div className='content'>
                  <div className='header'>{count}</div>
                </div>
                <div >
                  <div className='ui input' >
                    <input type='text' ref="amountField" placeholder='Enter amount...' />
                  </div>
                  <br/><br/>
                </div>
                <div className='ui bottom attached button' onClick={this.incrementHandler}>
                  <i className='add icon'></i>
                </div>
                <br/>
                <div className='ui bottom attached button' onClick={this.decrementHandler}>
                  <i className='minus icon'></i>
                </div>
            </div>
        );
    }
});


const DoubleCounter = React.createClass({
  componentDidMount: function () {
     this.unsubscripe=store.subscribe(()=>{this.forceUpdate()});
  },
  handleUnsubscribe: function () {
    this.unsubscripe();
  },
  render: function () {
    var count = store.getState();
    return (
      <div>
        <h2>double count: {count * 2} </h2> 
        <button onClick={this.handleUnsubscribe}>unsubscripe</button>
      </div>
    );
  }
});

const App = React.createClass({
  render: function () {
    return (
      <div>
         <Counter />
          <hr/>
         <DoubleCounter />
      </div>
    );
  }
});




//-----------------------------------------------------------

ReactDOM.render(<App />, document.getElementById('counter'));

//-----------------------------------------------------------