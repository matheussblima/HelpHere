import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { theme } from './config/theme';
import Navigator from './config/routes';
import store from './redux/store';

EStyleSheet.build(theme);

export default () =>
  (<Provider store={store}>
    <Navigator />
   </Provider>);
