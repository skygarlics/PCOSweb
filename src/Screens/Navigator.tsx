import React, { useContext } from 'react';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Use when login is Obligation
// import Loading from '~/Screens/Loading';
// import {UserContext} from '~/Context/User';

import Login from '~/Screens/Login';
import TimerHome from '~/Screens/TimerHome';
import CaseScreen from '~/Screens/CaseScreen';
import CheckListEditor from '~/Screens/CheckListEditor';
import CustomDrawer from '~/Screens/Drawer';

import linking from '~/Screens/Linking';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


// Use when Login is Obligation
/* const LoginNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'TIMER',
                    headerTransparent: true,
                    headerTintColor: '#E70915',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
};
 */


const LoginNavigator = () => {
    <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{
                title: 'TIMER',
                headerTransparent: true,
                headerTintColor: '#E70915',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        />
    </Stack.Navigator>
}


const TimerNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TimerHome"
                component={TimerHome}
                options={{
                    title: 'TIMER',
                    headerTintColor: '#E70915',
                    headerStyle: {
                        backgroundColor: '#141414',
                        // borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen
                name="CheckListEditor"
                component={CheckListEditor}
                options={{
                    title: 'CHECKLISTS',
                    headerTintColor: '#E70915',
                    headerStyle: {
                        backgroundColor: '#141414',
                        // borderBottomwidth: 0,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name="CaseScreen"
                component={CaseScreen}
                options={{
                    title: 'CaseScreen',
                    headerTintColor: '#E70915',
                    headerStyle: {
                        backgroundColor: '#141414',
                        // borderBottomwidth: 0,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}

const MainNavigator = () => {
    return (
        <Drawer.Navigator
            drawerPosition='right'
            drawerType='front'
            drawerContent={(props) => <CustomDrawer props={props} />}
        >
            <Drawer.Screen name="Main" component={TimerNavigator} />
        </Drawer.Navigator>
    )
};

export default () => {
    // use when login is obligation
    // const {isLoading, userInfo} = useContext<IUserContext>(UserContext);
    /*
    console.log(isLoading);
    console.log(userInfo);
    if (isLoading === false) {
        return <Loading />;
    }
    */
   
    return (
        <NavigationContainer
            linking={linking}
        >
            {/* Use when login is obligation */}
            {/* {userInfo ? <TimerNavigator/> : <LoginNavigator/> } */}
            {/* <TimerNavigator/> */}
            <MainNavigator />
        </NavigationContainer>
    )
}
