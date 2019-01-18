import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {

  render() {
    const kuy = 'EIEIZA007';
    return (
      <View>
        <Text>Hello world!{kuy}</Text>
      </View>
    );
  }
}
