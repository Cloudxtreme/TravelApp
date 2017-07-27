import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MultiCityView from './MultiCityView';
import CityView from './CityView';
import BookTrip from './BookTrip';

class CustomView extends Component {
  render() { 
    const { currentMessage } = this.props;
    switch(currentMessage.type) {
      case 'multipleCitySuggestion':
        return (
          <View style={{ width: 300 }}>
            {
              currentMessage.content.destinations.map(destination => 
                <MultiCityView key={destination.city.city_name} destination={destination}/>
              )
            }
          </View>
        );
        break; 
      case 'cityDetailedInfo':
        return (
          <View style={{ width: 300 }}>
            <CityView content={currentMessage.content} />
          </View>
        );    
      case 'bookTrip':
        return (
          <View style={{ width: 300 }}>
            <BookTrip content={currentMessage.content}/>
          </View>
      );               
      default:
        return null;
    }
  }
}

export default CustomView;
