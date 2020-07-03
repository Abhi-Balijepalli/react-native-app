// Restaurant Options

import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
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
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 25,
        shadowColor: '#ff542e',
        shadowOffset: { width: -5, height: 6 },
        shadowOpacity: 8,
        shadowRadius: 4,
        height:150,
        margin: 20,
        //alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        fontSize: 20,
        fontWeight: "500",
        shadowColor: 'grey',
        flexDirection:'row',   //<-----
    },
    subContent: {
      fontSize: 15,
      color: 'grey',
      justifyContent: 'center',
      fontWeight: "600",
    },
    textContainer: {
        //justifyContent: 'center',
        alignItems: 'center',
    },
});