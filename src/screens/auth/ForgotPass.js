// ForgotPass.js
// If user forgot password
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert, Image } from 'react-native'
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import AuthButton from '../../components/buttons/AuthButtons';
import LoginButton from '../../components/buttons/LoginButton';
import LunchBotLogo from '../../assets/TheLunchBot_logo.png';


export default class ForgotPassScreen extends Component {
    state = { email: '', errorMessage: null }
    resetPassword(Email) {
        if (Email === '')
        {
            this.setState({errorMessage: 'Please enter your email'});
        }
        else
        {
            // this.setState({errorMessage: Email });
            
            auth().sendPasswordResetEmail(Email)
            .then(function (user) {
                Alert.alert('Password reset link sent!', 'Please check your email.')
            })
            .catch(error => this.setState({ errorMessage: error.message }))
        }
        return;
      }
    render() {
        return(
            <View style={styles.MainContainer}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffb685', '#ff8838']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        {/* <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffd3ad', '#ffac82']} style={styles.linearGradient}> */}
                        <Image
                        source={LunchBotLogo}
                        />
                        <Text style={styles.fontSizes}>Forgot Password</Text>
                        {this.state.errorMessage &&
                        <Text style={{ color: 'red' }}>
                            {this.state.errorMessage}
                        </Text>}
                        <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        placeholder="  Email"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        />
                        <LoginButton title="Reset Password" onPress = { () => this.resetPassword(this.state.email) } color="#ff542e" />
                        <AuthButton title="Return to Login" onPress={() => this.props.navigation.navigate('Login')} color="#c7f4ff" />
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
    }
  })