import React from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';


interface Props {
    text: string;
    onDelete: () => void;
}

const CheckItem = ({ text, onDelete }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.Label}>{text}</Text>
            <TouchableOpacity style={styles.DeleteButton} onPress={onDelete}>
                <Image source={require('~/Assets/Images/remove.png')} style={styles.Icon}/>
            </TouchableOpacity>
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
    DeleteButton: {

    },
    Icon: {
        width: 24,
        height: 24
    }
});

export { CheckItem };
