import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Text, Icon } from 'native-base';
import { sendChatMessage } from '../actions';
import uuid from 'uuid/v4'

class CityDetailView extends Component {
  componentWillMount() {
    const { city_name } = this.props.destination.city;
    Actions.refresh({ title: city_name })

    const message = {
      createAt: new Date(),
      text: 'show me ' + city_name,
      _id: uuid(),
      user: {
        _id: 1
      }
    }
    this.props.sendChatMessage([message]);
  }

  render() {
    return (
      <Container style={{marginTop: 65}}>
        <Content>
          <Button>
            <Text>Click Me! </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  // const { user } = state.auth;
  // const { messages } = state.chat;
  // // console.log("#########", messages);
  // return { user, messages };
};

export default connect(null, { sendChatMessage })(CityDetailView);