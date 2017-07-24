import React from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const _onPressButton = (destination) => {
  Actions.detail({ destination });
}

const MultiCityView = ({ destination }) => {
  const { city_name, image_url } = destination.city;

  return (
    <TouchableOpacity onPress={() => _onPressButton(destination)}>
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
};

export default MultiCityView;
