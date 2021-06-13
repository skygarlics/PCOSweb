import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import { CheckList } from './CheckList'

interface Props {
    style?: any,
}

const CheckListView = ({ style }: Props) => {
    return (
        <SafeAreaView style={style || styles.container}>
            <CheckList/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'stretch',
    },
});

export default CheckListView;
