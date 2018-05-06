import React from "react";
import PropTypes from "prop-types";
import { View, StatusBar } from "react-native";

import strings from "../../config/strings";
import styles from "./styles";
import { Container, Content } from "../../components";

import { Auth } from "../../containers";

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
  navigation: PropTypes.object
};

export default Login;
