import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Details({ route }) {
  const { product } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: product.imageUrl,
        }}
        style={styles.img}
      />
      <Text style={styles.name}>{product.name}</Text>
      <View style={styles.priceBox}>
          <Text style={[styles.price, styles.originalPrice]}>{product.originalPrice}</Text>
          <Text style={[styles.price, styles.discountPrice]}>{product.discountPrice}</Text>
        </View>
        <Text style={styles.rating} >
          {product.rating}
        </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23211a',
    paddingHorizontal: 11,
    paddingVertical: 15,
  },
  img: {
    height: 250,
    width: '50%',
    objectFit: 'fill',
    alignSelf: 'center'
  },
  name: {
    fontSize: 25,
    fontWeight: '500',
    color: '#f8f6f5',
    flexShrink: 1, 
    marginTop: 11,
  },
  priceBox: {
    flexDirection: 'row',
    gap: 25,
    marginVertical: 2,
  },
  price: {
    fontSize: 19,
    fontWeight: '400',
    color: '#f8f6f5',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
  },
  rating: {
    fontSize: 16,
    fontWeight: '500',
    color: '#f8f6f5'
  }

});
