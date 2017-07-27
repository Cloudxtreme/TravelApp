import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { GiftedChat } from 'react-native-gifted-chat';
import { Container, Content, Button, Text, Icon } from 'native-base';
import { connectWatson, disconnectWatson, sendChatMessage, sendLocation } from '../actions';
import CustomView from './CustomView';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.isConnected) this.props.connectWatson();
  }

  componentDidMount() {
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // fix locations for ios simulator
          const coordinates = {
            // latitude: position.coords.latitude,
            // longitude: position.coords.longitude
            latitude: 43.6728928,
            longitude: -79.41108129999999
          }
          
          this.props.sendLocation(coordinates);
        }
      );
    }, 200); 
  }
  
  onSend(messages = []) {
    this.props.sendChatMessage(messages);
  }

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
  }
  
  render() {
    return (
      <Container style={{marginTop: 65}}>
        <GiftedChat
          messages={this.props.messages}
          onSend={(messages) => this.onSend(messages)}
          renderCustomView={this.renderCustomView}
          user={{
            _id: 1
          }}
        />
      </Container>
    );
  }
}

const mpaStateToProps = state => {
  const { user } = state.auth;
  const { messages, isConnected } = state.chat;
  console.log("#########", messages);
  return { user, messages, isConnected };
};

export default connect(mpaStateToProps, { connectWatson, sendChatMessage, sendLocation })(ChatBar);