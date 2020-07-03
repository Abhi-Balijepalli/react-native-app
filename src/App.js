
import React, { Component } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Auth0 from 'react-native-auth0';
import MainScreen from './screens/Main';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
//import LoginScreen from './screens/Login';
import LoginButton from './components/buttons/LoginButton'
import logoPic from './assets/TheLunchBot_logo.png'

var credentials = require('./auth0-configuration');
const auth0 = new Auth0(credentials);


/*
class LoginScreenOld extends Component {
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
                
            })
            .catch(error => console.log(error));
    };

    _onLogout = () => {
        auth0.webAuth
            .clearSession({})
            .then(success => {
                Alert.alert('Logged out!');
                this.setState({ accessToken: null });
            })
            .catch(error => {
                console.log('Log out cancelled');
            });
    };
    loggedOut = () => {
        <View style = { styles.container }>
            <Text style = { styles.header }> Welcome, Log in to get started</Text>
            <Button onPress = { this._onLogin } title = { 'Log In' }/>
        </View>
    }
    render() {
        let loggedIn = this.state.accessToken === null ? false : true;
        let output = null;
        if (loggedIn){
            output = <NavigationScreen/>;
        }
        else{
            output = <this.loggedOut/>;
        }
        return output;
    }
} */


class LoginScreen extends Component {
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
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffd3ad', '#ffac82']} style={styles.linearGradient}>
            <View style = { styles.container }>
                <Image sytle = {styles.LogoImage} source = { logoPic }/>
                <LoginButton onPress = { this._onLogin } title = { 'Login / Register' } />
                <Button color = {'#ff542e'} onPress = { this._onLogin } title = { 'continue as guest' }/> 
            </View>
            </LinearGradient>
        )
    }
}
// () => this.props.navigation.navigate('Main')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient :{
        flex: 1,
        justifyContent: 'center',
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


export default createAppContainer(createSwitchNavigator(
    {
        Login: LoginScreen,
        Main: MainScreen,
    },
    {
        initialRouteName: 'Login',
    }
  ));