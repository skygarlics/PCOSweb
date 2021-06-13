import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';


interface Props {
    onPress: () => void;
}

const Background = ({ onPress }: Props) => {
    return (
        <TouchableWithoutFeedback style={styles.Container} onPress={onPress}>
            <View style={styles.BlackBackground} />
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    Container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    
    BlackBackground: {
        backgroundColor: '#000',
        opacity: 0.3,
        width: '100%',
        height: '100%'
    }
});

export { Background }
