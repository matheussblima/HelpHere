import React from "react";
import PropTypes from "prop-types";
import { View, StatusBar } from "react-native";
import { connect } from "react-redux";

import strings from "../../config/strings";
import styles from "./styles";
import { Avatar, Input, Button, Switch } from "../../components";

import { authentication } from "../../redux/actions/authentication";

class Auth extends React.Component {
  async onPressButtonLogin() {
    response = await this.props.dispatch(
      authentication("88888888888", "mudar123")
    );

    console.warn(response);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Avatar disabled />
        </View>
        {/* INPUTS */}
        <Input placeholder={strings.cpf} mask="999.999.999-99" maxLength={14} />
        <Input placeholder={strings.password} />
        {/* SAVE CPF */}
        <Switch switchEnabled>{strings.rememberCpf}</Switch>
        {/* BUTTONS */}
        <View style={styles.buttonsSection}>
          <Button kind="rounded" onPress={() => this.onPressButtonLogin()}>
            {strings.login}
          </Button>
          <Button
            style={styles.buttonForgotPassword}
            shadow={false}
            textStyle={styles.buttonTextForgotPassword}
            type="naked"
          >
            {strings.ForgotPassword}
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const isLoggingIn = state.auth.isLoggingIn;
  const isAuthenticated = state.auth.isAuthenticated;
  const message = state.auth.message;
  const token = state.auth.token;
  const status = state.auth.status;

  return {
    isLoggingIn,
    isAuthenticated,
    message,
    token,
    status
  };
};

Auth.propTypes = {
  navigation: PropTypes.object
};

export default connect(mapStateToProps)(Auth);
