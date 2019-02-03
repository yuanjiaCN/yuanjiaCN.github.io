import React from 'react';
import ReactDOM from 'react-dom';
import Roo from './router/router'
import { Provider } from 'react-redux'
import Example from './component/example/example'
import store from './Store'
ReactDOM.render(
        <Provider store={store}>
            <Roo/>
        </Provider>


    ,document.getElementById('root')
);