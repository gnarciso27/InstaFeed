import React from "react";
import { SafeAreaView } from "react-native";
import ListaVertical from './ListaVertical';

import image1 from '../assets/danca.png';
import image2 from '../assets/caminhada.png';
import image3 from '../assets/esportes.png';

const HomeLV = () => {
  const data = [
    image1,
    image2,
    image3,
    image1, 
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
