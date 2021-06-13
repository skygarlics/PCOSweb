import React, {useContext} from 'react';

import {
    DrawerContentScrollView,
    DrawerContentComponentProps,
    DrawerContentOptions,
  } from '@react-navigation/drawer';

import { UserContext } from '~/Context/User';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface Props {
    props: DrawerContentComponentProps<DrawerContentOptions>;
}

const CustomDrawer = ({props}: Props) => {
    const {logout} = useContext<IUserContext>(UserContext);
  
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.Conatiner}>
            <View style={styles.Header}>
                <Text style={styles.Title}>제목</Text>
            </View>

            <View style={styles.Body}>
                <TouchableOpacity style={styles.Button}>
                    <View style={styles.ButtonContainer}>
                        <Text style={styles.Label}>버튼</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={styles.Footer}> 
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {
                    logout();
                    }}>
                    <View style={styles.ButtonContainer}>
                    <Text style={styles.Title}>로그아웃</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
  };

const styles = StyleSheet.create ({
    Conatiner: {
        flex: 1,
    },
    Header: {
        // View
        borderBottomWidth: 1,
        borderColor: '#D3D3D3',
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    Title: {
        // Text
    },
    Button: {
        // TouchableOpacity
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    ButtonContainer: {
        // View
        flexDirection: 'row',
        alignItems: 'center',
    },
    Icon: {
        // Image
        marginRight: 8,
    },
    Label: {
        // Text
        fontSize: 16,
    },
    Body: {
        // View
    },
    Footer: {
        // View
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#D3D3D3'
    }
});

export default CustomDrawer