import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Header from './headerMain';
import HomeLH from './homeLH';
import HomeLV from './homeLV';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <HomeLH />
        <HomeLV />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default MainScreen;
