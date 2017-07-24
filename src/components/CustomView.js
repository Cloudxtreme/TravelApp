import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MultiCityView from './MultiCityView';

class CustomView extends Component {
  render() { 
    const { currentMessage, messages } = this.props;
    if (currentMessage.type) {
      return (
      <View style={{ width: 300 }}>
        {
          currentMessage.content.destinations.map(destination => 
            <MultiCityView key={destination.city.city_name} destination={destination}/>
          )
        }
      </View>
      );
    }
    return null;
  }
}

export default CustomView;
