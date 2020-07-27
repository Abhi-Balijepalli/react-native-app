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

export default HomeButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style = {styles.textForm}>{ title }</Text>
    </TouchableOpacity>
    );

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'transparent',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3,
        height: 35,
        width: 220,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textForm: {
        color: 'white',
        fontWeight: "400",
        fontSize: 14,
    }
});