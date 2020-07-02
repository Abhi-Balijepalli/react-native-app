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
    Image,
    View
} from 'react-native';
// screens
import DeliveryScreen from './delivery/Delivery';
// import RestaurantScreen from './delivery/Restaurant';
import HomeButton from '../../components/buttons/HomeScreenButtons';
import logoPic from '../../assets/TheLunchBot_logo.png'

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
            <View style = {{alignItems: 'center'}}>
                <Image source = { logoPic }/>
            </View>
            <HomeButton onPress = {() => navigation.navigate('Delivery')} title = { 'Delivery'} />
            <HomeButton title = { 'Quick Grab' } />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
})

