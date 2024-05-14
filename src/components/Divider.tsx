import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider as RNPDivider } from 'react-native-paper';

const Divider = () => {
  return (
    <View style={[styles.container]}>
      <RNPDivider bold={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});

export default Divider;
