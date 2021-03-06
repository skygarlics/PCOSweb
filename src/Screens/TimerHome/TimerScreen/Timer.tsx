import React, {useEffect, useRef, useState} from 'react';

import {Button, StyleSheet, Text, View, Alert, TextInput, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Background } from '~/Screens/CheckListEditor/CheckListEditScreen/AddCheck/CheckInput/Background';

// import BackgroundTimer from 'react-native-background-timer';


const padNum = (num: number) => {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
};


const minuteFromMili = (milisecond: number) => {
    return Math.floor(milisecond / 60000)
};


const secondFromMili = (milisecond: number) => {
    return Math.floor((milisecond % 60000) / 1000)
};

// interval for vanilla timer
let _interval = 0;

const Timer = () => {


    const [timeLimit, setTimelimit] = useState<number>(5000);
    const [secondText, setSecondText] = useState<string>('00');
    const [minuteText, setMinuteText] = useState<string>('00');
    const [elapsed, setElapsed] = useState<number>(0);
    const [timerOn, setTimerOn] = useState<boolean>(false);
    const [timeEditable, setTimeEditable] = useState<boolean>(true);

    const refs = {
        minuteTextRef: useRef(null),
    };

    var gStartTime: number = 0;
    var gEndTime: number = 0;


    // vanila timer functions.
    // extract later.

    const vStartTimer = (func: Function, interval: number): void => {
        if (_interval != 0) {
            return;
        }

        _interval = setInterval(func, interval);
    }

    const vStopTimer = (): void => {
        clearInterval(_interval);
    }


    // Vars for minimize render
    let gMinute = 0;
    let gSecond = 0;

    // init Data
    const initData = async () => {
        try {
            const limit = await AsyncStorage.getItem('timeLimit');
            if (limit !== null) {
                setTimelimit(parseInt(limit));
            }
        } catch (e) {
            console.log(e);
        }
    };

    const setTimeFromNum = (minute: number, second: number) => {
        setMinuteText( padNum(minute) );
        setSecondText( padNum(second) );
    }

    const setTimeFromMili = (milisecond: number) => {
        let tempSec = secondFromMili(milisecond);
        let tempMin = minuteFromMili(milisecond);
        setTimeFromNum( tempMin, tempSec );
    }

    const setLimit = (minute:number, second: number) => {
        // calc milisecond
        let min = minute * 60000
        let sec = second * 1000
        setTimelimit( min + sec )
    }

    const setLimitFromTime = () => {
        let min = parseInt(minuteText)
        let sec = parseInt(secondText)
        setLimit( min, sec )
    }

    // On THIS component mounts
    useEffect(() => {
        initData();
    }, []);


    // On timerOn changes
    useEffect(() => {
        if (timerOn) {
            startTimer();
        }
        else {
            stopTimer();
        }
    }, [timerOn])

    // On elapsed changes
    useEffect(()=>{
        let remained = timeLimit - elapsed;
        if (remained < 0){
            // On timer finished
            resetTimer();
            Alert.alert(
                "??????",
                "??????",
                [
                    {
                        text: '??????'
                    }
                ],
                {
                    cancelable: true,
                }
            )
        }

        // ??????????????? 1?????? ??????????????? ?????? ???????????? ?????????..?
        // 1000 ????????? ????????? ?????????????????? ?????? 1?????? ???????????????
        remained += 999;

        // Rendering is expensive

        let tempMin = minuteFromMili(remained)
        let tempSec = secondFromMili(remained)
        if ( (gMinute!=tempMin) || (gSecond!=tempSec) ){
            gMinute = tempMin;
            gSecond = tempSec;
            setTimeFromNum(gMinute, gSecond);
        }
    }, [elapsed]);


    const stopTimer = () => {
        if (timerOn) {
            return;
        }
        gEndTime = Date.now();
        // BackgroundTimer.stopBackgroundTimer();
        vStopTimer();
    };


    const resetTimer = () => {
        if (timerOn) {
            setTimerOn(false);
        }
        setTimeFromMili(timeLimit);
        gStartTime = 0;
        gEndTime = 0;
        setTimeEditable(true);
    };

    
    const startTimer = () => {
        if (!timerOn) {
            return;
        }

        if (gStartTime == 0) {
            gStartTime = Date.now()
        } else {
            gStartTime += Date.now() - gEndTime;
        }

        vStartTimer(() => {
            let elapsed = Date.now() - gStartTime;
            setElapsed(elapsed);
        }, 100);

        setTimeEditable(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.countDowncontainer}>
                <TextInput
                    style={styles.countdownNumber}
                    editable={timeEditable}
                    keyboardType={'number-pad'}
                    selectTextOnFocus={true}
                    value={minuteText}
                    returnKeyType={'next'}
                    onChangeText={(text) => {
                        setMinuteText(text);
                        setLimitFromTime();
                    }}
                    onSubmitEditing={() => {
                        refs.minuteTextRef.current.focus();
                    }}
                    blurOnSubmit={false}
                />
                <Text style={styles.countdownText}>:</Text>
                <TextInput
                    style={styles.countdownNumber}
                    editable={timeEditable}
                    keyboardType={'number-pad'}
                    selectTextOnFocus={true}
                    value={secondText}
                    returnKeyType={'done'}
                    onChangeText={(text) => {
                        setSecondText(text);
                        setLimitFromTime();
                    }}
                    ref={refs.minuteTextRef}
                />
            </View>
            <View style={styles.btnContainer}>
                <Button
                    title={timerOn ? "STOP":"START"}
                    onPress={() => {
                        if (timerOn) {
                            setTimerOn(false);
                        }
                        else {
                            setTimerOn(true);
                        }
                    }}
                />
                <Button title="RESET" onPress={resetTimer} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    countDowncontainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    countdownNumber: {
        width: 200,
        color: '#000',
        textAlign: 'center',
        fontSize: 100,
        fontWeight: 'bold',
    },
    countdownText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 100,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
    },
});

export { Timer };
