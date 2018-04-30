import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import strings from '../../config/strings';
import styles from './styles';
import { Container, Avatar, Content, Input, Button } from '../../components';

class Login extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Content>
          <View style={{ flex: 1 }}>
            {/* HEADER */}
            <View style={styles.header}>
              <Avatar />
            </View>
            {/* INPUTS */}
            <Input placeholder="CPF" />
            <Input placeholder="Senha" />
            {/* BUTTONS */}
            <View>
              <Button kind="rounded">Entrar</Button>
            </View>
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
