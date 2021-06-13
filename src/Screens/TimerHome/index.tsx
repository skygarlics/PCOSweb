import React, {useContext, useLayoutEffect, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import TimerScreen from '~/Screens/TimerHome/TimerScreen';
import CheckListView from '~/Screens/CheckListVeiw';

type NavigationProp = StackNavigationProp<TimerNaviParamList, 'TimerHome'>;
interface Props {
    navigation: NavigationProp;
}

const TimerHome = ({navigation}: Props) => {
const {logout} = useContext<IUserContext>(UserContext);

// Logout button
/*     useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={styles.LogoutButton}
                    onPress={() => {
                        logout();
                }}>
                    <Image source={require('~/Assets/Images/ic_logout.png')} />
                </TouchableOpacity>
            ),
        });
    }, []); */

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <View style={styles.Container}>
            <TimerScreen style={styles.Timer}/>

            <CheckListView style={styles.CheckList}/>

            <TouchableOpacity
                style={styles.Button}
                onPress={() => {
                        navigation.navigate('CaseScreen')
                }} 
            >
                <Text style={styles.ButtonText}>View Case</Text>
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

export default TimerHome;
