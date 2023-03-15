import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import SplashComponent from '../componets/spalsh/SpashComponent';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.push('LoginScreen');
  },4000);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <SplashComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Splash;
