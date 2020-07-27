// SignUp.js
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import LinearGradient from 'react-native-linear-gradient';
import AuthButton from '../../components/buttons/AuthButtons';

export default class SignUpScreen extends Component {
  state = { email: '', password: '', confirmpassword: '', errorMessage: null }
SignUp = () => {
    if (this.state.email === '' || this.state.password === '' || this.state.confirmpassword === ''){
      this.setState({ errorMessage: 'Please fill out all of the inputs'});
    }
    else if (this.state.password === this.state.confirmpassword) {
      auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { this.props.navigation.navigate('Main') })
        .catch(error => this.setState({ errorMessage: error.message }))
    }
    else {
      this.setState({ errorMessage: 'Your password and confirmed password are different!'});
    }
  console.log('handleSignUp')
}
verifyEmail() {
  Alert.alert(
    //title
    'Verify email',
    //body
    'Welcome to Lunch Bot! Verify your email and login to get started.',
    [
      {text: 'OK', onPress: () => console.log('Pressed OK')},
    ],
    { cancelable: true }
  );
}
render() {
    return (
      <View style={styles.MainContainer}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffb685', '#ff8838']} style={styles.linearGradient}>
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={confirmpassword => this.setState({ confirmpassword })}
          value={this.state.confirmpassword}
        />
        <AuthButton title="Sign Up" onPress={this.SignUp} />
        <AuthButton
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
      </LinearGradient>
      </View>
      
    )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: '#f0f0f0',
    height: 40,
    borderRadius: 10,
    width: '85%',
    borderColor: '#ff8838',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 8
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
    width: 415,
  }
})