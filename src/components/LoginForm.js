import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Container, Content, Button, Text, Icon } from 'native-base';
import FBSDK, { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

class LoginForm extends Component {

  onLogoutFinished() {
    alert("logout.");
  }

  render() {
    return (
      <Container style={styles.containerStyle}>
        <Container style={styles.topStyle}>
          <Text style={styles.textStyle}>
             TravelBotDave
          </Text>
        </Container>
        <Container style={styles.bottomStyle}>
          <LoginButton
            onLoginFinished={this.props.loginUser}
            onLogoutFinished={this.onLogoutFinished}/> 
        </Container>
        
      </Container>
    );
  }
}

const styles = {
  containerStyle: {
    flex:1,
    backgroundColor: '#1C2833',
    alignItems: 'center',
    flexDirection:'column',
    justifyContent: 'center'
  },
  topStyle:{
    flex:1,
    justifyContent: 'center', 
  },
  bottomStyle:{
    flex:1
  },
  textStyle: {
    color:'white',
    fontSize: 50,
    fontFamily: 'vincHand' 
  }
};

export default connect(null, { 
  loginUser 
})(LoginForm);