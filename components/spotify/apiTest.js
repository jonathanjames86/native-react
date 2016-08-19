import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  LayoutAnimation,
  TouchableHighlight,
  TextInput,
  ListView,
  StatusBar,
} from 'react-native';
import ListItem from './ListItem';
import {debounce} from 'lodash';
import {searchFor} from './getArtist';



export default class Spotify extends Component {

  onButtonPress(){
    this.props.navigator.push({
      name: 'dbTest'
    })
  }
  constructor(props) {
      super(props);

      const dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      });

      this.state = { artists: dataSource };
    }

    renderRow = (artist, sId, id) => {
      const { navigator } = this.props;
      const ARTIST_STATE = {
        id: 'ARTIST_DETAIL',
        title: artist.name,
        url: artist.external_urls.spotify,
      };

      const imageUrl = artist.images[0] ? artist.images[0].url : null;

      return (
        <ListItem index={ id }
          text={ artist.name }
          imageUrl={ imageUrl }
          navState={ ARTIST_STATE }
          navigator={ navigator } />
      );
    };

    render() {
      const { artists } = this.state;

      return (
        <View style={ styles.container }>
          <Text style={styles.testHeader}>
            Test 1: Spotify Request
          </Text>
          <Text style={styles.bottomBorder}>
          </Text>
          <StatusBar barStyle="light-content" />

          <TextInput style={ styles.searchBox }
            onChangeText={ this.makeQuery } />

          <ListView dataSource={ artists }
            style={ styles.listView }
            renderRow={ this.renderRow }
            />
            <TouchableHighlight onPress={() => this.onButtonPress()} style={styles.button} >
              <Text style={styles.begin}>
              Begin RN Test</Text>
            </TouchableHighlight>
        </View>
      );
    }

    makeQuery = debounce(query => {
      searchFor(query)
        .then(artists => {
          this.setState({
            artists: this.state.artists.cloneWithRows(artists),
          });
        })
        .catch((error) => {
          throw error;
        });
    });
  }

  Spotify.propTypes = {
    navigator: React.PropTypes.object,
  };

  const styles = StyleSheet.create({
    container: {
      paddingTop: 25,
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "#0E0F1A",
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
    searchBox: {
      height: 40,
      backgroundColor: '#fff',
      color: "#0E0F1A",
      borderColor: '#0B78E4',
      borderBottomWidth: 4,
      margin: 15,
      paddingLeft: 10,
      fontWeight: '800',
    },
    listView: {
      flex: 2,
      margin: 5,
      paddingTop: 5,
      alignSelf: 'stretch',
      backgroundColor: "#20212B",
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
export default Spotify
