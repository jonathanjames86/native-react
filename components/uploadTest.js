import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  Platform,
  Image,
  View,
  LayoutAnimation,
  TouchableHighlight,
} from 'react-native';
var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
const IMAGE_PREFETCH_URL = 'http://facebook.github.io/origami/public/images/blog-hero.jpg?r=1&t=' + Date.now();
var prefetchTask = Image.prefetch(IMAGE_PREFETCH_URL);



export default class UploadTest extends Component {

  getInitialState: function() {
   return {
     events: [],
     startLoadPrefetched: false,
     mountTime: new Date(),
   };
 },
 componentWillMount() {
  this.setState({mountTime: new Date()});
},

  onButtonPress() {
    this.props.navigator.push({
      name: 'results'
    })
  }

render(){
  var { mountTime } = this.state;
  return(
    <View style={{flex: 1, backgroundColor: "#0E0F1A",}}>
      <Text style={styles.testHeader}>
        Test #3: Data Base Upload API
      </Text>
      <Text style={styles.bottomBorder}>
      </Text>
      <Image
        source={this.props.source}
        style={[styles.base, {overflow: 'visible'}]}
        onLoadStart={() => this._loadEventFired(`✔ onLoadStart (+${new Date() - mountTime}ms)`)}
        onLoad={(event) => {
          // Currently this image source feature is only available on iOS.
          if (event.nativeEvent.source) {
            const url = event.nativeEvent.source.url;
            this._loadEventFired(`✔ onLoad (+${new Date() - mountTime}ms) for URL ${url}`);
          } else {
            this._loadEventFired(`✔ onLoad (+${new Date() - mountTime}ms)`);
          }
        }}
        onLoadEnd={() => {
          this._loadEventFired(`✔ onLoadEnd (+${new Date() - mountTime}ms)`);
          this.setState({startLoadPrefetched: true}, () => {
            prefetchTask.then(() => {
              this._loadEventFired(`✔ Prefetch OK (+${new Date() - mountTime}ms)`);
            }, error => {
              this._loadEventFired(`✘ Prefetch failed (+${new Date() - mountTime}ms)`);
            });
          });
        }}
      />
      {this.state.startLoadPrefetched ?
        <Image
          source={this.props.prefetchedSource}
          style={[styles.base, {overflow: 'visible'}]}
          onLoadStart={() => this._loadEventFired(`✔ (prefetched) onLoadStart (+${new Date() - mountTime}ms)`)}
          onLoad={(event) => {
            // Currently this image source feature is only available on iOS.
            if (event.nativeEvent.source) {
              const url = event.nativeEvent.source.url;
              this._loadEventFired(`✔ (prefetched) onLoad (+${new Date() - mountTime}ms) for URL ${url}`);
            } else {
              this._loadEventFired(`✔ (prefetched) onLoad (+${new Date() - mountTime}ms)`);
            }
          }}
          onLoadEnd={() => this._loadEventFired(`✔ (prefetched) onLoadEnd (+${new Date() - mountTime}ms)`)}
        />
        : null}
      <Text style={{marginTop: 20}}>
        {this.state.events.join('\n')}
      </Text>
      <NetworkImageCallbackExample source={{uri: 'http://facebook.github.io/origami/public/images/blog-hero.jpg?r=1&t=' + Date.now()}}
          prefetchedSource={{uri: IMAGE_PREFETCH_URL}}/>
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
    marginLeft: 100,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#0B78E4",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0093ad',
  },

})

export default UploadTest
