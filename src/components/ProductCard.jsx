import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ProductCard({product}) {
  return (
    <View style={styles.productCard}>
      <Image
        source={{
          uri: product.imageUrl,
        }}
        style={styles.productImage}
      />
      <View >
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.cardBody}>
        <View style={styles.priceBox}>
          <Text style={[styles.price, styles.originalPrice]}>{product.originalPrice}</Text>
          <Text style={[styles.price, styles.discountPrice]}>{product.discountPrice}</Text>
        </View>
        <Text style={styles.rating} >
          {product.rating}
        </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'row',
    paddingHorizontal: 7,
    paddingVertical: 5,
    gap: 21,
    marginVertical: 7,
    flex: 1,
    flexShrink: 1,
    width: '70%'
  },
  productImage: {
    height: 170,
    width: 130,
    objectFit: 'fill'
  },
  cardBody: {
    justifyContent: 'center',
    flex: 1,
    flexWrap: 'wrap'
  },
  name: {
    fontSize: 25,
    fontWeight: '500',
    color: '#f8f6f5',
    flexShrink: 1, 
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
