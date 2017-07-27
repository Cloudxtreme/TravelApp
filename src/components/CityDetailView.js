import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Image, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { sendChatMessage } from '../actions';
import ViewMoreText from 'react-native-view-more-text';
import uuid from 'uuid/v4'
import MapView from 'react-native-maps';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import Banner from 'react-native-banner';

class CityDetailView extends Component {
  
  componentWillMount() {
    const { city_name } = this.props.content;
    Actions.refresh({ title: city_name })
  }

  constructor(props) {
    super(props);
  }

  renderViewMore(onPress){
    return(
      <Button onPress={onPress} transparent>
        <Text>View more</Text>
      </Button>
    )
  }
  
  renderViewLess(onPress){
    return(
      <Button onPress={onPress} transparent>
        <Text>View less</Text>
      </Button>
    )
  }
  
  renderSwiper(landmarks) {
    if(landmarks) {
      const FakeCards = [
        {title: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
        {title: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
        {title: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
        {title: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
        {title: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
        {title: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
        {title: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
        {title: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
        {title: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
      ]

      let Cards = [];
      landmarks.map((landmark) => {
        Cards.push({title: landmark.name, image: landmark.image_url})
      })

      if (Cards.length === 0) Cards = FakeCards;
      
      return(
          <View>
            <Banner
                banners={Cards}
                defaultIndex={0}
            />
            <Text></Text>
          </View>
      )
    }
  }

  renderChart(flightPrices) {
    if(flightPrices) {
      return (
        <VictoryChart theme={VictoryTheme.material} domainPadding={25}>
          <VictoryBar
            style={{ data: { fill: "tomato" } }}
            labels={(d) => d.y}
            categories={{ x: ["low", "median", "high"] }}
            data={[
              { x: "low", y: flightPrices.minimumFare || 1388.36},
              { x: "median", y: flightPrices.medianFare || 1501.33},
              { x: "high", y: flightPrices.maximumFare || 2114.83}
            ]}
          />
        </VictoryChart>
      );
    }
  }
  
  sendActiviyMessage(keyword) {
    const message = {
      createAt: new Date(),
      text: keyword,
      _id: uuid(),
      user: {
        _id: 1
      }
    }

    this.props.sendChatMessage([message]);
    Actions.chatbar({ type: 'reset' });
  }

  sendBookTripMessage(city_name) {
    console.log("123412412412341241")
    const message = {
      createAt: new Date(),
      text: 'Book me a trip to ' + city_name,
      _id: uuid(),
      user: {
        _id: 1
      }
    }

    this.props.sendChatMessage([message]);
    Actions.chatbar({ type: 'reset' });
  }

  render() {
    const { 
      city_name,
      description,
      image_url,
      keywords,
      coordinates,
      flightPrices,
      landmarks
    } = this.props.content;

    return (
      <Container style={{marginTop: 65, padding: 5}}>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem cardBody style={{padding: 10, marginTop: 10}}>
              <Image source={{uri: image_url}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <ViewMoreText 
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text style={{ fontFamily: 'IndieFlower' }}>
                    { description }
                  </Text>
                </ViewMoreText>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
              {
                keywords.map((keyword, key) => {                  
                  return (
                    <Button key={key} bordered block small style={{margin: 5}} 
                      onPress={()=>{this.sendActiviyMessage(keyword)}}
                    >
                      <Text>{ keyword }</Text>
                    </Button>
                  );
                })
              }
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <MapView
                style={{height: 200, width: null, flex: 1}}
                initialRegion={{
                  latitude: coordinates.latitude,
                  longitude: coordinates.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}>
                  <MapView.Marker
                    coordinate={{ latitude: coordinates.latitude, longitude: coordinates.longitude }}
                  />
              </MapView>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              { this.renderChart(flightPrices) }
            </CardItem>
          </Card>
          <Card>
            { this.renderSwiper(landmarks) }
          </Card>
          <Card>
            <Button full warning onPress={() =>{ this.sendBookTripMessage(city_name) }}>
              <Text>Book Trip</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default connect(null, { sendChatMessage })(CityDetailView);