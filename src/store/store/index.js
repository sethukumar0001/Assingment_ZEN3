//*********************************************************
//**** CREATE STORE & INITIALISE WITH STARTING VALUES *****
//*********************************************************

import {createStore} from 'redux';
import AddItemReducer from '../reducers/index';
import AddItemAction from '../actions/index';

//**** CREATE THE STORE AND PASS IN THE REDUCERS *****

const store = createStore(
    AddItemReducer,
      //The following code is required so the Chrome Redux Extention will work
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export default store;