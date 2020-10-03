import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, List, Card, Title, Avatar, Paragraph, Cover} from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';


const LibraryCard = ({title, subtitle, issueDate, returnDate}) => (
    <Card style={{  margin: 10 }}>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Title title={title} subtitle={subtitle}  />
      <Card.Content>
        {/* <Title>Card title</Title> */}
        <Paragraph>Issue Date: {issueDate}</Paragraph>
        <Paragraph>Return Date: {returnDate}</Paragraph>
      </Card.Content>
    </Card>
  );

class LibraryScreen extends Component{
    constructor(props){
        super(props);

        var today = new Date();
        this.state = {
        data: [
                { 
                    id: 1,
                    title: "Book 1",
                    subtitle: "Book Subtitle 1",
                    issueDate : today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                    returnDate : today.getFullYear()  +  '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 7)
                },
                { 
                    id: 2,
                    title: "Book 2",
                    subtitle: "Book Subtitle 2",
                    issueDate : today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                    returnDate : today.getFullYear() +  '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 7)
                },
                { 
                    id: 3,
                    title: "Book 3",
                    subtitle: "Book Subtitle 3",
                    issueDate : today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                    returnDate : today.getFullYear()  +  '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 7)
                },
                { 
                    id: 4,
                    title: "Book 4",
                    subtitle: "Book Subtitle 4",
                    issueDate : today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                    returnDate : today.getFullYear()  +  '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 7)
                }, { 
                    id: 5,
                    title: "Book 5",
                    subtitle: "Book Subtitle 5",
                    issueDate : today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                    returnDate : today.getFullYear()  +  '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 7)
                },
                { 
                    id: 6,
                    title: "Book 6",
                    subtitle: "Book Subtitle 6",
                    issueDate : today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                    returnDate : today.getFullYear()  +  '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 7)
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
                        return (
                            <LibraryCard key = {data.id} 
                                title = {data.title} 
                                subtitle = {data.subtitle}
                                issueDate = {data.issueDate}
                                returnDate = {data.returnDate}/>
                        )
                        })
                    }
                </ScrollView>
                
                {/* <LibraryCard />
                <LibraryCard /> */}
            </View>
        )
    }
}




export default LibraryScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})