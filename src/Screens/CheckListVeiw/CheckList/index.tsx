import React, { useContext } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CheckListContext } from '~/Context/CheckListContext';

import { EmptyItem } from './EmptyItem';
import { CheckItem } from './CheckItem';

interface Props {}

const CheckList = ({ }: Props) => {
    const { checkList } = useContext<ICheckListContext>(CheckListContext);
    return (
      <FlatList
        data={checkList}
        keyExtractor={(item, index) => {
            return `check-${index}`;
        }}
        ListEmptyComponent={<EmptyItem/>}
        renderItem={({item, index}) => (
            <CheckItem
                text={item.value as string}
            />
        )}
      />
    );
};

const styles = StyleSheet.create({
  title: {
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
});

export { CheckList };
