import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Separator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        color: 'white'
    }
});
