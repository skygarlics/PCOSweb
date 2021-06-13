import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


interface Props {
    label: string;
    style?: Object;
    onPress?: () => void;
}

const Button = ({label, style, onPress}: Props) => {
    let buttonStyle: any = styles.Button
    if (style) {
        buttonStyle = style
    }
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Button: {
        width: '100%',
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#333333',
    },
    Label: {
        color: '#FFFFFF'
    }
});

export default Button;
