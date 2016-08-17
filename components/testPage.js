import React, {
  Component,
  StyleSheet,
  Text,
  View,
}from 'react-native';

export class testPage extends Component {
  render(){
    return(
      <View style={styles.container}
        <Text style={styles.testText}>
          Here is your Test page homie.
        </Text>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    felx: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2B2B'
  },
  testText: {
    flex: 1,
    fontSize: 35,
    color: '#fff',
  },


});

module.exports = testPage;
