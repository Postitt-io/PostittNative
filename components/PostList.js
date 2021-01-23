/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import dayjs from 'dayjs';

import { Icon, Divider } from 'react-native-elements';
import { tailwind, getColor } from '../lib/tailwind';
import axios from 'axios';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

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

  function Item({ post }) {
    const { title, body, subName, commentCount, voteScore, username, createdAt } = post;

    const titleStyle = body
      ? tailwind('px-1 text-gray-800 font-light text-left bg-white')
      : tailwind('px-1 text-gray-800 font-light text-left bg-white rounded-b');

    return (
      <TouchableOpacity
        style={tailwind('bg-gray-400 p-1 m-1 rounded-lg items-center items-stretch')}
      >
        <View style={tailwind('flex-row bg-white rounded-t justify-between')}>
          <View style={tailwind('flex-row justify-start')}>
            <Text style={tailwind('text-gray-800 px-1 text-xs font-thin')}>p/{subName}</Text>
          </View>
          <View style={tailwind('flex-row text-right')}>
            <Text style={tailwind('text-gray-800 px-1 text-xs font-thin underline')}>
              {username}
            </Text>
            <Text style={tailwind('text-gray-800 px-1 text-xs font-thin')}>
              {dayjs(createdAt).fromNow()}
            </Text>
          </View>
        </View>
        <Divider style={{ height: 1, color: getColor('gray-200') }} />
        <Text style={titleStyle}>{title}</Text>
        {/* Post body */}
        {body ? (
          <Text
            style={tailwind(
              'px-1 text-gray-900 font-semibold text-sm text-left bg-gray-100 rounded-b',
            )}
          >
            {body}
          </Text>
        ) : null}
        {/* Start of Icons */}
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
      <View style={tailwind('items-center pt-10 flex-row justify-center')}>
        <ActivityIndicator size="large" color="#0000ff" style={tailwind('mx-3')} />
        <Text style={tailwind('text-gray-800 font-light text-lg')}>Loading... </Text>
      </View>
    );
  } else {
    return (
      <View style={tailwind('items-center bg-gray-100')}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.identifier}
          renderItem={({ item }) => <Item post={item} />}
        />
      </View>
    );
  }
}
