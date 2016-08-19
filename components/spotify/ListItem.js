import React, {Component, PropTypes} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput} from "react-native";
import FadeInView from './FadeInView';

const placeholder = require('./reactionic.png');

const ListItem = ({ index, text, imageUrl, navState, navigator }) => {
  const image = (
    imageUrl ? { uri: imageUrl } : placeholder
  );

  return (
    <TouchableOpacity
      underlayColor={ '#2b2b2b' }
      onPress={ () => navigator.push(navState) }>

      <FadeInView delay={ index * 25 }>
        <View style={ styles.mediaObject }>
          <Image source={ image } style={ styles.image } />
          <Text style={ styles.text }>{ text }</Text>
        </View>
      </FadeInView>

    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  mediaObject: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  text: {
    flex: 1,
    color: '#fff',
   },
  image: {
    backgroundColor: '#2b2b2b',
    width: 40,
    height: 40,
    marginRight: 16,
    marginLeft: 16,
  },
});

ListItem.propTypes = {
  index: React.PropTypes.string,
  text: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  navState: React.PropTypes.object,
  navigator: React.PropTypes.object,
};


export default ListItem;
