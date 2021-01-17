/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

<<<<<<< HEAD
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
=======
export default function App() {
  return (
    <SafeAreaView
      style={tailwind('flex-1 items-center justify-center')}
    >
      <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
        <Text style={tailwind('text-white font-semibold text-lg')}>
          Hello Tailwind 👋
        </Text>
>>>>>>> parent of e8d3aea... Add header and custom fonts
      </View>
    </SafeAreaView>
  );
}
