import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import strings from '../../config/strings';
import styles from './styles';
import { Container, Avatar, Content, Input } from '../../components';

class Login extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Content>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Avatar />
            <Input />
          </View>
        </Content>
      </Container>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
