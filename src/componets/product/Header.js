import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';

const Header = () => {
  const {width} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <View style={{width: '65%', alignItems: 'flex-end'}}>
        <Text style={[styles.text, {fontSize: width / 10}]}>IROID</Text>
      </View>
      <View style={{width: '35%', alignItems: 'flex-end'}}>
        <Image
          source={require('../../../asset/notification.png')}
          style={styles.notificationIcon}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3BB0EC',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  text: {
    color: '#FFF',
    fontFamily: 'ShurikenStd-Boy',
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
});
