import React, {useContext, useLayoutEffect, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CaseViwer from '~/Screens/CaseViewer';
import CheckListView from '~/Screens/CheckListVeiw';
import CaseViewer from '~/Screens/CaseViewer';

type NavigationProp = StackNavigationProp<TimerNaviParamList, 'TimerHome'>;
interface Props {
    navigation: NavigationProp;
}

const CaseScreen = ({navigation}: Props) => {
    return (
        <View style={styles.Container}>

            <CaseViewer
                style={styles.CaseViewer}
                title={"Test case"}
                caseText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
            <CheckListView style={styles.CheckList}/>
            <TouchableOpacity
                style={styles.Button}
                onPress={() => {
                        navigation.navigate('CheckListEditor')
                }} 
            >
                <Text style={styles.ButtonText}>Edit Checklist</Text>
                {/* <Image source={require('~/Assets/Images/add.png')} style={styles.ButtonImage}/> */}
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    CaseViewer: {
        flex: 1,
    },
    CheckList: {
        width: '100%',
        flex: 1,
    },
    Button: {
        margin: 15,
    },
    ButtonImage: {
    },
    ButtonText: {
        fontSize: 15,
    },
});

export default CaseScreen;
