import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React, {useState} from 'react';

function AlagaFeed({user}) {
  const [liked, setLikeState] = useState(false);
  return (
    <View style={{paddingTop: 50,}}>
      <View style={{ flexDirection : 'row', padding: 15, alignItems: 'center',}}>
        <Image
            style={{
            marginRight: 9,
            width: 40,
            height: 40,
            borderRadius:20,
          }}
          source={{uri: `https://github.com/${user}.png`}}
        />
        <Text>{user}</Text>
        </View>
      <View>
        <Image
          style={{
          width: '100%',
          height: 350,
        }}
        source={{uri:  `https://github.com/${user}.png`}}
        /> 
      </View>
      <View style= {{ flexDirection : 'row', padding: 15, alignItems: 'center',}}>
        <TouchableOpacity onPress={() => setLikeState(!liked)}>
          { liked && <Entypo name="heart" size={24} color="red" />}
          {!liked && <Entypo name="heart-outlined" size={24} color="black" />}
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
        [
          'afonsotrs',
          'gnarciso27'
        ].map((user) => 
          <AlagaFeed key = {user} user ={user}/>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
