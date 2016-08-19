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
      name: 'testPage'
    })
  }

  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center', backgroundColor: "#0E0F1A",}}>
        <Text style={styles.versus}>
              Ionic 2 Vs React Native
        </Text>
        <Image source={{uri: 'http://reactionic.github.io/img/reactionic.png'}}
            style={styles.canvas} />
        <Text style={styles.whichIS}>
            Which hybrid best fits your project?
        </Text>
        <TouchableHighlight onPress={() => this.onButtonPress()} style={styles.button} >
        <Text style={styles.begin}>
        Test your device</Text>
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
    backgroundColor: '#0E0F1A',
  },
  canvas: {
  flex: 4,
  borderWidth: 20,
  borderColor: '#0E0F1A',
   },
  canvastwo: {
    flex: 2,
  },
  versus: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto',
    paddingTop: 10,
    flex: .5,
    backgroundColor: '#20212B',
    borderBottomWidth: 2,
    borderColor: '#fff',
  },
  whichIS: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#20212B',
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
    backgroundColor: "#0B78E4",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0093ad',
  },
  begin: {
    flex: 1,
    fontSize: 20,
    paddingTop: 4,
    color: '#fff',
    textAlign: 'center',
  }
});

module.exports = Root;
