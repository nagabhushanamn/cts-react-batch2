
import React, {Component} from 'react';
import Header from './Header';
import configureStore from '../store/configureStore';
import * as ActionTypes from '../actions'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 


class App extends Component{
    render() {
        return (
            <div>
                <Header addTodo={this.props.actions.addTodo}/>              
                              
            </div>    
        );
    }
}




// map store-current to comp's properties instead-of subscribing mannulay
function mapStateToProps(state) {
    console.log('mapping store state to App-comp props');
    return {todos:state.todos}
}
function mapDispatchToProps(dispath) {
    return {actions:bindActionCreators(ActionTypes,dispath)};   
}


// Connects a React component to a Redux store.

export default connect(mapStateToProps,mapDispatchToProps)(App);

