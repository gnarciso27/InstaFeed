import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderP = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Perfil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingLeft: 15,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HeaderP;
