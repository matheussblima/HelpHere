import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';

import strings from '../../config/strings';
import styles from './styles';
import { Container, Avatar, Content, Input, Button } from '../../components';

class Login extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Content>
          <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
              <Avatar />
            </View>
            {/* INPUTS */}
            <Input placeholder={strings.cpf} />
            <Input placeholder={strings.password} />
            {/* BUTTONS */}
            <View style={styles.buttonsSection}>
              <Button kind="rounded">
                {strings.login}
              </Button>
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
