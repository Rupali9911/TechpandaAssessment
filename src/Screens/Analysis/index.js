import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../Components/AppHeader'
import AnalysisSec from '../../Components/AnalysisSec'
import ServiceMember from '../../Components/Service&Member'

const Analysis = () => {
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <AppHeader title={'Analysis'} />
            <AnalysisSec />
            <ServiceMember />
        </ScrollView>
    )
}

export default Analysis

const styles = StyleSheet.create({})