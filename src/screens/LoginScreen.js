import {StyleSheet, View} from 'react-native';
import React, { useState } from 'react';
import Header from '../componets/login/Header';
import Main, {SnackBarComponent} from '../componets/login/Main';

const LoginScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [snackMsg, setSnackMsg] = useState([]);

  const onDismiss = () => setVisible(false);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Main setSnackMsg={setSnackMsg} setVisible={setVisible} />
      <SnackBarComponent
        visible={visible}
        onDismiss={onDismiss}
        snackMsg={snackMsg}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: '#FFF',
  },
});

export default LoginScreen;
