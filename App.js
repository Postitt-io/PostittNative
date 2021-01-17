import React from 'react';
import { SafeAreaView } from 'react-native';

import PostittHeader from './components/PostittHeader';
import PostList from './components/PostList';

export default function App() {
  return (
    <SafeAreaView>
      <PostittHeader />
      <PostList />
    </SafeAreaView>
  );
}
