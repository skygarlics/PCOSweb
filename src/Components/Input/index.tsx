import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

interface Props {
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: Object;
  clearMode?: boolean;
  onChangeText?: (text: string) => void;
}

const Input = ({placeholder, keyboardType, secureTextEntry, style, clearMode, onChangeText}: Props) => {
    let viewStyle: any = styles.Container;
    if (style) {
        viewStyle = style;
    }

    return(
        <View style={viewStyle}>
        <TextInput
            selectionColor="#FFFFFF"
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType ? keyboardType : 'default'}
            autoCapitalize="none"
            autoCorrect={false}
            allowFontScaling={false}
            placeholderTextColor="#FFFFFF"
            placeholder={placeholder}
            clearButtonMode={clearMode ? 'while-editing' : 'never'}
            onChangeText={onChangeText}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 40,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 4,
        backgroundColor: '#333333',
    },
    InputField: {
        flex: 1,
        color: '#FFFFFF',
    }
})

export default Input;
