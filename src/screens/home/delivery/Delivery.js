import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
    Alert,
    StyleSheet,
    Text,
    Linking,
    Dimensions,
    ActivityIndicator,
    TouchableOpacity,
    FlatList,
    View,
    TextInput,
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
        <View>
          <SearchActivity/>
          <DeliveryComponents/>
        </View>
    )
}
class SearchActivity extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: '',
      data: []
    }
    this.arrayholder = [];
  }
  componentDidMount() {
    this.setState({
      isLoading: false,
      data: Data.langer,
    }, () => {
      this.arrayholder = Data.langer;
    });
  }
  GetFlatListItem(location_name) {
    Alert.alert(location_name);
  }
  searchData(text) {
    const newData = this.arrayholder.filter(item => {
    const itemData = item.zip();
    const textData = location_name.toUpperCase();
    return itemData.indexOf(textData) > -1
    });
  }
   
  itemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
 
      <View style={styles.MainContainer}>
 
      <TextInput 
      //  style={styles.textInput}
       onChangeText={(text) => this.searchData(text)}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Search Here" />
       </View>
       );
    }
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
                <LangerButton location_name = {item.location_name} address = {item.address} onPress = { () => navigation.navigate('Restaurant') }/>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
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
        justifyContent: 'center',
        flex: 1,
        marginTop: 40,
        padding: 16,
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

