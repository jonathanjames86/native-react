import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  LayoutAnimation,
  TouchableHighlight,
} from 'react-native';
export default class Spotify extends Component {

render(){
  return(
    <View style={{flex: 1, backgroundColor: "#0E0F1A",}}>
      <Text style={styles.testHeader}>
        Test #1: Spotify API
      </Text>
      <Text style={styles.bottomBorder}>
      </Text>
      <TouchableHighlight onPress={() => this.onButtonPress()} style={styles.button} >
      <Text style={styles.begin}>
      Begin RN Test</Text>
      </TouchableHighlight>
    </View>

    )
  }

}


export default Spotify
