import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import googleLogo from '../../assets/google_logo.png';

export default function GoogleLoginButton({ onPress, title })
{
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <View style = {styles.titleView}>
                <Image source = { googleLogo } style = { styles.image } />
                <Text style = {styles.textForm}>{ title }</Text>
            </View>
        </TouchableOpacity>
    );
} 
const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'white',
        shadowColor: 'grey',
        borderRadius: 10,
        shadowOffset: { width: -5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        height: 40,
        width: 300,
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textForm: {
        color: '#636363',
        fontWeight: "300",
        fontSize: 25,
        paddingLeft: 25,
    },
    titleView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 25,
        height: 25,
    }
});