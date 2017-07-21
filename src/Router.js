import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ChatBar from './components/ChatBar';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key = "auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>
      
      <Scene key = "main">
        <Scene key="chatbar" component={ChatBar} title="Chat" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;