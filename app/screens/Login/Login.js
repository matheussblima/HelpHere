import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';

import { Container, Content } from '../../components';

import { Auth } from '../../containers';

class Login extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Content>
          <Auth />
        </Content>
      </Container>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
