import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import ProductCard from '../components/ProductCard';
import {productsList} from '../data/constants';
import Separator from '../components/Separator';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productsList}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item, index}) => (
          <Pressable key={index} onPress={() => navigation.navigate('Details', {
            product: item
          })}>
            <ProductCard product={item} />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23211a',
    paddingHorizontal: 11,
    paddingVertical: 5,
  },
  heading: {
    color: 'white',
  },
});
