/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends Component {
  constructor(props){
    super(props);
    return {
      zip: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style-{styles.welcome}>
          You Input {this.state.zip}
        </Text>
        <TextInput
          style = {styles.input}
          onSubmitEditing={this._handleTextChange}/>


      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
