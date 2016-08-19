import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  LayoutAnimation,
  TouchableHighlight,
} from 'react-native';
export default class Results extends Component {

  onButtonPress() {
    this.props.navigator.push({
      name: 'Root'
    })
  }

render(){
  return(
    <View style={{flex: 1, backgroundColor: "#0E0F1A",}}>
      <Text style={styles.testHeader}>
        Results
      </Text>
      <Text style={styles.bottomBorder}>
      </Text>
      <TouchableHighlight onPress={() => this.onButtonPress()} style={styles.button} >
      <Text style={styles.begin}>
      Restart Test</Text>
      </TouchableHighlight>
    </View>

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

export default Results
