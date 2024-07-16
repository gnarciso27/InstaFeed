import React from "react";
import { SafeAreaView } from "react-native";
import ListaVertical from './ListaVertical';

import image1 from '../assets/ABC3.png';
import image2 from '../assets/flamengo.png';
import image3 from '../assets/silva.png';

const HomeLV = () => {
  const data = [
    image1,
    image2,
    image3,
    image1, // Repita as imagens para testar a rolagem
    image2,
    image3,
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ListaVertical data={data} />
    </SafeAreaView>
  );
};

export default HomeLV;
