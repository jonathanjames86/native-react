'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import Root from './components/Root';
import TestPage from './components/testPage';
import Spotify from './components/apiTest';

export default class newApp extends Component {

    renderScence(route, navigator){
      if (route.name === 'Root') {
        return <Root navigator={navigator}/>
      }
      if (route.name === 'testPage') {
        return <TestPage navigator={navigator}/>
      }
      if (route.name === 'spotify') {
        return <Spotify navigator={navigator}/>
      }
    }
  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute = {{name: 'Root'}}
        renderScene={ this.renderScence }/>
    );
  }

}

const styles = StyleSheet.create({
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
});

AppRegistry.registerComponent('newApp', () => newApp);
