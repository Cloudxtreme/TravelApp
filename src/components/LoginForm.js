import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Container, Content, Button, Text, Icon } from 'native-base';

class LoginForm extends Component {

  render() {
    return (
      <Container>
        <Content style={styles.contentStyle}>
          <Button iconLeft block style={{marginBottom: 10}}>
            <Icon active name="logo-facebook" />
            <Text>Login with Facebook</Text>
          </Button>
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