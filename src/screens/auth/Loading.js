// Loading.js
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Alert, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

export default class LoadingScreen extends Component {
    componentDidMount() {
        // authentication subscriber
        auth().onAuthStateChanged((user) => {
          if (user) {
              this.props.navigation.navigate('Main');
          }
          else {
            this.props.navigation.navigate('Login');
          }
        })
    }
    emailAlert = () => {
      Alert.alert(
        //title
        'Verify Email',
        //body
        'Please verify your email ',
        [
          {text: 'OK', onPress: () => console.log('Pressed OK')},
        ],
        { cancelable: true }
      );
    }
    logOut() {
      auth()
          .signOut()
          .then(() => console.log('User signed out!'));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
        <Button color = {'#ff542e'} onPress = { () => this.logOut() } title = { 'DEBUG: Log out' }/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
