import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import Axios from 'axios';

// import { Post } from './types';

Axios.defaults.baseURL = 'http://localhost:5000/api';
Axios.defaults.withCredentials = true;

export default async function App() {
  // const { data: posts } = await Axios.get('/posts');

  return (
    <SafeAreaView
      style={tailwind('flex-1 items-center justify-center')}
    >
      <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
        <Text style={tailwind('text-white font-semibold text-lg')}>
          Hello Tailwind 👋
        </Text>
      </View>
    </SafeAreaView>
  );
}
