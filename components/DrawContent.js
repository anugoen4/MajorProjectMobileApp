import React, {useState, useEffect} from 'react'
import {View, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar,
        Title,
        Caption,
        Paragraph,
        Drawer,
        Text,
        Switch,
        TouchableRipple,
        useTheme
        } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_2 from 'react-native-vector-icons/MaterialIcons';
import { color } from 'react-native-reanimated';
import {AsyncStorage} from 'react-native';


export function DrawerContent(props){
    const [name, setName] = useState('Anurag Goenka')

    return(
        <View style = {{flex : 1}}>
            <DrawerContentScrollView {...props} >
                <View style = {styles.drawerContent}>
                    <View style = {styles.userInfoSection} >
                        <View style = {{flexDirection : 'row', marginTop: 15}}>
                            <Avatar.Image 
                                source = {{
                                    uri : 'https://img.mensxp.com/media/content/2020/May/Sacrifices-Heath-Ledger-Made-To-Become-The-Joker600_5eaff513cf8ce_600x900.jpeg'
                                }}
                                size = {50}
                            />

                            <View style = {{marginLeft: 15, marginTop: -5}}>
                                <Title style = {styles.title}>
                                    {name}
                                </Title>
                                <Caption style = {styles.caption}>
                                    @anuGoen4
                                </Caption>
                            </View>
                        </View>
                        <View style = {styles.row}>
                            <View style = {styles.section}>
                                <Paragraph style = {[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style = {styles.caption}>Following</Caption>
                            </View>
                            <View style = {[styles.section, {marginLeft: 20}]} >
                                <Paragraph style = {[styles.paragraph, styles.caption]}>800</Paragraph>
                                <Caption style = {styles.caption}>Followers</Caption>
                            </View>
                        </View>
                        
                    </View>
                    <Drawer.Section style ={styles.drawerSection}>
                        <DrawerItem
                            icon = {({color,size}) => (
                                <Icon
                                    name = 'home-outline'
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label = 'Home'
                            onPress = {() => {props.navigation.navigate('HomeStackScreen')}}
                        />   

                         <DrawerItem
                            icon = {({color,size}) => (
                                <Icon
                                    name = 'library'
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label = 'Library'
                            onPress = {() => {props.navigation.navigate('LibraryStackScreen')}}
                        />   

                        <DrawerItem
                            icon = {({color,size}) => (
                                <Icon
                                    name = 'numeric'
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label = 'Marks'
                            onPress = {() => {props.navigation.navigate('MarksStackScreen')}}
                        />

                        <DrawerItem
                            icon = {({color,size}) => (
                                <Icon_2
                                    name = 'people-outline'
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label = 'Attendance'
                            onPress = {() => {props.navigation.navigate('AttendanceStackScreen')}}
                        />   

                        <DrawerItem
                            icon = {({color,size}) => (
                                <Icon
                                    name = 'account-check-outline'
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label = 'Profile'
                            onPress = {() => {props.navigation.navigate('ProfileStackScreen')}}
                        />   
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style = {styles.bottomDrawerSection}>
                <DrawerItem
                    icon = {({color,size}) => (
                        <Icon
                            name = 'exit-to-app'
                            color = {color}
                            size = {size}
                        />
                    )}
                    label = 'Sign Out'
                    onPress = {() => alert("Signing Out")}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent:{
        flex: 1
    },
    userInfoSection:{
        paddingLeft: 20
    },
    title : {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    Caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    section : {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph:{
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection : {
        marginTop: 15
    },
    bottomDrawerSection : {
        marginBottom : 15,
        borderTopColor : '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})