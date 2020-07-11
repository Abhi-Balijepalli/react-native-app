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
    ActivityIndicator,
    TouchableOpacity,
    FlatList,
    View,
} from 'react-native';
import Data from './../../../Data/langer.json'
import BoxContainer from './../../../styling/boxContainer'
import { color } from 'react-native-reanimated';
import LangerButton from '../../../components/buttons/LangerButton';
import {SearchBar} from 'react-native-elements';
const {height,width} = Dimensions.get('window');

export default function DeliveryScreen({ navigation })
{
    return (
        <View style={{flex:1}}>
            <DeliveryComponents/>
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

      state = {
        search: '',
      };
    
    }
    componentDidMount() {
        //setting state
        this.setState({
          isLoading: false,
          dataSource: Data.langer,
        })
        updateSearch = (search) => {
          this.setState({search});
        }
    }
    render() {
      //loading screen 
      if(this.state.isLoading) {
        <View style = { styles.MainContainer }>
          <ActivityIndicator/>
        </View>
      }
      const {search} = this.state;
      return (
        <View>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
          <View style = {styles.MainContainer}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => { //currently reading the langer.json, to get different locations
                return (
                  <LangerButton location_name = {item.location_name} address = {item.address} onPress = { () => navigation.navigate('Restaurant') }/>
                )
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      )
    }
  }

  class RestaurantScreen extends Component {

    constructor(props) {
        super(props);
    }
    render ()
    {
        return(
            <View style={{flex:1}}>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:height/2,alignSelf:"center"}}>[restaurant screen]</Text>
                {/*<Button onPress = { this.props.login._onLogout } title = { 'Log out' }/>*/}
            </View>
        )
    }
  }
  const styles = StyleSheet.create(
  {
      MainContainer:
      {
          flex: 1,
          paddingTop: 1
      },
      Container: {
        height: 80,
        borderRadius: 20
      },
      content:{
          fontSize: 25,
          flexDirection:'column',
          justifyContent:'center'    //<-----
      },
      subContent: {
        fontSize: 15,
        justifyContent: 'center',
        color: 'black',
      },
      textStyle:{
        color: '#fff',
        fontSize:22
      }
  });

