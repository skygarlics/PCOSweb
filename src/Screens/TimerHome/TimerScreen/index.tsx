import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import { Timer } from './Timer';

interface Props {
    title?: string,
    style: object
}

const TimerScreen = (props: Props) => {
    return (
        <SafeAreaView style={props.style}>
            {(props.title !== undefined) &&
            <View style={styles.title}>
                <Text style={styles.titleText}>{props.title}</Text>
            </View>}
            <Timer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
});

export default TimerScreen;