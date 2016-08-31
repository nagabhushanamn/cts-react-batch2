


// main-module

import React from 'react'
import App from './components/App'
import {render} from 'react-dom'
import 'todomvc-app-css/index.css'

import { Provider } from 'react-redux'

import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
