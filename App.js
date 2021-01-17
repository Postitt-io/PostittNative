import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import tailwind from 'tailwind-rn';
import axios from 'axios';

import Header from './components/Header';

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
    const posts = this.state.posts;

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

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <Header />
          <View>
            <FlatList
              data={posts}
              keyExtractor={(item) => item.identifier}
              renderItem={({ item }) => (
                <Item title={item.title} body={item.body} subName={item.subName} />
              )}
            />
          </View>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: '#fff',
  },
});
