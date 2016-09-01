
import React, {Component} from 'react';
import Header from './Header';
import MainSection from './MainSection';
import configureStore from '../store/configureStore';
import * as ActionTypes from '../actions'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 


class App extends Component{
    render() {
        const {todos, actions} = this.props;
        return (
            <div>
                <Header addTodo={actions.addTodo}/>
                <MainSection todos={todos} actions={actions}/>
            </div>    
        );
    }
}

// map store-current to comp's properties instead-of subscribing mannulay
function mapStateToProps(state) {
    return {todos:state.todos}
}
function mapDispatchToProps(dispath) {
    return {actions:bindActionCreators(ActionTypes,dispath)};   
}


// Connects a React component to a Redux store.

export default connect(mapStateToProps,mapDispatchToProps)(App);

