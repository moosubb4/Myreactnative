import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
  },
  red: {
    color: 'red',
  },
});

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000 * this.props.delay);
  }

  render() {
    if (!this.state.isShowingText) {
      return <Text style={styles.bigblue}>{this.props.text}</Text>;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      // <View style={{ alignItems: 'center' }}>
      //   <View>
      //     <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
      //     <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
      //     <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
      //   </View>

      // </View>

      <View style={{ flex: 1 }}>
        <View style={{ flex: 3, backgroundColor: 'powderblue' }} >
          <Image source={pic} style={{ width: 193, height: 110 }} />
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
        </View>
        <View style={{ flex: 3, backgroundColor: 'skyblue', alignItems: 'center' }} >
          <Blink text='I love to blink' delay="1" />
          <Blink text='Yes blinking is so great' delay="1" />
          <Blink text='Why did they ever take this out of HTML' delay="1" />
          <Blink text='Look at me look at me look at me' delay="1" />
        </View>
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
      </View>

    );
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => Bananas);
