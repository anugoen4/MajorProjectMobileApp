import React , {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer,
   DarkTheme as NavigationDarkTheme,
   DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './components/MainTabScreen'
import {DrawerContent} from './components/DrawContent';
import {AsyncStorage} from 'react-native';
import AttendanceScreen from './components/AttendanceScreen'
import AttendanceScreen2 from './components/AttendanceScreen2'
import ProfileScreen from './components/ProfileScreen'
import MarksScreen from './components/MarksScreen'
import LibraryScreen from './components/LibraryScreen'
import RootStackScreen from './components/RootStack'
import { ActivityIndicator } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'
import Icon from 'react-native-vector-icons/Ionicons';
import DetailScreen from './components/Details';


const HomeStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const MarksStack = createStackNavigator();
const AttendanceStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  
  const[login,setLogin] = useState(false)

  useEffect(() => {
    try{
      const obj = AsyncStorage.getItem('login_detail')
      const login_detail = JSON.parse(obj)
      console.log("Hello",login_detail)
      if(login_detail === null){
        console.log("False")
        setLogin(false)
      }else{
        console.log("True")
        setLogin(true)
      }
    }catch{
      console.log("error")
    }
    
  }, [])
  

  const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions = {{
        headerStyle : {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight : 'bold'
        }
      }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options = {{
          title: 'OverView',
          headerLeft: () => (
            <Icon.Button name = 'ios-menu' size = {25}
              backgroundColor = '#009387' onPress ={() => {
                  navigation.openDrawer()
              }}
              ></Icon.Button>
          )
      }} 
        />
    </HomeStack.Navigator>
  )

  const LibraryStackScreen = ({navigation}) => (
    <LibraryStack.Navigator screenOptions = {{
        headerStyle : {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight : 'bold'
        }
      }}>
      <LibraryStack.Screen name="LibraryScreen" component={LibraryScreen} options = {{
          title: 'OverView',
          headerLeft: () => (
            <Icon.Button name = 'ios-menu' size = {25}
              backgroundColor = '#009387' onPress ={() => {
                  navigation.openDrawer()
              }}
              ></Icon.Button>
          )
      }} 
        />
    </LibraryStack.Navigator>
  )


  const MarksStackScreen = ({navigation}) => (
    <MarksStack.Navigator screenOptions = {{
        headerStyle : {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight : 'bold'
        }
      }}>
      <MarksStack.Screen name="MarksScreen" component={MarksScreen} options = {{
          title: 'OverView',
          headerLeft: () => (
            <Icon.Button name = 'ios-menu' size = {25}
              backgroundColor = '#009387' onPress ={() => {
                  navigation.openDrawer()
              }}
              ></Icon.Button>
          )
      }} 
        />
    </MarksStack.Navigator>
  )

  const AttendanceStackScreen = ({navigation}) => (
    <AttendanceStack.Navigator screenOptions = {{
        headerStyle : {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight : 'bold'
        }
      }}>

      <AttendanceStack.Screen name="AttendanceScreen" component={AttendanceScreen} options = {{
          title: 'OverView',
          headerLeft: () => (
            <Icon.Button name = 'ios-menu' size = {25}
              backgroundColor = '#009387' onPress ={() => {
                  navigation.openDrawer()
              }}
              ></Icon.Button>
          )
      }} 
        />

      <AttendanceStack.Screen name="AttendanceScreen2" component={AttendanceScreen2} options = {{
          title: 'OverView',
          // headerLeft: () => (
          //   <Icon.Button name = 'ios-menu' size = {25}
          //     backgroundColor = '#009387' onPress ={() => {
          //         navigation.openDrawer()
          //     }}
          //     ></Icon.Button>
          // )
      }} 
        />
    </AttendanceStack.Navigator>
  )


  const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions = {{
        headerStyle : {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight : 'bold'
        }
      }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options = {{
          title: 'OverView',
          headerLeft: () => (
            <Icon.Button name = 'ios-menu' size = {25}
              backgroundColor = '#009387' onPress ={() => {
                  navigation.openDrawer()
              }}
              ></Icon.Button>
          )
      }} 
        />
    </ProfileStack.Navigator>
  )

  return (
  
          <NavigationContainer>
          {false? (
              <RootStackScreen />
          ):
          (
              <Drawer.Navigator initialRouteName="HomeStackScreen"
                drawerContent = {props => <DrawerContent {...props} />}
              >
              <Drawer.Screen name="HomeStackScreen" component={HomeStackScreen} />
              <Drawer.Screen name="LibraryStackScreen" component={LibraryStackScreen} />
              <Drawer.Screen name="MarksStackScreen" component={MarksStackScreen} />
              <Drawer.Screen name="AttendanceStackScreen" component={AttendanceStackScreen} />
              <Drawer.Screen name="ProfileStackScreen" component={ProfileStackScreen} />
              {/* <Drawer.Screen name="Details" component={DetailScreen} /> */}
            </Drawer.Navigator>
          )}
        
          
        </NavigationContainer>
    
  );
}

