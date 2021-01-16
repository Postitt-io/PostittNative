/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image } from 'react-native';
import { tailwind } from '../lib/tailwind';

export default function Header() {
  return (
    <View style={tailwind('items-center flex')}>
      <Image
        source={require('../default.png')}
        style={{ height: 600, width: 200, resizeMode: 'contain' }}
      />
      <View style={tailwind('bg-blue-800 px-2 py-2 rounded-full')}>
        <Text style={tailwind('text-blue-100 container')}>
          Hello Tailwind 👋, what's going on?
        </Text>
      </View>
    </View>
  );
}
