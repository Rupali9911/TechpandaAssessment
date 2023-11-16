import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import images from '../Constants/images';

const arr = [
    {
        color: '#EBCB38',
        name: 'Total Amount'
    },
    {
        color: '#F36F13',
        name: 'Pending Amount'
    },
    {
        color: '#25AED6',
        name: 'Collected Amount'
    }
]

const AnalysisSec = () => {

    return (
        <>
            <Text style={styles.headLine}>January Analysis</Text>

            <View style={styles.container}>
                <Image
                    source={images.Circle}
                    style={styles.circle}
                />
                <View style={styles.textContainer}>
                    {arr.map((val, index) => (
                        <View key={index} style={styles.textRow}>
                            <View style={{ ...styles.dot, backgroundColor: val.color }} />
                            <Text style={{ ...styles.text }}>{val?.name}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F7F8FB',
        padding: 20
    },
    headLine: {
        fontWeight: 700,
        fontSize: 16,
        padding: 10,

    },
    textContainer: {
        // flex: 1,
        justifyContent: 'center',
        paddingLeft: 20
        // alignItems: 'center',
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 5
    },
    text: {
        // fontSize: 20,
        marginRight: 10,
        fontWeight: 600
    },
    dot: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    circle: {
        height: 120,
        width: 120
    }
});

export default AnalysisSec;