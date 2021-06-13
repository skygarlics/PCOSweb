import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import CheckListView from './CheckListVeiw';
import AddCheck from './AddCheck';

interface Props {
  title: String | undefined,
  style: object;
}

const CheckListEditScreen = (props: Props) => {
  return (
    <SafeAreaView style={props.style}>
      {(props.title !== undefined) && <Text style={styles.Title}>{props.title}</Text>}
      <CheckListView />
      <AddCheck />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Title: {
    textAlign: 'center'
  }
});

export default CheckListEditScreen;
