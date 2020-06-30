import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
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
// screens
import DeliveryScreen from './delivery/Delivery';
import HomeButton from '../../components/buttons/HomeScreenButtons';

const {height,width} = Dimensions.get('window');
const Stack = createStackNavigator();

export default class Home extends Component {
    render ()
    {
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name = "Home" component = { HomeScreen } />
                    <Stack.Screen name = "Delivery" component = { DeliveryScreen } />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

function HomeScreen({ navigation })
{
    return (
        <View style={{flex:1}}>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:height/3,alignSelf:"center"}}>[home]</Text>
            <HomeButton onPress = {() => navigation.navigate('Delivery')} title = { 'Delivery'} />
            <HomeButton title = { 'Quick Grab' } />
        </View>
    )
}

