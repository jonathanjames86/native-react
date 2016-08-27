import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  LayoutAnimation,
  TouchableHighlight,
} from 'react-native';
import MapView from 'react-native-maps';

export default class DbTest extends Component {

  constructor() {
      super();
    }

    render() {
      return (
        <MapView
          style={ styles.map }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      );
    }

  }



const styles = StyleSheet.create({
  testHeader: {
    height: 40,
    fontSize: 18,
    color: '#fff',
    paddingTop: 5,
    marginTop: 10,
    paddingLeft: 15,
  },
  bottomBorder: {
    backgroundColor: '#fff',
    height: 1,
    marginBottom: 5,
  },
  begin: {
    flex: 1,
    fontSize: 20,
    paddingTop: 4,
    color: '#fff',
    textAlign: 'center',
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
  container: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'flex-end',
  alignItems: 'center',
},
map: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
},

})
