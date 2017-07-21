import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ChatBar from './components/ChatBar';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key = "auth">
        <Scene key="login" component={LoginForm} title="Login" hideNavBar={true} />
      </Scene>

      <Scene key = "main">
        <Scene key="chatbar" component={ChatBar} title="Chat" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;