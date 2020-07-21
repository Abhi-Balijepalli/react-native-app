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

export default LangerButton = ({ onPress, location_name, address, gtb_time}) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}> 
        <View style = {styles.textContainer}>
        <Text style={styles.content}>{location_name}</Text>
        <Text style = {styles.subContent} >{address} </Text>
        <Text style = {styles.subContent} >{gtb_time} </Text>
        </View>
    </TouchableOpacity>
    );

const styles = StyleSheet.create({
    buttonContainer:{
        flex: 1,
        backgroundColor: '#f7f6f5',
        borderRadius: 20,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        height:80,
        marginTop: 7,
        marginHorizontal: 10,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        fontSize: 20,
        fontWeight: "500",
        shadowColor: 'white',
        flexDirection:'row',   //<-----
    },
    subContent: {
      fontSize: 12,
      color: '#ff542e',
      fontWeight: "400",
    },
    textContainer: {
        //justifyContent: 'center',
        alignItems: 'center',
    },
});