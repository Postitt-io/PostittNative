/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import Axios from 'axios';

import { SafeAreaView, Text, View } from 'react-native';
import { tailwind } from './lib/tailwind';
import Header from './components/Header';
import { Post } from './types';

Axios.defaults.baseURL = 'http://localhost:5000/api';
Axios.defaults.withCredentials = true;

export default async function App() {
  const { data: posts } = await Axios.get('/posts');

  return (
    <SafeAreaView style={tailwind('h-full container')}>
      <Header />
      <View style={tailwind('items-center flex')}>
        {posts.map((p: Post) => {
          <View key={p.identifier} style={{ margin: 10 }}>
            <Text>{p.title}</Text>
            <Text>{p?.body}</Text>
          </View>;
        })}
      </View>
    </SafeAreaView>
  );
}
