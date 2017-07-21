import { Actions } from 'react-native-router-flux';
import { 
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types'
import FBSDK, { AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

export const loginUser = (error, result) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    
    if (error) {
      alert("login has error: " + result.error);
    } else if (result.isCancelled) {
      console.log("login is cancelled.");
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          const token = data.accessToken.toString();

          const responseInfoCallback = (error, result) => {
            if (error) {
              console.log(error);
              alert('Error fetching data: ' + error.toString());
            } else {
              result = {...result, token: token};
              console.log(result);
              alert('Success fetching data: ' + result.toString());
            }
          }

          const infoRequest = new GraphRequest(
            '/me',
            {
              accessToken: token,
              parameters: {
                fields: {
                  string: 'email, name'
                }
              }
            },
            responseInfoCallback
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      )
    }
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};