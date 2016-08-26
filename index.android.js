'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage,
} from 'react-native';

import Root from './components/Root';
import TestPage from './components/testPage';
import Spotify from './components/spotify/apiTest';
import Artist from './components/spotify/Artist';
import DbTest from './components/dbTest';
import UploadTest from './components/uploadTest';
import Results from './components/results';

export default class newApp extends Component {


    renderScence(route, navigator){
      if (route.name === 'Root') {
        return <Root navigator={navigator}/>
      }
      if (route.name === 'testPage') {
        return <TestPage navigator={navigator}/>
      }
      if (route.name === 'dbTest') {
        return <DbTest navigator={navigator}/>
      }
      if (route.name === 'spotify') {
        return <Spotify navigator={navigator}/>
      }
      if (route.name === 'upLoad') {
        return <UploadTest navigator={navigator}/>
      }
      if (route.name === 'results') {
        return <Results navigator={navigator}/>
      }
      return <Artist url={ route.url } />;
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

AppRegistry.registerComponent('newApp', () => newApp);
