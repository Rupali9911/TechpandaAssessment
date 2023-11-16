import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import images from '../Constants/images'
import Colors from '../Constants/Colors'

const AppHeader = (props) => {
    return (
        <SafeAreaView style={{
            backgroundColor: Colors.Header
        }}>

            <View
                style={styles.mainCont}
            >
                {
                    props?.isProfile
                        ?
                        <View style={styles.container}>
                            <Image
                                source={images.Profile}
                                style={styles.profileImage}
                            />
                            <View>
                                <Text style={styles.name}>Samar Reddy</Text>
                                <Text style={styles.designation}>+91 1234567890</Text>
                            </View>
                        </View>
                        :
                        <TouchableOpacity
                            // onPress={() => navigation.goBack()}
                            style={{ marginLeft: 10 }}
                        >
                            <Image
                                source={images.BackIcon}
                                style={styles.backIcon}

                            />
                        </TouchableOpacity>
                }
                <Text
                    style={styles.title}
                >
                    {props.title}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                    }}
                    style={{ marginRight: 10 }}
                >
                    <Image
                        source={images.BellIcon}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    mainCont: {
        backgroundColor: Colors.Header,
        flexDirection: 'row',
        height: 73,
        alignItems: 'center'
    },
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        gap: 10
    },
    profileImage: {
        width: 51,
        height: 63,
        // resizeMode: 'center',
        borderRadius: 100,
        // marginBottom: 10,
    },
    name: {
        // fontSize: 24,
        fontWeight: '600',
        // marginBottom: 5,
        color: 'white'
    },
    designation: {
        fontSize: 10,
        color: 'white',
        fontWeight: '400',
    },
    backIcon: {
        height: 35,
        width: 35
    },
    title: {
        flex: 1,
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    }
})