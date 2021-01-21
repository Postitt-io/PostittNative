import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import axios from 'axios';

import PostittHeader from './components/PostittHeader';
import PostList from './components/PostList';

axios.defaults.baseURL = 'http://10.0.1.19:5000/api';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <PostittHeader />
      <PostList />
    </SafeAreaView>
  );
}
