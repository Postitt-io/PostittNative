import React from 'react';
import { Image, View } from 'react-native';
import { tailwind } from '../lib/tailwind';

export default function Header() {
  return (
    <View style={tailwind('items-center bg-green-200')}>
      <Image
        source={require('../default.png')}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ height: 50, width: 200, resizeMode: 'contain' }}
      />
    </View>
  );
}
