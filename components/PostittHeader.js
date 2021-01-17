import React from 'react';
import { Image } from 'react-native';
import { Header } from 'react-native-elements';

export default function PostittHeader() {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={
        <Image
          source={require('../default.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ height: 30, width: 150, resizeMode: 'contain' }}
        />
      }
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
}
