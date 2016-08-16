import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={{uri: 'http://reactor.apppresser.com/wp-content/uploads/2015/05/ionic-logo-300-300x248.png'}}
        style={styles.canvas} />
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={styles.canvastwo} />
        <Text style={styles.welcome}>
          React Native Vs Ionic
        </Text>
        <Text style={styles.instructions}>
          Which of the hybrids best fits your project?
        </Text>
        <Text style={styles.instructions}>
          Here we can find the simple,{'\n'}
          straightforward answer.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  canvas: {
     position: 'absolute',
     top: 330,
     left: 0,
     bottom: 0,
     right: 0,
   },
   canvastwo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 290,
      right: 0,
    },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    fontFamily: 'Roboto'
  },
  instructions: {
    textAlign: 'center',
    color: '#2b2b2b',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('newApp', () => newApp);
