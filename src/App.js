
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
import MainScreen from './screens/Main';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
//import LoginScreen from './screens/Login';
import LoginButton from './components/buttons/LoginButton'
import logoPic from './assets/TheLunchBot_logo.png'




class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { accessToken: null };
    }
    render() {
        return (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffd3ad', '#ffac82']} style={styles.linearGradient}>
            <View style = { styles.container }>
                <Image sytle = {styles.LogoImage} source = { logoPic }/>
                <LoginButton onPress = { () => this.props.navigation.navigate('Main') } title = { 'Login / Register' } />
                <Button color = {'#ff542e'} onPress = { () => this.props.navigation.navigate('Main') } title = { 'continue as guest' }/> 
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