import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const EmptyItem = ({ }: Props) => {
  return (
      <View>
        <Text style={styles.text}>+를 눌러 체크리스트 등록</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
});

export { EmptyItem };
