import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

export const App = () => (
  <Provider store={createStore(reducers)}>
    <View>
      <Text>test</Text>
    </View>
  </Provider>
);
