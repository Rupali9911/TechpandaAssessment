import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Images from '../../Constants/images';
import HomeScreen from '../HomeScreen';
import Colors from '../../Constants/Colors';
import Analysis from '../Analysis';
import Task from '../Task';
import Profile from '../Profile';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='HomeScreen'
            tabBarOptions={{
                activeTintColor: Colors.themeColor,
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color }) => {
                    let iconName;

                    if (route.name === 'HomeScreen') {
                        iconName = focused ? Images.HomeIcon : Images.HomeIcon;
                    } else if (route.name === 'AnalysisScreen') {
                        iconName = focused ? Images.AnalysisIcon : Images.AnalysisIcon;
                    } else if (route.name === 'ProfileScreen') {
                        iconName = focused ? Images.ProfileIcon : Images.ProfileIcon;
                    } else if (route.name === 'TaskScreen') {
                        iconName = focused ? Images.TaskIcon : Images.TaskIcon;
                    }
                    return (
                        <Image
                            source={iconName}
                            resizeMode="contain"
                            style={{ width: 20, height: 20, tintColor: focused ? Colors.themeColor : 'black' }}
                        />
                    );
                }
            })}
        >
            <Tab.Screen name={'HomeScreen'} component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
            <Tab.Screen name={'AnalysisScreen'} component={Analysis} options={{ tabBarLabel: 'Analysis' }} />
            <Tab.Screen name={'ProfileScreen'} component={Profile} options={{ tabBarLabel: 'Profile' }} />
            <Tab.Screen name={'TaskScreen'} component={Task} options={{ tabBarLabel: 'Tasks' }} />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})