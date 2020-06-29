import React, { Component } from 'react';
// import LoginScreen from '../../App';
import {
    Text,
    Dimensions,
    View
} from 'react-native';

const {height,width} = Dimensions.get('window');

export default class Settings extends Component {

    constructor(props) {
        super(props);
    }
    render ()
    {
        return(
            <View style={{flex:1}}>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:height/2,alignSelf:"center"}}>[settings]</Text>
                {/*<Button onPress = { this.props.login._onLogout } title = { 'Log out' }/>*/}
            </View>
        )
    }
}