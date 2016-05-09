import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

var Forecast = require('./App/Components/Forecast');

class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state = {
      zip: '',
      forecast: {
        main: null,
        description: null,
        temp: null
      }
    }
  }

  getWeather(zip){
    console.log("function working");
    var url1 = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    var url2 = ',us&APPID=API_KEY';
    return fetch(url1 + zip + url2).then((res) => res.json())
    .then((responseJSON) => {
      console.log(responseJSON);
      this.setState({
        forecast: {
          temp: responseJSON.main.temp,
          description: responseJSON.weather[0].description,
          main: responseJSON.weather[0].main
        }
      });
    });

  }

  _handleTextChange(event) {
    var zip = event.nativeEvent.text;
    this.setState({ zip: zip });
    this.getWeather(zip);

  }

  render() {

    var content = null;
    if (this.state.forecast !== null) {
      content = <Forecast
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp}/>;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Current Weather for {this.state.zip}
        </Text>
        <TextInput
          style = {styles.input}
          returnKeyType="go"
          onSubmitEditing={this._handleTextChange.bind(this)}/>
        <View>
          {content}
        </View>
      </View>
    );
    console.log("hello");

  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
