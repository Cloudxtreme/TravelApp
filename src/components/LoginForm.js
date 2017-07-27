import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { StyleSheet, Animated, Easing } from "react-native";
import { Container, Content, Button, Text, Icon } from 'native-base';
import FBSDK, {  LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import Video from "react-native-video";
import LightVideo from "./intro.mp4";

class LoginForm extends Component {
  constructor () {
    super();
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
  }

  componentDidMount () {
    this.animate();
  }

  animate () {
    this.animatedValue1.setValue(0);
    this.animatedValue2.setValue(0)
    
    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(
       value,
        {
          toValue: 1,
          duration,
          easing,
          delay
        }
      )
    };
    Animated.parallel([
      createAnimation(this.animatedValue1, 2000, Easing.ease),
      createAnimation(this.animatedValue2, 1000, Easing.ease, 1000)
    ]).start();
  }

  onLogoutFinished() {
    //alert("logout.");
  }

  render() {
    const scaleText = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1]
    })

    const spinText = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg']
    })

    const introButton = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [-500, 1]
    })

    return (
      <Container style={styles.containerStyle}>
        <Video repeat source={LightVideo} resizeMode="cover" style={StyleSheet.absoluteFill} />
        <Container style={styles.topStyle}>
          <Animated.View style={{ transform: [{scale: scaleText}, {rotate: spinText}] }}>
            <Text style={styles.textStyle}>
              TravelBotDave
            </Text>
           </Animated.View>
        </Container>
        <Container style={styles.bottomStyle}>
          <Animated.View style={{top: introButton, transform: [{scale: scaleText}, {rotate: spinText}]}}>
            <LoginButton
              onLoginFinished={this.props.loginUser}
              onLogoutFinished={this.onLogoutFinished}/> 
          </Animated.View>
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
    fontFamily: 'vinchand',
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