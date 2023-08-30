import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {TextInput, WebView} from 'react-native-web'

const {longitude,latitiude} = this.state

const path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'



export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <TextInput
                      style={{height:40,borderColor:'gray',borderWidth:1}}
                      placeholder="Enter your lattitude here "
                      placeholderTextColor="ffff#000000"
                      onChnagetext={(text)=>{
                        this.setState({
                            lattitude:text
                        })
                    }}/>
                    
              <WebView 
                  scalesPageToFit={true}
                  sorce={{uri:path}}
                  style={{margingTop:20,marginBottom:20,}}
                  /> 
            </View>
        )
    }
}