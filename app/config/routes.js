import { StackNavigator } from 'react-navigation';
import { Onboarding, Login } from '../screens';

export default StackNavigator(
  {
    Onboarding: {
      screen: Login,
      navigationOptions: {
        header: () => null,
      },
    },
    Login: {
      screen: Login,
    },
  },
  {
    mode: 'modal',
  },
);
