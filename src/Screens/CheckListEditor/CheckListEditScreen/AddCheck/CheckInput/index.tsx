import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

import { Background } from './Background';
import { InputText } from './InputText';


interface Props {
    hideCheckInput: () => void;
}

const CheckInput = ({ hideCheckInput }: Props) => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Background onPress={hideCheckInput} />
            <InputText hideCheckInput={hideCheckInput} />
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end'
    }
});

export { CheckInput }
