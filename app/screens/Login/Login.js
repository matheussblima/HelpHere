import React from "react";
import PropTypes from "prop-types";
import { View, StatusBar } from "react-native";

import strings from "../../config/strings";
import styles from "./styles";
import {
  Container,
  Avatar,
  Content,
  Input,
  Button,
  Switch
} from "../../components";

import { colors } from "../../config/theme";

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
              <Avatar disabled />
            </View>
            {/* INPUTS */}
            <Input
              placeholder={strings.cpf}
              mask="999.999.999-99"
              maxLength={14}
            />
            <Input placeholder={strings.password} />
            {/* SAVE CPF */}
            <Switch switchEnabled>{strings.rememberCpf}</Switch>
            {/* BUTTONS */}
            <View style={styles.buttonsSection}>
              <Button kind="rounded">{strings.login}</Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object
};

export default Login;
