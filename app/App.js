import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import EStyleSheet from 'react-native-extended-stylesheet';
import { YellowBox } from 'react-native';

import { theme } from './config/theme';
import Navigator from './config/routes';
import { persistor, store } from './redux/store';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

EStyleSheet.build(theme);

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);
