import React, {useContext, useEffect} from 'react';
import {Linking, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';

import Input from '~/Components/Input';
import Button from '~/Components/Button';

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
}

const Login = ({navigation}: Props) => {
  const {login} = useContext<IUserContext>(UserContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.FormContainer}>
        <Input style={{marginBottom: 16}} placeholder="이메일" />
        <Input
          style={{marginBottom: 16}}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
        <Button
          style={{marginBottom: 24}}
          label="로그인"
          onPress={() => {
            login('bar.gmail.com', 'password');
          }}
        />
        <Text style={styles.PasswordReset}
          onPress={() => {
            Linking.openURL('https://google.com/');
          }}>
          비밀번호 재설정
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    FormContainer: {
        width: '100%',
        padding: '40px',
    },
    PasswordReset: {
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: 'center',
    }
});

export default Login;
