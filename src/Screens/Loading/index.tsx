import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loading = () => {
    return (
        <View>
            <ActivityIndicator color="#E70915" size="large" />
        </View>
    )
}
const sytles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
