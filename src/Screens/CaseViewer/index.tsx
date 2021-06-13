import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

interface Props {
    title?: string;
    caseText?: string;
    style?: object;
}

const CaseViewer = (props: Props) => {
  return (
    <SafeAreaView style={props.style}>
        {(props.title !== undefined) &&
        <View style={styles.TitleContainer}>
            <Text style={styles.Title}>{props.title}</Text>
        </View>
        }
        <View style={styles.CaseContainer}>
            <Text>{props.caseText}</Text>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    TitleContainer: {
        borderBottomWidth: 1,
        borderColor: '#D3D3D3',
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    Title: {
        fontSize: 20,
    },
    CaseContainer: {
        paddingHorizontal: 8
    },
    CaseText: {
      fontSize: 10,
    }
});

export default CaseViewer;
