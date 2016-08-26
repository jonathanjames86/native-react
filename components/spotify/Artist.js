import React, {Component} from 'react';
import{
  View,
  WebView,
} from 'react-native';


const Artist = ({ url }) => {
  return (
    <View style={{
      backgroundColor: '#fff',
      borderLeftColor: '#2b2b2b',
      borderLeftWidth: 1,
      flex: 1,
    }}>
      <WebView
        style={{
          flex: 1,
        }}
        source={{
          uri: url,
          method: 'GET',
        }} />
    </View>
  );
};

Artist.propTypes = {
  url: React.PropTypes.string,
};

export default Artist;
