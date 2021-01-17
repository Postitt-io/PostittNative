import React from 'react';
import { StyleSheet, View, ActivityIndicator, SafeAreaView } from 'react-native';

import Header from './components/Header';
import PostList from './components/PostList';
import axios from 'axios';
import tailwind from 'tailwind-rn';

axios.defaults.baseURL = 'http://10.0.1.5:5000/api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    return axios
      .get('/posts')
      .then((res) => {
        this.setState({
          isLoading: false,
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={tailwind('pt-5 px-5 flex bg-white')}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <SafeAreaView>
          <Header />
          <PostList data={this.state.posts} />
        </SafeAreaView>
      );
    }
  }
}
