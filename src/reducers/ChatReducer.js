import { 
  USER_JOINED,
  SEND_USER_JOINED,
  RECIEVE_BOT_MESSAGE,
  SEND_CHAT_MESSAGE
} from '../actions/types'

const INITIAL_STATE = { 
  messages: [],
  isConnected: false
};

export default (state = INITIAL_STATE, action) => {
  console.log("action : ", action)
  switch (action.type) {
    case USER_JOINED:
      return {
        ...state,
        isConnected: true
      }
    case RECIEVE_BOT_MESSAGE:
      return {
        ...state,
        messages: [action.message, ...state.messages]
      }
    case SEND_CHAT_MESSAGE:
      return {
        ...state,
        messages: [action.message, ...state.messages]
      }
    default:
      return state;
  }
};