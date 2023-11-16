

import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import images from '../Constants/images';

const data = [
    { id: 1, image: images.Phone, companyName: 'Test Company', isAdmin: false },
    { id: 2, image: images.Phone, companyName: 'My Admins', isAdmin: true },
    { id: 3, image: images.Phone, companyName: 'Test Company', isAdmin: false },
    { id: 4, image: images.Phone, companyName: 'My Admins', isAdmin: true },
    { id: 4, image: images.Phone, companyName: 'My Admins', isAdmin: true },
];

const HomeCards = () => {
    const renderItem = ({ item }) => {
        return (
            <View
                style={styles.item}
            >
                <Image source={item?.image} style={styles.img} />
                <Text style={styles.text}>{item.companyName}</Text>
                <Text style={[styles.text, { fontSize: 10 }]}>{item.companyName}</Text>
            </View>
        );
    };

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            numColumns={2}
            contentContainerStyle={styles.flatlistContainer}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    flatlistContainer: {
        // flexGrow: 1,
        paddingVertical: 30,
        paddingHorizontal: 15,
        alignItems: 'flex-start',
        // backgroundColor: 'red'
        // justifyContent: 'center'
    },
    item: {
        // flex: 1,
        height: 170,
        width: 160,
        // alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5,
        padding: 20,
        borderRadius: 10,
        gap: 10,
        backgroundColor: '#D1EEFF'
        // flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        // color: 'white',
        marginLeft: 5,
        fontWeight: 600
    },
    img: {
        height: 23,
        width: 23
    }
});

export default HomeCards;