// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert, Image } from 'react-native'
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import AuthButton from '../../components/buttons/AuthButtons';
import LunchBotLogo from '../../assets/TheLunchBot_logo.png';
import LoginButton from '../../components/buttons/LoginButton';
import GoogleLoginButton from '../../components/buttons/GoogleLoginButton';
import DividerLine from '../../components/DividerLine';
import GoogleAuth from './GoogleAuth';

export default class LoginScreen extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    const { email, password } = this.state
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => { this.props.navigation.navigate('Main') })
      .catch(error => this.setState({ errorMessage: error.message }))
    console.log(' handle login')
  }
  verifyEmail = () => {
    
    Alert.alert(
      //title
      'Verify Email',
      //body
      'Your email has not been verified yet',
      [
        {text: 'Resend', onPress: () => console.log('Pressed Resend')},
        {text: 'Cancel', onPress: () => console.log('Pressed Cancel')},
      ],
      { cancelable: true }
    );
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffb685', '#ff8838']} style={styles.linearGradient}>
      <View style={styles.container}>
          {/* <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffd3ad', '#ffac82']} style={styles.linearGradient}> */}
          <Image
          source={LunchBotLogo}
        />
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <GoogleLoginButton title="Sign in with Google" onPress = {() => GoogleAuth().then(() => console.log('User signed in with gmail'))} />
        <DividerLine orientation = 'center' textColor = 'white' borderColor = '#EEEEEE'>OR</DividerLine>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="  Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="  Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
         <AuthButton title="Forgot Password?" onPress={() => this.props.navigation.navigate('ForgotPass')} color="white" />
        <LoginButton title = "Sign In" onPress = { this.handleLogin} color = "#ff542e"/>
        <AuthButton
          title="Don't have an account? Sign up"
          onPress={() => this.props.navigation.navigate('SignUp')}
          color = '#40F1FF'
        />
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
})