import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import LoginButton from '../../components/buttons/LoginButton';
import GoogleLoginButton from '../../components/buttons/GoogleLoginButton';
import LunchBotLogo from '../../assets/TheLunchBot_logo.png';
import GoogleAuth from './GoogleAuth';
  
export default class LoggedOutScreen extends Component {

    render() {
        return(
            <View style={styles.MainContainer}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffb685', '#ff8838']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        {/* <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffd3ad', '#ffac82']} style={styles.linearGradient}> */}
                        <Image source={LunchBotLogo}/>
                        <LoginButton title="Login with Email"  iconName = "email-outline" color = "#ff542e" onPress = {() => this.props.navigation.navigate('Login')} />
                        <GoogleLoginButton title="Login with Google" onPress = {() => GoogleAuth().then(() => console.log('User signed in with gmail'))} />
                        {/* </LinearGradient> */}
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
    },
    fontSizes : {
      paddingTop: 30,
      fontSize: 27,
      fontWeight: "500",
      paddingBottom: 10,
    },
    container: {
      paddingTop: '20%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      backgroundColor: 'white',
      height: 50,
      width: '85%',
      borderColor: '#ff8838',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 1.5,
      marginTop: 8
    },
    linearGradient: {
      height: 900,
      width: 415
    },
    gmailButton: {
        width: 300,
        height: 50
      }
  })