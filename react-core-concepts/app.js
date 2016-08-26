


// using JavaScript-syntax

// var reactBoldEle=React.createElement('b',null,'React');
// var reactRootEle=React.createElement('div',null,reactBoldEle);
// ReactDOM.render(reactRootEle,document.getElementById('root'))


// JSX

// var reactRootEle = (<div><b>Welcome to React</b></div>);
// ReactDOM.render(reactRootEle,document.getElementById('root'))


//-------------------------------------------------------------

// React components ( custom elements )  -> ( JavaScript syntax)

// Component Class

// var Message = React.createClass({
//     render: function () {
//         // return react-element
//         return React.createElement('div',null,'Hello World');
//     }
// });

// var message = React.createElement(Message, null, null);

// ReactDOM.render(message,document.getElementById('root'));

//-------------------------------------------------------------

// React components ( custom elements )  -> ( jsx syntax)

// Component Class

// var Message = React.createClass({
//     render: function () {
//         // return react-element
//         return (<div>{this.props.text}</div>);
//     }
// });

// var message = (<Message text="Hi World"/>);
  

// ReactDOM.render(message, document.getElementById('root'));

//-------------------------------------------------------------



// JSX - syntax

//-------------------------------------------------------------

// a. JSX - attribute expression

// const warningLevel = 'debug';
// const alertComponent = (<Alert
//                             color={warningLevel==='debug'?'grey':'red'}
//                             log={true}
//                         />);

//-------------------------------------------------------------

// b. JSX -  conditional child expressions


// const renderAdminMenu = function () {
//     return (<MenuLink to="/users">User Account</MenuLink>);
// }

// const userLevel = 'admin'; // this.props

// const Menu = React.createClass({
//     render: function () {
//         return (
//             <ul>
//                 <li>Menu</li>
//                 {userLevel==='admin'&&renderAdminMenu()}
//             </ul>
//         );
//     }
// });

//-------------------------------------------------------------

// JSX - boolean attributes

// var itemDisabled = true;
// var disabledInpComp = (<input name="Name" disabled={itemDisabled}/>);

//-------------------------------------------------------------


// JSX - spread syntax



// var Message = React.createClass({
//     render: function () {
//         // return react-element
//         return (<div>{this.props.msg} - {this.props.who}</div>);
//     }
// });


// var myProps = {msg:'Hello',who:"World"};

// // var message = (<Message msg="Hello" recipient="World"/>);
// // var message = (<Message msg={myProps.msg} who={myProps.who}/>);
// var message = (<Message {...myProps}/>);
  

// ReactDOM.render(message, document.getElementById('root'));


//-------------------------------------------------------------

// gotcha(s)

// var divComp = (<div className="jumbotron"></div>);
// var formGroup = (<div><label htmlFor="dob">DOB</label><input id="dob"/></div>);

// var msgBox = (<div className="jumbotron"> Welcome  to world {'\uD83D\uDC2C'} </div>);
// ReactDOM.render(msgBox, document.getElementById('root'));

//-------------------------------------------------------------




// React  - components

/*

  a. stateless components
  b. statefull components



 component - configuration
 -------------------------

  render() --> the one required func on every ReactComponent
  props    --> the "input parameters" to our comp  ( immutable )
  state    --> a way hold data that is local to a component ( that affects rendering)
  context  --> a "global variable" for our components under one context ( e.g TimersDashboard context)
  statics  --> to create 'class methods ' on our comps
  children --> how to interact and manipulate child components

*/

//------------------------------------------------------------


// var Message = React.createClass({
//     render: function () {
//         // return react-element
//         // return (<div>{this.props.msg} - {this.props.who}</div>);
//         return null;
//     }
// });

// or  es6

// class Message extends React.Component{
//     render() {
//         return (<div>{this.props.msg} - {this.props.who}</div>);
//     }

//}

//------------------------------------------------------------

// props

// var Message = React.createClass({
//     getDefaultProps: function () {
//         return {
//             text:'Hello.....'
//         };
//     },
//     propTypes:{
//         text:React.PropTypes.string
//     },
//     render: function () {
//         return (<div>{this.props.text}</div>);
//     }
// });

// var message = (<Message text={'Hello World'} />);

// ReactDOM.render(message, document.getElementById('root'));



//------------------------------------------------------------


// var ChatWindow = React.createClass({
//     contextTypes: {
//         users:React.PropTypes.array
//     },
//     render: function () {
//         this.context.users[0] = 'bob';
//         return (
//             <div className="well">
//                 <ol>
//                     <li>{this.context.users[0]}</li>
//                     <li>{this.context.users[1]}</li>
//                 </ol>    
//             </div>    
//         );
//     }
// });
// var ThreadList = React.createClass({
//     contextTypes: {
//         users:React.PropTypes.array
//     },
//     render: function () {
//         return (
//             <div className="well">
//                 <ul>
//                     <li>{this.context.users[0]}</li>
//                     <li>{this.context.users[1]}</li>
//                 </ul>  
//             </div>    
//         );
//     }
// });

// var Messages = React.createClass({
//     render: function () {
//         return (
//             <div className="">
//                 <ChatWindow />
//                 <ThreadList />
//             </div>    
//         );
//     }
// });

// var MessagesApp = React.createClass({
//     getInitialState: function () {
//         return {
//             users:['nag','ria']
//         };
//     },
//     childContextTypes: {
//         users:React.PropTypes.array
//     },
//     getChildContext: function () {
//         return {users:this.state.users}  
//     },
//     render: function () {
//         return (
//             <div className="">
//                 <Messages/>
//             </div>    
//         );
//     }
// });


// ReactDOM.render(<MessagesApp />, document.getElementById('root'));

//------------------------------------------------------------------------

// component 's  state


//   e.g   choose payment-method  ( debit , credit , other )



// var Payment = React.createClass({
//     getInitialState: function () {
//         return {
//             mode : 'debit'
//         };     
//     },
//     select: function (payBy) {
//         //console.log('selecting....');
        
//         // var self = this;
//         // return function () {
//         //     self.setState({mode:payBy});
//         // }

//         return (event) => {
//             console.dir(event.target);
//             //console.log(this.refs.b1);
//             this.setState({mode:payBy});
//         };     

//     },
//     render: function () {
//         return (
//             <div className="well">
//                 <button className="btn btn-primary" ref='b1' onClick={this.select('debit')}>
//                     Debit
//                 </button>
//                 <button className="btn btn-danger" ref='b2'  onClick={this.select('credit')}>
//                     Credit
//                 </button>
//                 <button className="btn btn-warning" ref='b3'  onClick={this.select('other')}>
//                     Other
//                 </button>    
//                 <hr/>
//                 Pay with: <span className="badge">{this.state.mode} - card </span>
//             </div>
//         );
//     }
// });

// ReactDOM.render(<Payment />, document.getElementById('root'));

//------------------------------------------------------------------------------------

// var HomePage = React.createClass({
//     statics: {
//       getPageTitle:function(){
//           return 'Home';
//       }  
//     },
//     render: function () {
//         return (<div>Home</div>);
//     }
// });

// var AboutPage = React.createClass({
//      statics: {
//       getPageTitle:function(){
//           return 'About';
//       }  
//     },
//     render: function () {
//         return (<div>About</div>);
//     }
// });


// routing

// let url = "/home";
// let page;
// if (url === '/home') {
//     page = HomePage;
// }
// if (url === '/about') {
//     page = AboutPage;
// }

// let title = page.getPageTitle();
// console.log(title);

//------------------------------------------------------------------------------------