import { Actions } from 'react-native-router-flux';
import uuid from 'uuid/v4'
import { 
  USER_JOINED,
  SEND_USER_JOINED,
  RECIEVE_BOT_MESSAGE,
  SEND_CHAT_MESSAGE
} from './types'

let socket = null;
let conversationId = null;

const userJoined = message => ({
  type: USER_JOINED,
  message
});

const sendUserJoined = user => ({
  type: SEND_USER_JOINED,
  user
});

const recieveBotMessage = (message) => ({
  type: RECIEVE_BOT_MESSAGE,
  message
});

const handleMessage = (message, dispatch) => {
  console.log("inside handleMessage");
  switch(message.type) {
    case 'userJoined':    
      conversationId = message.conversationId;
      var convertedMsg = {
        _id: message.messageId,
        text: message.content.message,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Dave',
          avatar: 'https://facebook.github.io/react/img/logo_og.png'
        }
      }

      dispatch(userJoined(convertedMsg));
      break;
    case 'textMessage':
      if (message.userId !== 'Dave') break; // don't accept broadcasting message 
      var convertedMsg = {
        _id: message.messageId,
        text: message.content,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Dave',
          avatar: 'https://facebook.github.io/react/img/logo_og.png'
        }
      }
      dispatch(recieveBotMessage(convertedMsg));
      break;
    default:
      return;
  }
};

const onOpen = dispatch => evt => {
  console.log("Connected to server");
  console.log("vvvv1 : ", sendUserJoined({ name: 'Sean', id: uuid() }));
  send(sendUserJoined({ name: 'Sean', id: uuid() }));
}

const onClose = dispatch => evt => {
  console.log("Disconnected to server");
}

const onMessage = dispatch => evt => {
  let msg = JSON.parse(evt.data);
  handleMessage(msg, dispatch);
}

const send = msg => {
  socket.send(JSON.stringify(msg));
}

export const connectWatson = () => {
  return (dispatch) => {
    if(socket != null) {
      socket.close();
    }

    socket = new WebSocket('ws://localhost:3001');
    socket.onmessage = onMessage(dispatch);
    socket.onclose = onClose(dispatch);
    socket.onopen = onOpen(dispatch);    
  }
}

export const disconnectWatson = () => {
  return (dispatch) => {
    if(socket != null) {
      socket.close();
    }
    socket = null;
  }
}

export const sendChatMessage = (messages) => {
  return (dispatch) => {
    messages.map((message) => {
      let convertedMsg = {
        type: 'textMessage',
        content: message.text
      }

      send(convertedMsg);
      dispatch({
        type: SEND_CHAT_MESSAGE,
        message
      });
    })
  }
}
