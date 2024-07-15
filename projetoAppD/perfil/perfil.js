import React from 'react';
import { View, Text, StyleSheet, Image, Button, SafeAreaView } from 'react-native';
import HeaderP from './headerP';
import ImagemDePerfil from '../assets/davi.png';

const Perfil = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderP />
      <View style={styles.container}>
        <Image
          source={ImagemDePerfil}
          style={styles.ImagemDePerfil}
        />
        <Text style={styles.name}>Nome do Usuário</Text>
        <Button
          title="Editar Perfil"
          onPress={() => alert('Editar Perfil')}
          color="#841584"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  ImagemDePerfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Perfil;
