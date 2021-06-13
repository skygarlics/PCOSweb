import React, {useContext, useLayoutEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import { StyleSheet, View } from 'react-native';
import {    } from 'react-native-gesture-handler';

import CheckListEditScreen from '~/Screens/CheckListEditor/CheckListEditScreen/index'

type NavigationProp = StackNavigationProp<TimerNaviParamList, 'CheckListEditor'>;
interface Props {
    navigation: NavigationProp;
}

const CheckListEditor = ({navigation}: Props) => {

// Logout button
    useLayoutEffect(() => {
        navigation.setOptions({
        });
    }, []);

    return (
        <View style={styles.Container}>
            <CheckListEditScreen title={undefined} style={styles.CheckList}/>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex:1,
    },
    CheckList: {
        flex:1,
        width: '100%',
        height: '50%',
    },
});

export default CheckListEditor;
