'use strict';
 
import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-svg';
import { WebView} from 'react-native-webview';
import StyleCode from './StyleCode'; 
import LogOut from './LogOut';
import ViewShot from 'react-native-view-shot';

import {
   
    StyleSheet,
    View,
    TextInput,
    Button,
    Share,
    Image,
    ScrollView
} from 'react-native';
 
export default class Profile extends Component {
  state = {
    text: '.',
  };
 
 shottime = () => {
  
    this.refs.viewShot.capture().then(uri => {
      console.log("do something with ", uri);
      this.setState({
        camera: uri
    });
    
    });
  
 }



  render() {
   


    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white'}}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
        </View>
        
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        
        
        <ViewShot ref="viewShot" options={{ format: "jpg", quality: 1.0 }}>
        <QRCode
          value={this.state.text}
          size={200}
          bgColor="#FFFFFF"
          fgColor="#000000"
          
        
          />
           </ViewShot>
          </View>
          <View style={{ marginTop: 10}}>
          <Button
          onPress={this.shottime}
          title="Press me"
          />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
      <Image 
        style={{ height: 200, width: 200 }}
        source={{ uri: this.state.camera}}
      />
      </View>
       
      </ScrollView>
    
      
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});




// import * as React from 'react';
// import { WebView } from 'react-native-webview';

// export default class Profile extends React.Component {
//   render() {
//     return <WebView source={{ uri: 'https://expo.io' }} style={{ marginTop: 20 }} />;
//   }
// }