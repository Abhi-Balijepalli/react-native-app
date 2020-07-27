// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import AuthButton from '../../components/buttons/AuthButtons'

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
      <View syte={styles.MainContainer}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffb685', '#ff8838']} style={styles.linearGradient}>
      <View style={styles.container}>
          {/* <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffd3ad', '#ffac82']} style={styles.linearGradient}> */}
        <Text style={styles.fontSizes}>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <AuthButton title="Sign In" onPress={this.handleLogin} color="#c7f4ff" />
        <AuthButton
          title="New user? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
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
    fontSize: 25,
    fontWeight: "500",
    paddingBottom: 50,
  },
  container: {
    paddingTop: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#f0f0f0',
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
    width: 415,
  }
})