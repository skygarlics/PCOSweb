import React, { useContext, useState } from 'react';
import {} from 'react-native';

import { AddButton } from './AddButton';
import { CheckInput } from './CheckInput';

interface Props {}

const AddCheck = ({ }: Props) => {
    const [showInput, setShowInput] = useState<boolean>(false);
    return (
        <>
            {!showInput && <AddButton onPress={() => setShowInput(true)} />}
            {showInput && <CheckInput hideCheckInput={() => setShowInput(false)}/>}
        </>
    )
}

export default AddCheck;
