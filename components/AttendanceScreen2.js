import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native';

class AttendanceScreen2 extends Component{
  constructor(props){
      super(props);
  }
 
  render(){
  
      // const test = this.props.route.params.test
      const navigation = this.props.navigation
      console.log(this.props.route.params)
      return (
          <View style={styles.container}>
            <Text>Attendance Screen</Text>
            <Button 
              title = "Go to Attendance2 Push...Again"
              onPress = {() => navigation.push("AttendanceScreen2")}
            />
            {/* <Text>{test}</Text> */}
            
            {/* <Button 
              title = "Go to Attendance2 Screen...Again"
              onPress = {() => navigation.push("AttendanceScreen2", {test : "Anurag"})}
            />
      
            <Button 
              title = "Go to Home Screen"
              onPress = {() => navigation.navigate("HomeScreen")}
            />
       */}
            <Button 
              title = "Go Back"
              onPress = {() => navigation.goBack()}
            />  
      
              <Button 
              title = "Go to First Screen"
              onPress = {() => navigation.popToTop()}
            />
          </View>
        );
  }
}

export default AttendanceScreen2;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center'
    }
})