/* eslint-disable react-hooks/exhaustive-deps */
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {endpoint} from '../../config';
import qs from 'qs';
import Loader from '../../global/Loader';

const Paginator = ({data, scrollX}) => {
  const {height, width} = Dimensions.get('window');
  return (
    <View style={[styles.paginatorContainer, {marginTop: height / 4.4}]}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const Main = () => {
  const [datas, setDatas] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const {height, width} = Dimensions.get('window');
  const scrollX = useRef(new Animated.Value(0)).current;
  const SlidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const Slides = [
    {
      id: 1,
      image: require('../../../asset/banner1.png'),
    },
    {
      id: 2,
      image: require('../../../asset/banner2.png'),
    },
    {
      id: 3,
      image: require('../../../asset/banner3.png'),
    },
  ];

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let data = {
        lang_id: 'en',
        user_id: 358,
      };

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      let response = await axios.post(
        `${endpoint}/get-mealcategories`,
        qs.stringify(data),
        config,
      );
      console.log(response.data.data.banners);
      setDatas(response.data.data.meal_categories);
      console.log('data : ', datas);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={{height: height / 4, width: width}}>
        <Image
          source={item.image}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{resizeMode: 'contain', height: height / 4, width: width}}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {datas.length > 0 ? (
        <>
          <FlatList
            data={Slides}
            ref={SlidesRef}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
          />
          <Paginator data={Slides} scrollX={scrollX} />
          {datas.map((item, index) => (
            <View key={index} style={[styles.cards, {height: height / 5.3}]}>
              <Image source={{uri: item.image}} style={styles.img} />
              <View style={[styles.captionContainer, {height: height / 35}]}>
                <Text style={styles.captionText}>
                  {item.name.slice(0, item.name.indexOf('('))}
                </Text>
              </View>
            </View>
          ))}
        </>
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cards: {
    backgroundColor: 'gray',
    marginTop: 25,
    borderRadius: 15,
    width: '100%',
    elevation: 10,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  captionContainer: {
    backgroundColor: '#929292',
    opacity: 0.8,
    width: '100%',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    position: 'absolute',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  captionText: {
    color: '#FFF',
    fontFamily: 'Segoe UI Bold',
    fontSize: 16,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5DA7A3',
    marginHorizontal: 8,
  },
  paginatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
  },
});
