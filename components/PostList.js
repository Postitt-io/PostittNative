import React from 'react';

import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { tailwind } from '../lib/tailwind';

export default function PostList({ data }) {
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
        data={data}
        keyExtractor={(item) => item.identifier}
        renderItem={({ item }) => (
          <Item title={item.title} body={item.body} subName={item.subName} />
        )}
      />
    </View>
  );
}
