import React from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import tailwind from 'tailwind-rn';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:5000/api';
Axios.defaults.withCredentials = true;

const PostItem = ({ title }) => (
  <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
    <Text style={tailwind('text-white font-semibold text-lg')}>
      {title}
    </Text>
  </View>
);

const { data: DATA } = async () => {
  Axios.get('/posts');
};

export default function App() {
  const renderItem = ({ item }) => <PostItem title={item.title} />;

  return (
    <SafeAreaView
      style={tailwind('flex-1 items-center justify-center')}
    >
      <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
        <Text style={tailwind('text-white font-semibold text-lg')}>
          Hello Tailwind 👋
        </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(post) => post.id}
      />
    </SafeAreaView>
  );
}
