import React from 'react';
import { SafeAreaView } from 'react-native';

import Header from './components/Header';
import PostList from './components/PostList';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Header />
        <PostList />
      </SafeAreaView>
    );
  }
}
