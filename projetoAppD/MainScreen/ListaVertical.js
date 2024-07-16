import React from 'react';
import { FlatList, View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ListaVertical = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => String(index)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            source={item}
            style={styles.itemImage}
            resizeMode="cover"
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    height: width / 2,
    width: '100%',
    marginVertical: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  itemImage: {
    height: '100%',
    width: '100%',
  },
});

export default ListaVertical;
