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
    marginTop: 50,
    paddingHorizontal: 15,
  },
  headerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HeaderP;
