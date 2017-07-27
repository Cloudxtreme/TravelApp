import { 
  USER_JOINED,
  SEND_USER_JOINED,
  RECIEVE_BOT_MESSAGE,
  SEND_CHAT_MESSAGE,
  USER_TYPING
} from '../actions/types'

const INITIAL_STATE = { 
  messages: [],
  isConnected: false,
  userTyping: false
};

export default (state = INITIAL_STATE, action) => {
  console.log("action : ", action)
  switch (action.type) {
    case USER_JOINED:
      return {
        ...state,
        isConnected: true,
        userTyping: false
      }
    case RECIEVE_BOT_MESSAGE:
      return {
        ...state,
        messages: [action.message, ...state.messages],
        userTyping: false
      }
    case SEND_CHAT_MESSAGE:
      return {
        ...state,
        messages: [action.message, ...state.messages],
        userTyping: false
      }
    case USER_TYPING:
      return {
        ...state,
        userTyping: true
      }
    default:
      return state;
  }
};