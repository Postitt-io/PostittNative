/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import Axios from 'axios';

import { SafeAreaView, Text, View } from 'react-native';
import { tailwind } from './lib/tailwind';
import Header from './components/Header';
import { Post } from './types';

Axios.defaults.baseURL = 'http://localhost:5000/api';
Axios.defaults.withCredentials = true;

export default function App() {
  const postList = async () => {
    const { data: posts } = await Axios.get('/posts');
    posts?.map((post: Post) => {
      <View key={post.identifier} style={{ margin: 10 }}>
        <Text>{post.title}</Text>
        <Text>{post?.body}</Text>
      </View>;
    });
  };

  return (
    <SafeAreaView style={tailwind('h-full container')}>
      <Header />
      <View style={tailwind('items-center flex')}>{postList()}</View>
    </SafeAreaView>
  );
}
