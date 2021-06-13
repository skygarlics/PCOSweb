import React, {useContext, useLayoutEffect, useEffect} from 'react';

import {UserContext} from '~/Context/User';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import TimerScreen from '~/Screens/TimerHome/TimerScreen';
import CheckListView from '~/Screens/CheckListVeiw';


const TimerHome = () => {
    return (
        <View style={styles.Container}>
            <TimerScreen style={styles.Timer}/>
            <CheckListView style={styles.CheckList}/>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    Timer: {
        position: 'absolute',
        top:0,
        width: '100%',
        height: '50%',
    },
    CheckList: {
        position: 'absolute',
        width: '100%',
        height: '50%',
    }
});

export default TimerHome;
