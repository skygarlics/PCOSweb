interface ICheckListValue{
    value: string;
    isChecked: boolean;
}

interface ICheckListContext {
    checkList: Array<ICheckListValue>;
    addCheckList: (todo: string) => void;
    removeCheckList: (index: number) => void;
}
