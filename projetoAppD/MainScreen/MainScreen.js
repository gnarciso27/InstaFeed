import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Header from './headerMain'; // Certifique-se de ajustar o caminho conforme necessário
import Home from './home';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Home/>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 18,
  },
});

export default MainScreen;
