import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function AuthGradient() {
    return(
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffecdb', '#ffd3ad', '#ffac82']} style={styles.linearGradient}/>
    );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
    width: 415,
  },

});