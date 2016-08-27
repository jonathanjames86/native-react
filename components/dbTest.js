import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  LayoutAnimation,
  TouchableHighlight,
} from 'react-native';
import RNGMap from 'react-native-gmaps';

export default class DbTest extends Component {

  onButtonPress() {
    this.props.navigator.push({
      name: 'upLoad'
    })
  }

render(){
  return(
    <View style={{flex: 1, backgroundColor: "#0E0F1A",}}>
      <Text style={styles.testHeader}>
        Test #2: Data Base API
      </Text>
      <Text style={styles.bottomBorder}>
      </Text>
      <TouchableHighlight onPress={() => this.onButtonPress()} style={styles.button} >
      <Text style={styles.begin}>
      Begin RN Test</Text>
      </TouchableHighlight>
    </View>
    <RNGMap
      ref={'gmap'}
      style={ { height: 500, width: 500 } }
      markers={ [
            { coordinates: {lng: 0.1, lat: 51.0} },
            {
              coordinates: {lng: -0.1, lat: 51.0},
              title: "Click marker to see this title!",
              snippet: "Subtitle",
              id: 0,
              /*
               * Able to use "my_icon" or {uri: 'my_icon', width: 100, height: 100 } here as well
               */
              icon: require('image!my_icon'), // <-- android/app/src/main/res/drawable/my_icon.png
              /*
               * color is only working with default icon
               */
              color: 120,
            }
        ] }
      zoomLevel={10}
      onMapChange={(e) => console.log(e)}
      onMapError={(e) => console.log('Map error --> ', e)}
      center={ { lng: 0.1, lat: 51.0 } }
      /*
       * clickMarker shows Info Window of Marker with id: 0,
       * hides Info Window if given null
       */
      clickMarker={0}/>
    )
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

})

export default DbTest
