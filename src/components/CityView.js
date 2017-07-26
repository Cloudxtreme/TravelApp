import React from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const _onPressButton = (content) => {
  Actions.detail({ content });
}

const MultiCityView = ({ content }) => {
  const { city_name, image_url } = content;

  return (
    <TouchableOpacity onPress={() => _onPressButton(content)}>
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
