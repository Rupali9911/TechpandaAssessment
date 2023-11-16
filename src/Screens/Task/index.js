import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView } from 'react-native';
import images from '../../Constants/images';
import AppHeader from '../../Components/AppHeader';
import Colors from '../../Constants/Colors';
// import Icon from 'react-native-vector-icons/Ionicons'; // You may need to install this package

const Task = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8]


    const renderItem = () => {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.nameText}>Ac Repair</Text>
                    <Image source={images.Delete} style={styles.deleteIcon} />

                </View>
                <View style={[styles.row, { justifyContent: 'flex-start', gap: 10 }]}>
                    <Text style={styles.dateText}>5 Sep 2022</Text>
                    <Text style={styles.dateText}>5 Sep 2022</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.profileContainer}>
                        <Image source={images.Profile} style={styles.profileIcon} />
                        <Text style={styles.nameText}>Ramesh</Text>

                    </View>
                    <View style={styles.profileContainer}>
                        <Image source={images.Profile} style={styles.profileIcon} />
                        <Text style={styles.nameText}>Lavnya</Text>

                    </View>
                    <View style={styles.rightIconContainer}>
                        <Image source={images.Right} style={styles.rightIcon} />
                        <Text style={styles.completedText}>Completed</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{
            backgroundColor: '#FFFFFF'
        }}>
            <AppHeader title={'Task'} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                contentContainerStyle={{ paddingHorizontal: 10 }}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#F6F6F6',
        marginTop: 15,
        borderRadius: 10,
        borderLeftWidth: 7,
        borderLeftColor: Colors.themeColor,
        // justifyContent: 'space-evenly'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 12,
    },
    nameText: {
        // fontSize: 18,
        fontWeight: '700'
    },
    dateText: {
        fontSize: 10,
        fontWeight: 500,
        color: '#757575'
    },
    icon: {
        fontSize: 24,
        color: 'red', // Change the color as needed
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileIcon: {
        width: 21,
        height: 21,
        borderRadius: 21 / 2,
        marginRight: 10,
    },
    deleteIcon: {
        width: 18,
        height: 18,
        marginRight: 16
    },
    rightIconContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
    },
    rightIcon: {
        width: 28,
        height: 28,
        // marginRight: 10,
    },
    completedText: {
        fontSize: 10,
        // color: 'green', // Change the color as needed
        fontWeight: '600'
    },
});

export default Task;