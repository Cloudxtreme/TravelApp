import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import Router from './Router';
import { View } from 'react-native';

class App extends Component {
  componentWillMount() {
   
  }

  render() {    
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;