import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MultiCityView from './MultiCityView';

class CustomView extends Component {
  renderTopDestinations(destinations) {
    return destinations.map(destination => 
       <MultiCityView key={destination.city.city_name} destination={destination}/>
    );
  }

  render() { 
    const { type, content } = this.props.currentMessage;
    if (type) {
      return (
      <View style={{ width: 300 }}>
        <Content>
          {this.renderTopDestinations(content.destinations)}
        </Content>
      </View>
      );
    }
    return null;
  }
}

export default CustomView;