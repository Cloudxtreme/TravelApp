import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { GiftedChat } from 'react-native-gifted-chat';
import { Image } from 'react-native';
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

  renderFooter(props) {
    if (props.userTyping) {
      return (
        <Image
          source={require('./img/imessage-prank.gif')}
          style={{width: 50, height: 30, borderRadius: 5, margin: 10, marginLeft: 20}}
        />
      );
    }
    return null;
  } 
  
  render() {
    return (
      <Container style={{marginTop: 65}}>
        <GiftedChat
          userTyping={this.props.userTyping}
          messages={this.props.messages}
          onSend={(messages) => this.onSend(messages)}
          renderCustomView={this.renderCustomView}
          renderFooter={this.renderFooter}
          user={{
            _id: 1
          }}
        />
      </Container>
    );
  }
}

const styles = {
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
};

const mapStateToProps = state => {
  const { user } = state.auth;
  const { messages, isConnected, userTyping } = state.chat;
  console.log("#########", messages);
  return { user, messages, isConnected, userTyping };
};

export default connect(mapStateToProps, { connectWatson, sendChatMessage, sendLocation })(ChatBar);