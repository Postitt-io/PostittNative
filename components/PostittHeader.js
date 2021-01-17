import React from 'react';
import { Image } from 'react-native';
import { Header } from 'react-native-elements';
import { getColor } from '../lib/tailwind';

export default function PostittHeader() {
  const iconColour = getColor('postitt-gray');
  return (
    <Header
      backgroundColor={getColor('gray-100')}
      leftComponent={{ icon: 'menu', color: iconColour }}
      centerComponent={
        <Image
          source={require('../default.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ height: 30, width: 150, resizeMode: 'contain' }}
        />
      }
      rightComponent={{ icon: 'home', color: iconColour }}
    />
  );
}
