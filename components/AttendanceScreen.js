import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native';
import {TextInput, List, Card, Title, Avatar, Paragraph, Cover} from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';


const AttendanceCard = ({subject, lecturesAttended, totalLectures, attendancePercentage, totalMarks}) => (
    <Card style={{  margin: 10 }}>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Title title={subject} />
      <Card.Content>
        {/* <Title>Card title</Title> */}
        <Paragraph>Lectures Attended: {lecturesAttended}</Paragraph>
        <Paragraph>Total Lectures: {totalLectures}</Paragraph>
        <Paragraph>Attendance Percentage: {attendancePercentage}</Paragraph>
      </Card.Content>
    </Card>
  );

class AttendanceScreen extends Component{
  constructor(props){
      super(props);


      var today = new Date();
    this.state = {
      data: [
          { 
            id: 1,
            subject: "OS",
            lecturesAttended: 25,
            totalLectures : 42,
            attendancePercentage: 90
          },
          { 
            id: 2,
            subject: "OS",
            lecturesAttended: 25,
            totalLectures : 42,
            attendancePercentage: 90
          },
          { 
            id: 3,
            subject: "OS",
            lecturesAttended: 25,
            totalLectures : 42,
            attendancePercentage: 90
          },
          { 
            id: 4,
            subject: "OS",
            lecturesAttended: 25,
            totalLectures : 42,
            attendancePercentage: 90
          }, { 
            id: 5,
            subject: "OS",
            lecturesAttended: 25,
            totalLectures : 42,
            attendancePercentage: 90
          },
          { 
            id: 6,
            subject: "OS",
            lecturesAttended: 25,
            totalLectures : 42,
            attendancePercentage: 90
          }
      ]
    }
  }
 
  render(){
  
      // const test = this.props.route.params.test
      const navigation = this.props.navigation
      console.log("NAVIGATION", navigation)
      return (
          <View style={styles.container}>
            {/* <Text>Attendance Screen</Text>
            
            <Button 
              title = "Go to Attendance2 Push...Again"
              onPress = {() => navigation.push("AttendanceScreen2")}
            />
      
            <Button 
              title = "Go to Attendance2 Navigate Screen"
              onPress = {() => navigation.navigate("AttendanceScreen2", {TestProps : "Anurag"})}
            />
      
            <Button 
              title = "Go Back"
              onPress = {() => navigation.goBack()}
            />  
      
              <Button 
              title = "Go to First Screen"
              onPress = {() => navigation.popToTop()}
            />
          </View> */}
          <ScrollView>
            {
            this.state.data.map(data => {
                //console.log(data.title)
                return (
                  <AttendanceCard key = {data.id} 
                  subject = {data.subject}
                  lecturesAttended = {data.lecturesAttended}
                  totalLectures = {data.totalLectures}
                  attendancePercentage = {data.attendancePercentage}/>
                )
              })
            }
          </ScrollView>
          
          </View>
        );
  }
}

export default AttendanceScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})