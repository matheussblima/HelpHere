import React from 'react';
import PropTypes from 'prop-types';
import { View, Switch as RNSwitch, TouchableOpacity } from 'react-native';

import { Text } from '../Typography';
import { colors } from '../../config/theme';
import styles from './styles';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switchEnabled: this.props.switchEnabled };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ switchEnabled: nextProps.switchEnabled });
  }

  onValueChange = () => {
    this.changeValueSwitch(this.state.switchEnabled);
  };

  changeValueSwitch(value) {
    if (value) {
      this.setState({ switchEnabled: false });
      this.props.onChangeSwitch(false);
    } else {
      this.setState({ switchEnabled: true });
      this.props.onChangeSwitch(true);
    }
  }

  render() {
    const {
      onTintColor, children, textStyle, disabled, disabledTextStyle, uppercase,
    } = this.props;

    const textStyles = [styles.baseText, textStyle, disabled ? disabledTextStyle : {}];

    let content;
    if (children) {
      content = (
        <Text style={textStyles}>
          {uppercase ? children.toUpperCase() : children}
        </Text>
      );
    }

    return (
      <View style={styles.container}>
        <RNSwitch
          {...this.props}
          onTintColor={onTintColor}
          value={this.state.switchEnabled}
          onValueChange={this.onValueChange}
        />
        <View style={styles.children}>
          <TouchableOpacity onPress={this.onValueChange}>
            {content}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Switch.propTypes = {
  children: PropTypes.any,
  onChangeSwitch: PropTypes.func,
  onTintColor: PropTypes.string,
  uppercase: PropTypes.bool,
  disabled: PropTypes.bool,
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  disabledTextStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  switchEnabled: PropTypes.bool.isRequired,
};

export default Switch;
