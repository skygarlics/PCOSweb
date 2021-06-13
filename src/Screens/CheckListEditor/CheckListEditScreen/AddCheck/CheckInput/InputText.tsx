import React, { useContext } from 'react';
import {StyleSheet, TextInput} from 'react-native';

import { CheckListContext } from '~/Context/CheckListContext';

interface Props {
    hideCheckInput: () => void;
}

const InputText = ({ hideCheckInput }: Props) => {
    const { addCheckList } = useContext<ICheckListContext>(CheckListContext);
    return (
        <TextInput
            autoFocus={true}
            autoCapitalize={"none"}
            autoCorrect={false}
            placeholder="체크리스트 입력"
            returnKeyType="done"
            onSubmitEditing={({ nativeEvent }) => {
                addCheckList(nativeEvent.text);
                hideCheckInput();
            }}
        />
    );
};

const styles = StyleSheet.create({
    Input: {
        width: '100%',
        height: '40px',
        backgroundColor: '#FFF',
        padding: '0px 8px'
    }
});

export { InputText }
