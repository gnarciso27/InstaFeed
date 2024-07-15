import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import HeaderP from './headerP';
import ImagemDePerfil from '../assets/davi.png';
import ImagemDeCapa from '../assets/abc2.png';

const Perfil = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <HeaderP />
        <Image
          source={ImagemDeCapa}
          style={styles.ImagemDeCapa}
        />
        <View style={styles.profileContainer}>
          <Image
            source={ImagemDePerfil}
            style={styles.ImagemDePerfil}
          />
          <TouchableOpacity style={styles.editButton} onPress={() => alert('Editar Perfil')}>
            <Text style={styles.editButtonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>Nome do Usuário</Text>
          <Text style={styles.username}>@nomedeusuario</Text>
          <Text style={styles.bio}>Esta é a bio do usuário. Pode ser uma breve descrição sobre ele.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ImagemDeCapa: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: -50,
    alignItems: 'center',
  },
  ImagemDePerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 17,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  editButtonText: {
    color: 'blue',
    fontSize: 15,
    fontWeight: 'bold',
  },
  userInfo: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: 'gray',
  },
  bio: {
    fontSize: 16,
    marginVertical: 10,
  },
  
});

export default Perfil;
