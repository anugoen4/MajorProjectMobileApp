import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native';
import {TextInput, List, Card, Title, Avatar, Paragraph, Cover} from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';


const MarksCard = ({examType, subject, marksObtained, highestMarks, totalMarks}) => (
    <Card style={{  margin: 10 }}>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Title title={examType} subtitle={subject}  />
      <Card.Content>
        {/* <Title>Card title</Title> */}
        <Paragraph>Marks Obtained: {marksObtained}</Paragraph>
        <Paragraph>Highest Marks: {highestMarks}</Paragraph>
        <Paragraph>Totak Marks: {totalMarks}</Paragraph>
      </Card.Content>
    </Card>
  );


class MarksScreen extends Component{
  constructor(props){
      super(props);

      var today = new Date()
    this.state = {
      data: [
          { 
            id: 1,
            examType: "Quiz",
            subject: "Mathematics",
            marksObtained : 90,
            highestMarks : 95,
            totalMarks: 100
          },
          { 
            id: 2,
            examType: "Assignment",
            subject: "DBMS",
            marksObtained : 90,
            highestMarks : 95,
            totalMarks: 100
          },
          { 
            id: 3,
            examType: "Quiz",
            subject: "OS",
            marksObtained : 90,
            highestMarks : 95,
            totalMarks: 100
          },
          { 
            id: 4,
            examType: "Quiz",
            subject: "DSA",
            marksObtained : 90,
            highestMarks : 95,
            totalMarks: 100
          }, { 
            id: 5,
            examType: "MidTerm",
            subject: "Science",
            marksObtained : 90,
            highestMarks : 95,
            totalMarks: 100
          },
          { 
            id: 6,
            examType: "Assignment",
            subject: "English",
            marksObtained : 90,
            highestMarks : 95,
            totalMarks: 100
          }
      ]
    }
  }
 
  render(){
      return (
        <View style = {styles.container} >
          <ScrollView>
          {
            this.state.data.map(data => {
              //console.log(data.title)
              return (
                <MarksCard key = {data.id} 
                examType = {data.examType} 
                subject = {data.subject}
                marksObtained = {data.marksObtained}
                highestMarks = {data.highestMarks}
                totalMarks = {data.totalMarks}/>
              )
            })
          }
          </ScrollView>
           
        </View>

        );
  }
}

export default MarksScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})