import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button 
          title = "Go to AttendanceScreen Screen"
          onPress = {() => navigation.navigate("AttendanceStackScreen")}
        />
      </View>
    );
  }

  export default HomeScreen;
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  