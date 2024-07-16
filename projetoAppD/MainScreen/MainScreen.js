import React from 'react';
import { SafeAreaView, FlatList, View, StyleSheet } from 'react-native';
import Header from './headerMain';
import HomeLH from './homeLH';
import HomeLV from './homeLV';

const MainScreen = () => {
  const data = [
    { key: 'HEADER', renderItem: () => <Header /> },
    { key: 'HOMELH', renderItem: () => <HomeLH /> },
    { key: 'HOMELV', renderItem: () => <HomeLV /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => item.renderItem()}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 10,
  },
});

export default MainScreen;
