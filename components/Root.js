import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  Image,
  View,
  LayoutAnimation,
  TouchableHighlight,
} from 'react-native';
// import clrs from '../utilites/clrs';

export default class Root extends Component {

  onButtonPress() {
    this.props.navigator.push({
      id: 'Second'
    });
  }

  render() {
    return (
      // <View style={styles.container}>
      <View style={{flex: 1,justifyContent: 'center', backgroundColor: "#292C34",}}>
        <Text style={styles.versus}>
              Ionic 2 Vs React Native
        </Text>
        <Image source={{uri: 'http://reactionic.github.io/img/reactionic.png'}}
            style={styles.canvas} />
        <Text style={styles.whichIS}>
            Which hybrids best fits your project?
        </Text>
        <TouchableHighlight onPress={this.onButtonPress.bind(this)} style={styles.button} >
        <Text style={styles.begin}>
        Lets get to it!</Text>
        </TouchableHighlight>
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
  flex: 4,
  borderWidth: 20,
  borderColor: '#292C34',
   },
  canvastwo: {
    flex: 2,
  },
  versus: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto',
    paddingTop: 10,
    flex: .5,
    backgroundColor: '#4E8EF7',
  },
  whichIS: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00D8FF',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#fff',
    paddingTop: 10,
    flex: .5,
    color: '#fff',
  },
  button: {
    height: 40,
    width: 150,
    marginLeft: 100,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#00D8FF",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#0093ad',
  },
  begin: {
    flex: 1,
    fontSize: 20,
    paddingTop: 4,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('newApp', () => newApp);
