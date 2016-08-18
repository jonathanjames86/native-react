import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  LayoutAnimation,
  TouchableHighlight,
} from 'react-native';
export default class TestPage extends Component {
  render(){
    return(
      <View style={{flex: 1,justifyContent: 'center', backgroundColor: "#0E0F1A",}}>
        <Text style={styles.testText}>
          Testing your Device
        </Text>
        <Text style={styles.testText}>

        </Text>
      </View>

    )
  }

}
debugger;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2B2B'
  },
  testText: {
    flex: 1,
    fontSize: 15,
    backgroundColor: '#20212B',
    color: '#fff',
    paddingTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },


});

export default TestPage
