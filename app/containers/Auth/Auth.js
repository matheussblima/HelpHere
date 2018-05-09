import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import strings from '../../config/strings';
import styles from './styles';
import { Avatar, Input, Button, Switch, Alert } from '../../components';

import validationCpf from '../../utils/validationCpf';
import { authentication } from '../../redux/actions/authentication';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusInputCpf: 'normal',
      disabledButtonLogin: false,
      user: null,
      password: null,
    };
  }

  onChangeTextInputCpf = (objectValue) => {
    const validCpf = validationCpf(objectValue.valueRaw);
    if (validCpf) {
      this.setState({ statusInputCpf: 'normal' });
      this.setState({ user: objectValue.valueRaw });
    } else {
      this.setState({ statusInputCpf: 'error' });
    }
  };

  async onPressButtonLogin() {
    const { user, password } = this.state;

    if (user && password) {
      const response = await this.props.dispatch(authentication(user, password));
      console.log(response);
    }
  }

  render() {
    const { navigation } = this.props;
    const { disabledButtonLogin, statusInputCpf } = this.state;

    return (
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Avatar disabled />
        </View>
        {/* INPUTS */}
        <Input
          placeholder={strings.cpf}
          mask="999.999.999-99"
          status={statusInputCpf}
          maxLength={14}
          onChangeText={value => this.onChangeTextInputCpf(value)}
        />
        <Input placeholder={strings.password} />
        {/* SAVE CPF */}
        <Switch switchEnabled>{strings.rememberCpf}</Switch>
        {/* BUTTONS */}
        <View style={styles.buttonsSection}>
          <Button
            disabled={disabledButtonLogin}
            kind="rounded"
            onPress={() => this.onPressButtonLogin()}
          >
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
        <Alert />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const authIsLoggingIn = state.authentication.isLoggingIn;
  const authIsAuthenticated = state.authentication.isAuthenticated;
  const authMessage = state.authentication.message;
  const authToken = state.authentication.token;
  const authStatus = state.authentication.status;

  return {
    authIsLoggingIn,
    authIsAuthenticated,
    authMessage,
    authToken,
    authStatus,
  };
};

Auth.propTypes = {
  dispatch: PropTypes.func,
  navigation: PropTypes.object,
};

export default connect(mapStateToProps)(Auth);
