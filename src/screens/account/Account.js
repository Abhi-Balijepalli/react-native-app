import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    Linking,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';

const {height,width} = Dimensions.get('window');

export default class AccountScreen extends React.Component {
    state = { currentUser: null }
    componentDidMount() {
        const { currentUser } = auth();
        this.setState({ currentUser });
    }
    logOut() {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text style={{fontSize:20,fontWeight:'bold',alignSelf:"center"}}>
                Hi {currentUser && currentUser.email}!
                </Text>
                <Button color = {'#ff542e'} onPress = { () => this.logOut() } title = { 'Log out' }/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})