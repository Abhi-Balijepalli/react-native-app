import React, { Component } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    Linking,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';

const {height,width} = Dimensions.get('window');

export default class Account extends Component {
    render ()
    {
        return(
            <View style={{flex:1}}>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:height/2,alignSelf:"center"}}>[account]</Text>
            </View>
        )
    }
}