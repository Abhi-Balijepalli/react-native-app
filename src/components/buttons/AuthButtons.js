import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export default AuthButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style = {styles.textForm}>{ title }</Text>
    </TouchableOpacity>
    );

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'transparent',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        height: 20,
        width: 300,
        marginTop: 10,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flex:0,
    },
    textForm: {
        color: 'white',
        fontWeight: "400",
        fontSize: 15,
    }
});