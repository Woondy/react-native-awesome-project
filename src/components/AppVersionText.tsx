import React from 'react';
import packageJson from '../../package.json';
import { Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const AppVersionText = () => {
  const version = packageJson.version;

  return (
    <View style={styles.container}>
      <Text variant="labelLarge">Vesion {version}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 8,
  },
});

export default AppVersionText;
