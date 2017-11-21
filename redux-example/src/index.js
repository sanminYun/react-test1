import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


import {createStore} from 'redux';
import reducers from './reducers';
import * as actions from './actions';
import { Provider } from 'react-redux';




/**create store
 스토어가 하는일
 1. dispatch(action)
 2. getState()
 3. subscribe(listener)
 4. replaceReducer(nextReducer)
 **/
const store = createStore(reducers);




ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
