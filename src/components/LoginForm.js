import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Container, Content, Button, Text, Icon } from 'native-base';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
  
class LoginForm extends Component {

  render() {
    return (
      <Container>
        <Content style={styles.contentStyle}>
          <LoginButton
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      alert(data.accessToken.toString())
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("logout.")}/>
        </Content>
      </Container>
    );
  }
}

const styles = {
  contentStyle: {
    padding: 30
  }
};

const mapStateToProps = ({ auth }) => {
  const { error, loading } = auth;
 
  return { error, loading };
};

export default connect(mapStateToProps, { 
  loginUser 
})(LoginForm);