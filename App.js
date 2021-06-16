/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Button,
} from 'react-native';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [successText, setSuccessText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === 'admin@123') {
      setIsLogin(false);
      setSuccessText('Login Successfully');
    } else {
      setSuccessText('Your email or password is incorrect');
    }
  };
  return (
    <>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text>Login Form</Text>

          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width: 200, height: 200}}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 15,
              width: 200,
            }}
            // allowFontScaling={false}
            // autoCapitalize="words"
            // textContentType="emailAddress"
            // multiline
            // blurOnSubmit
            // contextMenuHidden
            // disableFullscreenUI
            // editable={false}
            onSubmitEditing={() => setSuccessText('hello')}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter Email"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 15,
              width: 200,
            }}
            textContentType="password"
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Enter Password"
          />
          <Button
            title="Login"
            disabled={!isLogin}
            onPress={() => handleLogin()}
          />
          <Text>{successText}</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
