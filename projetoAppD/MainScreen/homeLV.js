import React from 'react';
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
    <ListaVertical data={data} />
  );
};

export default HomeLV;
