import React, { useEffect, useState } from 'react';

import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { tailwind } from '../lib/tailwind';
import axios from 'axios';

axios.defaults.baseURL = 'http://10.0.1.5:5000/api';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      axios
        .get('/posts')
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getPosts();
  }, []);

  function Item({ title, body, subName }) {
    return (
      <TouchableOpacity style={tailwind('bg-blue-400 p-3 rounded-lg items-center m-1')}>
        <Text style={tailwind('text-red-900 font-semibold text-base text-center')}>
          p/{subName}
        </Text>
        <Text style={tailwind('text-white font-semibold text-base text-center')}>{title}</Text>
        <Text style={tailwind('text-gray-900 font-semibold text-sm text-left')}>{body}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={tailwind('items-center')}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.identifier}
        renderItem={({ item }) => (
          <Item title={item.title} body={item.body} subName={item.subName} />
        )}
      />
    </View>
  );
}
