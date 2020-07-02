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
        backgroundColor: '#ff542e',
        shadowColor: '#000',
        borderRadius: 20,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        height: 50,
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