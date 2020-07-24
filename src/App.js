import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import the different screens
import LoadingScreen from './screens/auth/Loading';
import SignUpScreen from './screens/auth/SignUp';
import LoginScreen from './screens/auth/Login';
import MainScreen from './screens/Main';
import LoggedOutScreen from './screens/auth/LoggedOut';
// create our app's navigation stack
const App = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    SignUp: SignUpScreen,
    Login: LoginScreen,
    Main: MainScreen,
    LoggedOut: LoggedOutScreen,
  },
  {
    initialRouteName: 'Loading',
  }
)
export default createAppContainer(App);