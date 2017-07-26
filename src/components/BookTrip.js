import React from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, View } from 'react-native';

const BookTrip = ({ content }) => {
  const { availabilityEndDate, availabilityStartDate, cityDetailedInfo, destination } = content;
  return (
    <Card>
      <CardItem style={{justifyContent: 'center'}}>
        <Text>BookTrip</Text>
      </CardItem>
      <CardItem cardBody style={{paddingLeft: 20, paddingRight:20}}>
        <Left>
          <View style={{flexDirection:'column'}}>
            <Text>Departure</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Toronto</Text>
          </View>
        </Left>
        <Body style={{alignItems: 'center'}}>
          <Icon name='ios-plane' style={{marginTop: 20}}/>
        </Body>
        <Right>
          <View style={{flexDirection:'column', alignItems: 'center'}}>
            <Text>Arrival</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{destination}</Text>
          </View>
        </Right>
      </CardItem>
      <CardItem style={{justifyContent: 'center'}}>
        <Image
          source={require('./img/qr-code.png')}
          style={{width: 100, height: 100}}
        />
      </CardItem>
      <CardItem style={{justifyContent: 'center'}}>
        <Image
          source={require('./img/fun.gif')}
          style={{width: 240, height: 240}}
        />
      </CardItem>
    </Card>
  );
};

export default BookTrip;
