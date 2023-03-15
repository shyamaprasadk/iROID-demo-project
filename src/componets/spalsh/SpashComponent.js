import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
import React from 'react';

const SplashComponent = () => {
  const {width} = Dimensions.get('screen');
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../asset/Background.jpg')}
        style={styles.image}
      />
      <Text style={[styles.text, {fontSize: width / 6}]}>IROID</Text>
    </View>
  );
};

export default SplashComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  text: {
    color: '#000',
    position: 'absolute',
    fontFamily: 'ShurikenStd-Boy',
  },
});
