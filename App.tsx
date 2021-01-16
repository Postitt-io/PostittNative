import React from 'react';

import { SafeAreaView } from 'react-native';
import { tailwind } from './lib/tailwind';
import Header from './components/Header';

const App = () => (
  <SafeAreaView style={tailwind('h-full')}>
    <Header />
  </SafeAreaView>
);
export default App;
