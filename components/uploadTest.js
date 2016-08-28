import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  LayoutAnimation,
  TouchableHighlight,
} from 'react-native';
export default class UploadTest extends Component {

  onButtonPress() {
    this.props.navigator.push({
      name: 'results'
    })
  }

render(){
  return(
    <View style={{flex: 1, backgroundColor: "#0E0F1A",  justifyContent:"space-between", alignItems: 'center'}}>
      <Text style={styles.testHeader}>
        Test #3: Data Base Upload API
      </Text>
      <Text style={styles.bottomBorder}>
      </Text>
      <Text style={styles.testHeader}>IMAGES > 2mp</Text>
      <ScrollView>
        <Image source={{uri: 'http://utbgeek.com/home/bradu25/public_html/utbgeek/wp-content/uploads/2016/08/adam_west_burt_ward.jpg'}}
              style={styles.canvas} />
        <Image source={{uri: 'http://media.dcentertainment.com/sites/default/files/files/2010/02/icons-revised-2-sm.jpg'}}
            style={styles.canvas} />
        <Image source={{uri: 'http://media.dcentertainment.com/sites/default/files/GalleryComics_1920x1080_20151118_Batman-Europa-1__563919e27b1356.02940271.jpg'}}
            style={styles.canvas} />
        <Image source={{uri: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-369200.jpg'}}
            style={styles.canvas} />
        <Image source={{uri: 'https://larryfire.files.wordpress.com/2011/02/oct100261.jpg'}}
            style={styles.canvas} />
        <Image source={{uri: 'https://speakeasyohiou.files.wordpress.com/2015/10/cover-bman.jpg'}}
            style={styles.canvas} />
        <Image source={{uri: 'http://utbgeek.com/home/bradu25/public_html/utbgeek/wp-content/uploads/2016/08/adam_west_burt_ward.jpg'}}
                  style={styles.canvas} />
        <Image source={{uri: 'http://media.dcentertainment.com/sites/default/files/files/2010/02/icons-revised-2-sm.jpg'}}
                style={styles.canvas} />
        <Image source={{uri: 'http://media.dcentertainment.com/sites/default/files/GalleryComics_1920x1080_20151118_Batman-Europa-1__563919e27b1356.02940271.jpg'}}
                style={styles.canvas} />
        <Image source={{uri: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-369200.jpg'}}
                style={styles.canvas} />
        <Image source={{uri: 'https://larryfire.files.wordpress.com/2011/02/oct100261.jpg'}}
                style={styles.canvas} />
        <Image source={{uri: 'https://speakeasyohiou.files.wordpress.com/2015/10/cover-bman.jpg'}}
                style={styles.canvas} />
                <Image source={{uri: 'http://utbgeek.com/home/bradu25/public_html/utbgeek/wp-content/uploads/2016/08/adam_west_burt_ward.jpg'}}
                      style={styles.canvas} />
                <Image source={{uri: 'http://media.dcentertainment.com/sites/default/files/files/2010/02/icons-revised-2-sm.jpg'}}
                    style={styles.canvas} />
                <Image source={{uri: 'http://media.dcentertainment.com/sites/default/files/GalleryComics_1920x1080_20151118_Batman-Europa-1__563919e27b1356.02940271.jpg'}}
                    style={styles.canvas} />
                <Image source={{uri: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-369200.jpg'}}
                    style={styles.canvas} />
                <Image source={{uri: 'https://larryfire.files.wordpress.com/2011/02/oct100261.jpg'}}
                    style={styles.canvas} />
                <Image source={{uri: 'https://speakeasyohiou.files.wordpress.com/2015/10/cover-bman.jpg'}}
                    style={styles.canvas} />
                <Image source={{uri: 'http://utbgeek.com/home/bradu25/public_html/utbgeek/wp-content/uploads/2016/08/adam_west_burt_ward.jpg'}}
                          style={styles.canvas} />
                <Image source={{uri: 'http://media.dcentertainment.com/sites/default/files/files/2010/02/icons-revised-2-sm.jpg'}}
                        style={styles.canvas} />
                <Image source={{uri: 'http://media.dcentertainment.com/sites/default/files/GalleryComics_1920x1080_20151118_Batman-Europa-1__563919e27b1356.02940271.jpg'}}
                        style={styles.canvas} />
                <Image source={{uri: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-369200.jpg'}}
                        style={styles.canvas} />
                <Image source={{uri: 'https://larryfire.files.wordpress.com/2011/02/oct100261.jpg'}}
                        style={styles.canvas} />
                <Image source={{uri: 'https://speakeasyohiou.files.wordpress.com/2015/10/cover-bman.jpg'}}
                        style={styles.canvas} />
      </ScrollView>
      <TouchableHighlight onPress={() => this.onButtonPress()} style={styles.button} >
      <Text style={styles.begin}>
      Begin RN Test</Text>
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
    marginBottom: 10,
    backgroundColor: "#0B78E4",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0093ad',
  },
  canvas: {
  height: 355,
  width: 300,
  margin:10,


   },
});
