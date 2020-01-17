//******************************************
//****** APP.JS - Main App Entry Point *****
//******************************************

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import PersistedStore from '../src/store/store/PersistedStore'
import Home from "./components/Home";
import AddItem from './components/AddItem';
import store from './store/store/index';


function App(){

    console.log(store.getState());
    return (
      <div><h3>Reactjs-Redux-Spreadsheet Upload :</h3>
      <Provider store={PersistedStore.getDefaultStore().store}>
      <AddItem />
      <Home />
      </Provider>
      </div>
    )
}

export default App;