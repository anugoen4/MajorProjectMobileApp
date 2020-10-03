import React from 'react'
import {View, Text, Button, StyleSheet,ImageBackground} from 'react-native';
import {Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Switch,
    TouchableRipple,
    useTheme,
    Card, 
    } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';


const DetailsCard = () => (
    <Card style={{  margin: 10 }}>
        <Card.Title title="Anurag Goenka" />
        <Card.Content>
        {/* <Title>Card title</Title> */}
        <Paragraph>D</Paragraph>
        <Paragraph>D</Paragraph>
        <Paragraph>D</Paragraph>
        </Card.Content>
    </Card>
);

const AchievementsCard = () => (
    <Card style={{  margin: 10 }}>
        <Card.Title title="Anurag Goenka" />
        <Card.Content>
        {/* <Title>Card title</Title> */}
        <Paragraph>A</Paragraph>
        <Paragraph>A</Paragraph>
        <Paragraph>A</Paragraph>
        </Card.Content>
    </Card>
);

const SubjectsCard = () => (
    <Card style={{  margin: 10 }}>
        <Card.Title title="Anurag Goenka" />
        <Card.Content>
        {/* <Title>Card title</Title> */}
        <Paragraph>S</Paragraph>
        <Paragraph>S</Paragraph>
        <Paragraph>S</Paragraph>
        </Card.Content>
    </Card>
);

const HobbiesCard = () => (
    <Card style={{  margin: 10 }}>
        <Card.Title title="Anurag Goenka" />
        <Card.Content>
        {/* <Title>Card title</Title> */}
        <Paragraph>H</Paragraph>
        <Paragraph>H</Paragraph>
        <Paragraph>H</Paragraph>
        </Card.Content>
    </Card>
);

const ProfileScreen = () => {
    return (
        <ScrollView>
        <View style = {{backgroundColor : 'smokewhite'}}>
            <View style = {styles.avatar_container}
            >
                <Avatar.Image 

                    source = {{
                        uri : 'https://img.mensxp.com/media/content/2020/May/Sacrifices-Heath-Ledger-Made-To-Become-The-Joker600_5eaff513cf8ce_600x900.jpeg'
                    }}
                    size = {100}
                />
            </View>
            
            <View style = {styles.container_name}>
                <Title style = {styles.title}>
                    Anurag Goenka
                </Title>
                <Caption style = {styles.caption}
                >
                    @anuGoen4
                </Caption>
            </View>    

            
            <View style = {styles.container_details}>
                <Title style = {styles.title_detail}>
                    Punjab Engineering College | CSE 2021
                </Title>
            </View>
            
                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color="#777777" size={20}/>
                        <Text style={{color:"#777777", marginLeft: 16}}>Amritsar, India</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20}/>
                        <Text style={{color:"#777777", marginLeft: 15}}>+91-900000009</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20}/>
                        <Text style={{color:"#777777", marginLeft: 15}}>abc@email.com</Text>
                    </View>
                </View>   

                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1
                    }]}>
                        <Title>SomeDetail</Title>
                        <Caption>Some  Value</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title>Some Detail</Title>
                        <Caption>Some Value</Caption>
                    </View>
                </View>


                
                <DetailsCard/>
                <AchievementsCard/>
                <SubjectsCard/>
                <HobbiesCard/>  
                <DetailsCard/>
                <AchievementsCard/>
                <SubjectsCard/>
                <HobbiesCard/>   
                <HobbiesCard/>  
                <HobbiesCard/>  
                  
                 
        </View>
        </ScrollView> 
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    avatar_container:{
        height: 100,
        padding: 20,
        paddingBottom: 0,
        backgroundColor: "blue",
    },
    container_name:{
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 20
    },
    container_details:{
        marginTop: 0,
        marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
    title : {
        fontSize: 16,
        fontWeight: 'bold',
    },
    title_detail : {
        fontSize: 16,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        marginLeft: 50,
        marginTop: 10
    },
    row: {
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },

    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
    }
})