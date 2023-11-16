import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native';
import images from '../Constants/images';

const data = [
    { id: 1, image: images.Phone, name: 'Admin', number: '1345', bgColor: 'red' },
    { id: 2, image: images.Phone, name: 'User', number: '245', bgColor: 'blue' },
    { id: 3, image: images.Phone, name: 'Operator', number: '345', bgColor: 'green' },
    { id: 4, image: images.Phone, name: 'Admin', number: '145', bgColor: 'red' },
    { id: 5, image: images.Phone, name: 'User', number: '245', bgColor: 'blue' },
    { id: 6, image: images.Phone, name: 'Operator', number: '345', bgColor: 'green' },
    { id: 7, image: images.Phone, name: 'Admin', number: '145', bgColor: 'red' },
    { id: 8, image: images.Phone, name: 'User', number: '245', bgColor: 'blue' },
];

const renderItem = ({ item }) => {
    return (
        <View style={{ ...styles.item, backgroundColor: '#F7F8FB' }}>
            <Image source={item?.image} style={styles.itemImg} />
            <View>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.number}>{item.number}</Text>
            </View>
        </View>
    );
};

const ServiceMember = () => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.headLine}
            >Services and Members</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                scrollEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    headLine: {
        fontWeight: 700,
        fontSize: 16,
        padding: 10
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent: 'center',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    text: {
        fontSize: 10,
        // color: 'white',
        marginLeft: 5,
        fontWeight: 500,
        color: '#747B84'
    },
    number: {
        fontSize: 14,
        // color: 'white',
        fontWeight: '700',
        marginLeft: 5,
    },
    itemImg: {
        height: 44,
        width: 44,
        resizeMode: 'contain'
    }
});

export default ServiceMember;