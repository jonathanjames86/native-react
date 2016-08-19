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
export default class TestPage extends Component {

  onButtonPress() {
    this.props.navigator.push({
      name: 'spotify'
    })
  }

  render(){
    return(
      <View style={{flex: 1, backgroundColor: "#0E0F1A",}}>
        <Text style={styles.testHeader}>
          Testing your Device
        </Text>
        <Text style={styles.bottomBorder}>
        </Text>
        <Text style={styles.testInstructions}>
          For best test results, the test should be conducted in the same location
          using the same network. Using your Wifi connection is recommended as it is the more stable then
          your mobile network. The tests should also be conducted in succession of one another
          to best simulate a controlled enviroment.
        </Text>
        <Text style={styles.bottomBorder}>
        </Text>
        <Image source={{uri: 'http://hothardware.com/newsimages/Item20733/wifi-cellular.jpg'}}
            style={styles.wifiImg} />
        <TouchableHighlight onPress={() => this.onButtonPress()} style={styles.button} >
          <Text style={styles.begin}>
          Begin RN Test</Text>
        </TouchableHighlight>
      </View>

    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2B2B2B'
  },
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
  testInstructions: {
    height: 140,
    color: '#fff',
    padding: 15,
  },
  wifiImg: {
    height: 220,
    marginTop: 10,
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



});

export default TestPage
