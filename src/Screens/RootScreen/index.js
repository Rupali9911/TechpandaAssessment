import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={BottomTab} />
        </Stack.Navigator>
    )
}

export default RootStack

const styles = StyleSheet.create({})