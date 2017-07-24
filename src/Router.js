import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ChatBar from './components/ChatBar';
import CityDetailView from './components/CityDetailView';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key = "auth">
        <Scene key="login" component={LoginForm} title="Login" hideNavBar={true} />
      </Scene>

      <Scene key = "main">
        <Scene key="chatbar" component={ChatBar} title="Chat" />
        <Scene key="detail" component={CityDetailView} title="Detail"/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;