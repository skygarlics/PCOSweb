import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'expo-checkbox'

interface Props {
    text: string;
}

const CheckItem = ({ text }: Props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
        <View style={styles.container}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                style={styles.Checkbox}
            />
            <Text style={styles.Label}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Label: {
        flex: 1,
        fontSize: 20,
        paddingHorizontal: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        padding: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        elevation: 3,
    },
    Checkbox: {
        width: 20,
        height: 20,
    }
});

export { CheckItem };
