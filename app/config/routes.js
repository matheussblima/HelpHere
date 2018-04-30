import { StackNavigator } from 'react-navigation';
import { Onboarding, Login } from '../screens';

import { colors } from './theme';

export default StackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        header: () => null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      },
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.$FIFTH_COLOR,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerTintColor: colors.$SECOND_COLOR,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
