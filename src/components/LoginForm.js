import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { StyleSheet } from "react-native";
import { Container, Content, Button, Text, Icon } from 'native-base';
import FBSDK, { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import Video from "react-native-video";
import LightVideo from "./intro.mp4";

class LoginForm extends Component {

  onLogoutFinished() {
    //alert("logout.");
  }

  render() {
    return (
      <Container style={styles.containerStyle}>
        <Video repeat source={LightVideo} resizeMode="cover" style={StyleSheet.absoluteFill} />
        <Container style={styles.topStyle}>
          <Text style={styles.textStyle}>
             TravelBotDave
          </Text>
        </Container>
        <Container>
          <Text style={styles.textStyle2}>
             # SuperTeam 2017
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
    fontFamily: 'IndieFlower',
    backgroundColor: "transparent", 
  },
  textStyle2: {
    color:'white',
    fontSize: 40,
    fontFamily: 'IndieFlower',
    backgroundColor: "transparent", 
  }
};

export default connect(null, { 
  loginUser 
})(LoginForm);