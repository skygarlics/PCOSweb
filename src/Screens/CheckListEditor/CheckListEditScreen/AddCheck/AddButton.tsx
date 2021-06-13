import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface Props {
    onPress?: () => void;
}

const AddButton = ({ onPress }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Image source={require('~/Assets/Images/add.png')} style={styles.ButtonImage}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  ButtonImage: {
  },
  container: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },
  button: {
  }
});

export { AddButton };
