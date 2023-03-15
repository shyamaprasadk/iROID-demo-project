import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const Loader = () => {
  const {height} = Dimensions.get('screen');
  return (
    <View style={[styles.container, {height: height / 2}]}>
      <AnimatedLottieView
        source={require('../../asset/loader.json')}
        style={styles.loader}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  loader: {
    height: '100%',
    width: '100%',
  },
});
