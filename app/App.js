import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { YellowBox } from 'react-native';

import { theme } from './config/theme';
import Navigator from './config/routes';
import store from './redux/store';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

EStyleSheet.build(theme);

export default () =>
  (<Provider store={store}>
    <Navigator />
   </Provider>);
