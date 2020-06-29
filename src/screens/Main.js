import React, { Component } from 'react';
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
// nav bar
import CurvedNavBar from '../components/NavBar';
// screens
import Account from './account/Account';
import Shop from './shop/Shop';
import Home from './home/Home';
import Coupon from './coupon/Coupon';
import Settings from './settings/Settings';

const {height,width} = Dimensions.get('window');

// Map navigation bar screens
export default class MainScreen extends Component {
 
    state={
        page:1
    }
   
    render() {
        return (
      <View style={{backgroundColor:'white',flex:1}}>

            {this.state.page===1?<Account/>:null}

            {this.state.page===2?<Shop/>:null}

            {this.state.page===3?<Home/>:null}

            {this.state.page===4?<Coupon/>:null}

            {this.state.page===5?<Settings/>:null}

            <CurvedNavBar  icons={['account','cart','home','tag','cogs']} 
                navColor={'orange'}
                selected = {3}
                cb={(id)=>{this.setState({page:id})}} //change the parent's state of page 
                />
            </View>
        )
    }
}

