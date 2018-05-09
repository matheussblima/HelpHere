import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import Alert from './Alert';

class AlertProvider extends Component {
  static childContextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func,
  };

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(this.props.children)}
        <Alert />
      </View>
    );
  }
}

export default AlertProvider;
