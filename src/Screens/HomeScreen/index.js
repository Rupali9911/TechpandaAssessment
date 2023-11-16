import { ScrollView } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../../Components/AppHeader'
import HomeCards from '../../Components/HomeCards'

const HomeScreen = () => {

    return (
        <ScrollView>
            <AppHeader
                isProfile={true}
            />
            <HomeCards />
        </ScrollView>
    )
}

export default HomeScreen

