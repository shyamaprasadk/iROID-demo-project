import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../componets/product/Header';
import Main from '../componets/product/Main';
import {ScrollView} from 'react-native-gesture-handler';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Main />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // padding:10
  },
});
export default ProductScreen;
