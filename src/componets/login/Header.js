import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

const Header = ({navigation}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.push('BottomNavigation')}
      hitSlop={10}>
      <Text style={styles.text}>Skip</Text>
    </Pressable>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: '#4A4B4D',
    fontSize: 19,
    // fontWeight:'600',
    fontFamily: 'Segoe UI Bold',
  },
});
