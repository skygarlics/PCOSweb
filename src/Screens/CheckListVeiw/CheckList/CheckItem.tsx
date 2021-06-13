import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


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
            />
            <Text style={styles.Label}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Label: {
        flex: 1
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
});

export { CheckItem };
