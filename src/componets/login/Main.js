/* eslint-disable react/no-unstable-nested-components */
import axios from 'axios';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';
import {endpoint} from '../../config';

const Main = ({setSnackMsg, setVisible}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);
    formData.append('lang_id', 'en');
    formData.append('device_token', 'sss');

    try {
      setLoading(true);
      let response = await axios.post(`${endpoint}/login`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('res', response.data);
      setSnackMsg(response.data.message);
      setVisible(true);
      setLoading(false);
    } catch (error) {
      let e = error.response.data.errors;
      console.log(e);
      setSnackMsg(e.email ? e.email : e.password ? e.password : e);
      setVisible(true);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subTitle}>Enter Your Details</Text>
      <TextInput
        style={styles.textField}
        onChangeText={text => setEmail(text)}
        placeholder="User Name"
        keyboardType="email-address"
        placeholderTextColor="#B6B7B7"
      />
      <TextInput
        style={styles.textField}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#B6B7B7"
      />
      <Button
        style={styles.button}
        textColor="#FFF"
        loading={loading}
        onPress={handleLogin}>
        Sign In
      </Button>
      <Text style={styles.forgotPwdText}>Forgot your password?</Text>
      <View style={styles.signupContainer}>
        <Text style={styles.text}>Don't have an Account?</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={[styles.text, styles.signupText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const SnackBarComponent = ({visible, onDismiss, snackMsg}) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={4000}
      action={{
        label: 'close',
        onPress: () => onDismiss(),
      }}
      style={styles.snackBar}>
      <Text style={styles.snackMsg}>{snackMsg}</Text>
    </Snackbar>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontFamily: 'Segoe UI Bold',
  },
  subTitle: {
    color: '#7C7D7E',
    fontFamily: 'Segoe UI',
    fontSize: 18,
    marginTop: 15,
  },
  textField: {
    width: '100%',
    backgroundColor: '#F2F2F2',
    marginTop: 20,
    borderRadius: 50,
    padding: 10,
    color: '#000',
  },
  forgotPwdText: {
    color: '#444444',
    fontFamily: 'Segoe UI Bold',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3BB0EC',
    width: '100%',
    padding: 10,
    borderRadius: 50,
    marginTop: 20,
  },
  text: {
    color: '#7C7D7E',
    fontFamily: 'Segoe UI',
    marginTop: 20,
    marginRight: 5,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    fontFamily: 'Segoe UI Bold',
    color: '#5DA7A3',
  },
  snackBar: {
    borderRadius: 50,
  },
  snackMsg: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Segoe UI',
  },
});


// test commit