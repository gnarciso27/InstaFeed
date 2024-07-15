import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Nome a decidir</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop:30,
    marginLeft: 15,
  },
  headerText: {
    color: '#black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Header;
