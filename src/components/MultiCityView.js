import React, { Component }  from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { sendChatMessage } from '../actions';
import uuid from 'uuid/v4'

class MultiCityView extends Component {
  render() { 
    const { city_name, image_url } = this.props.destination.city;
    
    return (
      <TouchableOpacity onPress={() => {
        const message = {
          createAt: new Date(),
          text: 'show me ' + city_name,
          _id: uuid(),
          user: {
            _id: 1
          }
        }
        this.props.sendChatMessage([message]);
      }}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height: 30, width: 30}} />
              <Body>
                <Text>{city_name}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: image_url}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
        </Card>
      </TouchableOpacity>       
    );
  }
};

export default connect(null, { sendChatMessage })(MultiCityView);

// const MultiCityView = ({ destination }) => {
//   const { city_name, image_url } = destination.city;

//   return (
//     <TouchableOpacity onPress={() => _onPressButton(destination)}>
//       <Card>
//         <CardItem>
//           <Left>
//             <Thumbnail source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height: 30, width: 30}} />
//             <Body>
//               <Text>{city_name}</Text>
//             </Body>
//           </Left>
//         </CardItem>
//         <CardItem cardBody>
//           <Image source={{uri: image_url}} style={{height: 200, width: null, flex: 1}}/>
//         </CardItem>
//       </Card>
//     </TouchableOpacity>       
//   );
// };

// export default MultiCityView;
