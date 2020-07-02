// LangerButton

import React, { Component } from 'react';

import {
    Alert,
    Button,
    StyleSheet,
    Text,
    Linking,
    Dimensions,
    TouchableOpacity,
    View,
    Image,
    ImageBackground
} from 'react-native';

import LangerPic from '../../assets/image.png'

export default LangerButton = ({ onPress, location_name, address}) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}> 
        <View style = {styles.textContainer}>
        <Text style={styles.content}>{location_name}</Text>
        <Text style = {styles.subContent} >{address}.</Text>
        </View>
    </TouchableOpacity>
    );

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#ff542e',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        height:100,
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        fontSize: 20,
        flexDirection:'column',
        justifyContent:'center'    //<-----
    },
    subContent: {
      fontSize: 15,
      justifyContent: 'center',
      color: 'white',
    },
});