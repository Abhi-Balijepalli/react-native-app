import React, { Component } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import logoPic from '../../assets/TheLunchBot_logo.png';
import AuthGradient from '../../components/AuthGradient';
import LoginButton from '../../components/buttons/LoginButton'

export default class LoggedOutScreen extends Component {

    render() {
        return(
            <AuthGradient>
                <View style = { styles.container }>
                    <Image style = {styles.LogoImage} source = { logoPic }/>
                    <LoginButton title = { 'Login with Email' } />
                    <Button color = {'#ff542e'} title = { 'Sign Up' }/> 
                </View>
            </AuthGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        margin: 10
    },
    LogoImage: {
        flex: 1,
        aspectRatio: 2.5, 
        resizeMode: 'cover',
    }
});