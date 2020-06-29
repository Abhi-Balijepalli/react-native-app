import React, { Component } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Auth0 from 'react-native-auth0';
import MainScreen from './Main';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

var credentials = require('./auth0-configuration');
const auth0 = new Auth0(credentials);

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { accessToken: null };
    }
    _onLogin = () => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile email'
            })
            .then(credentials => {
                Alert.alert('AccessToken: ' + credentials.accessToken);
                this.setState({ accessToken: credentials.accessToken });
                this.props.navigation.navigate('Main');
            })
            .catch(error => console.log(error));
    };

    _onLogout = () => {
        auth0.webAuth
            .clearSession({})
            .then(success => {
                Alert.alert('Logged out!');
                this.setState({ accessToken: null });
                this.props.navigation.navigate('Login');
            })
            .catch(error => {
                console.log('Log out cancelled');
            });
    };
    render() {
        let loggedIn = this.state.accessToken === null ? false : true;
        return (
            <View style = { styles.container }>
            <Text style = { styles.header }> Welcome, Log in to get started</Text>
            <Button onPress = { this._onLogin } title = { 'Log In' }/>
            
        </View>
        )
    }
}
// () => this.props.navigation.navigate('Main')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF'
    },
    header: {
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        margin: 10
    }
});