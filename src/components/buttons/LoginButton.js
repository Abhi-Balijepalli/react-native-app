import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function LoginButton({ onPress, title, color, iconName })
{
    return(
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, { backgroundColor: color }]}>
            <View style = {styles.titleView}>
                <Text style = {styles.textForm}>{ title }</Text>
            </View>
        </TouchableOpacity>
    );
} 
const styles = StyleSheet.create({
    buttonContainer:{
        shadowColor: 'gray',
        borderRadius: 10,
        shadowOffset: { width: -5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        height: 40,
        width: 300,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textForm: {
        color: 'white',
        fontWeight: "300",
        fontSize: 25,
    },
    titleView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});