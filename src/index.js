import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(todoApp, composeWithDevTools());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
