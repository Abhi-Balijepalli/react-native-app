import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    Linking,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Image,
    View
} from 'react-native';


// screens
// import DeliveryScreen from './delivery/Delivery';
// import RestaurantScreen from './delivery/Restaurant';
import HomeButton from '../../components/buttons/HomeScreenButtons';
import logoPic from '../../assets/TheLunchBot_logo.png'
import LangerButton from '../../components/buttons/LangerButton';
import Data from '../../Data/langer.json'
import RestaurantsData from '../../Data/restaurants.json'
import RestaurantButton from '../../components/buttons/RestaurantOptions'
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
                    <Stack.Screen name = "Restaurant" component = { RestaurantScreen } />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

function HomeScreen({ navigation })
{
    return (
        <View style = {styles.MainContainer}>
            <View style = {{alignItems: 'center'}}>
                <Image source = { logoPic }/>
            </View>
            <HomeButton onPress = {() => navigation.navigate('Delivery')} title = { 'Delivery'} />
            <HomeButton title = { 'Quick Grab' } />
        </View>
    )
}


function DeliveryScreen({ navigation })
{
    return (
        <View style={{flex:1}}>
            <DeliveryComponents navigation = {navigation} />
        </View>
    )
}
class DeliveryComponents extends Component {
    
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading: true, //checking is the data is being loaded
        dataSource:[], //to store objects from json data
      };
    }
    componentDidMount() {
        //setting state
        this.setState({
          isLoading: false,
          dataSource: Data.langer,
        })
    }
    render() {
      //loading screen 
      if(this.state.isLoading) {
        <View style = { styles.MainContainer }>
          <ActivityIndicator/>
        </View>
      }
      return (
        <View style = {styles.MainContainer}>
          
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => { //currently reading the langer.json, to get different locations
              return (
                /*<BoxContainer style = {styles.Container}>
                  <Text style={styles.content}>{item.location_name}</Text>
                  <Text style = {styles.subContent} >{item.address}.</Text>
                </BoxContainer>*/
                <LangerButton location_name = {item.location_name} address = {item.address} onPress = { () => this.props.navigation.navigate('Restaurant', { item }) }/>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )
    }
  }

  class RestaurantComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true, //checking is the data is being loaded 
            resData: [], //to store objects from json data
          };
    }
    componentDidMount() {
        //setting state
        this.setState({
        isLoading: false,
        resData: RestaurantsData.restaurants,
        })
      }
      render() {
        //loading screen 
        if(this.state.isLoading) {
          <View style = { styles.MainContainer }>
            <ActivityIndicator/>
          </View>
        }
        return (
          <View style = {styles.MainContainer}>
            <FlatList
              data={this.state.resData}
              renderItem={({item}) => { //currently reading the langer.json, to get different locations
                if (this.props.item.zip == item.gtb_zip) {
                    return (
                        <RestaurantButton  location_name = {item.rstrnt_name} address = {item.rstrnt_addr} />
                      )
                }
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )
      }
    }

  const styles = StyleSheet.create(
  {
      MainContainer:
      {
          backgroundColor: '#d4fff6',
          flex: 1,
          paddingTop: 1,
      },
      Container: {
        height: 80,
        justifyContent: 'center',
        borderRadius: 20,
      },
      content:{
          fontSize: 25,
          flexDirection:'row',
          justifyContent:'center',
          alignItems: 'center',    //<-----
      },
      subContent: {
        fontSize: 15,
        justifyContent: 'center',
        color: 'black',
      },
      textStyle:{
        color: '#fff',
        fontSize:22,
        justifyContent: 'center',
      }
  });

  function RestaurantScreen({ route, navigation })
  {
      const { item } = route.params;
      return (
          <View style={{flex:1}}>
              <RestaurantComponents item = { item }/>
          </View>
      )
  }