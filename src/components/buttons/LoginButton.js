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

export default LoginButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style = {styles.textForm}>{ title }</Text>
    </TouchableOpacity>
    );

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#ff542e',
        shadowColor: 'grey',
        borderRadius: 10,
        shadowOffset: { width: -5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 2,
        height: 50,
        width: 300,
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textForm: {
        color: 'white',
        fontWeight: "800",
        fontSize: 25,
    }
});