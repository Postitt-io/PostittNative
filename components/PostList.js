import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { Icon } from 'react-native-elements';
import { tailwind, getColor } from '../lib/tailwind';
import axios from 'axios';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      axios
        .get('/posts')
        .then((res) => {
          setPosts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getPosts();
  }, []);

  function Item({ title, body, subName, commentCount, voteScore }) {
    return (
      <TouchableOpacity
        style={tailwind('bg-gray-400 p-1 m-1 rounded-lg items-center items-stretch flex')}
      >
        <Text style={tailwind('text-gray-800 px-1 text-xs font-thin text-left bg-white rounded-t')}>
          p/{subName}
        </Text>
        {body ? (
          <Text style={tailwind('px-1 text-gray-800 font-light text-left bg-white')}>{title}</Text>
        ) : (
          <Text
            style={tailwind(
              'px-1 text-gray-800 font-semibold text-left font-light bg-white rounded-b',
            )}
          >
            {title}
          </Text>
        )}

        {body ? (
          <Text
            style={tailwind(
              'px-1 text-gray-900 font-semibold text-sm text-left bg-gray-100 rounded-b',
            )}
          >
            {body}
          </Text>
        ) : null}
        <View style={tailwind('flex-row justify-between')}>
          <View style={tailwind('flex-row items-center bg-white rounded-full my-1 px-1')}>
            <Icon
              raised
              reverse
              name="comment"
              type="font-awesome"
              color={getColor('postitt-gray')}
              size={12}
            />
            <Text style={tailwind('text-xs')}>
              {commentCount} {commentCount === 1 ? 'Comment' : 'Comments'}
            </Text>
          </View>
          <Icon
            raised
            name="share"
            type="font-awesome"
            color={getColor('postitt-gray')}
            size={18}
          />
          <Icon
            raised
            name="bookmark"
            type="font-awesome"
            color={getColor('postitt-gray')}
            size={18}
          />

          <View style={tailwind('flex-row items-center bg-white rounded-full my-1 px-1')}>
            <Icon
              raised
              reverse
              name="plus"
              type="font-awesome"
              color={getColor('postitt-gray')}
              size={12}
            />
            <Text style={tailwind('text-xs')}>{voteScore}</Text>
            <Icon
              raised
              reverse
              name="minus"
              type="font-awesome"
              color={getColor('postitt-gray')}
              size={12}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (loading) {
    return (
      <View style={tailwind('items-center')}>
        <Text>Loading... </Text>
      </View>
    );
  } else {
    return (
      <View style={tailwind('items-center bg-gray-100')}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.identifier}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              body={item.body}
              subName={item.subName}
              commentCount={item.commentCount}
              voteScore={item.voteScore}
            />
          )}
        />
      </View>
    );
  }
}
