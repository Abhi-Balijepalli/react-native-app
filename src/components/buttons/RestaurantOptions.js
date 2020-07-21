// Restaurant Options

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


export default LangerButton = ({ onPress, location_name, address, cuisine}) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}> 
        <View style = {styles.textContainer}>
        <Text style={styles.content}>{location_name}</Text>
        <Text style = {styles.subContent} >{address}.</Text>
        <Text style = {styles.CuisineType} > {cuisine}</Text>
        </View>
    </TouchableOpacity>
    );


const styles = StyleSheet.create({
    buttonContainer:{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 25,
        shadowColor: '#ff542e',
        shadowOffset: { width: -5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 1,
        height:110,
        marginTop: 7,
        marginHorizontal: 10,
        marginBottom:30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        fontSize: 20,
        fontWeight: "500",
        shadowColor: '#ffffff',
        flexDirection:'row',   //<-----
    },
    subContent: {
      fontSize: 15,
      color: '#808080',
      justifyContent: 'center',
      fontWeight: "600",
    },
    CuisineType: {
        color: '#ff542e',
        borderRadius: 25,
        fontWeight: "700",
        shadowRadius: 4,
        height:25,
    },
    textContainer: {
        //justifyContent: 'center',
        alignItems: 'center',
    },
});