import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import images from '../../Constants/images';
import AppHeader from '../../Components/AppHeader';
import AnalysisSec from '../../Components/AnalysisSec';

const Profile = () => {

    const RenderBox = (props) => {
        return (
            <View style={[styles.box, { backgroundColor: props.color }]}>
                <Image source={images.HomeIcon} style={styles.boxIcon} />
                <Text style={styles.boxName}>{props.title}</Text>
            </View>
        )
    }
    return (
        <>
            <AppHeader title={'Profile'} />
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Image source={images.Profile} style={styles.profileIcon} />
                    <TouchableOpacity style={styles.cameraIconContainer}>
                        <Image source={images.Camera} style={styles.cameraIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.nameNumberContainer}>
                    <Text style={styles.iconName}>Arjun Reddy</Text>
                </View>
                <RenderBox color={'#348EAB'} title={'Propertys - 54'} />
                <View style={styles.boxContainer}>
                    <RenderBox color={'#232D3F'} title={'Members - 25'} />
                    <RenderBox color={'#232D3F'} title={'Customers -49'} />


                </View>
            </View>
            <AnalysisSec />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer: {
        alignItems: 'center',
    },
    profileIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        // marginBottom: 10,
    },
    cameraIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        // left: 0

        // backgroundColor: 'red',
        // borderRadius: 20,
        // padding: 8,
        // height: 25,
        // width: 25
    },
    cameraIcon: {
        // fontSize: 20,
        // color: 'white',
        height: 25,
        width: 25

    },
    nameNumberContainer: {
        alignItems: 'center',
    },
    iconName: {
        fontSize: 20,
        fontWeight: '700'
    },
    number: {
        fontSize: 18,
        backgroundColor: 'red',
        color: 'white',
        padding: 5,
        borderRadius: 10,
    },
    boxContainer: {
        flexDirection: 'row',
    },
    box: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 8
    },
    boxIcon: {
        // fontSize: 24,
        height: 18,
        width: 18,
        tintColor: 'white'
    },
    boxName: {
        marginTop: 5,
        color: 'white'
    },
});

export default Profile;