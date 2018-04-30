import React from 'react';
import PropTypes from 'prop-types';
import VMasker from 'vanilla-masker';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native';

import Icon from '../Icon';

import { theme } from '../../config/theme';
import styles from './styles';

class Input extends React.Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      value,
    };
  }

  onChangeText = (inputValue) => {
    const { mask, onChangeText } = this.props;
    const { value } = this.state;

    let maskedValue;

    if (mask) {
      if (Array.isArray(mask)) {
        if (inputValue.length <= mask[0].length) {
          maskedValue = VMasker.toPattern(inputValue, mask[0]);
        } else {
          maskedValue = VMasker.toPattern(inputValue, mask[1]);
        }
      } else {
        maskedValue = VMasker.toPattern(inputValue, mask);
      }

      if (value !== maskedValue) this.setState({ value: maskedValue });
      onChangeText(maskedValue);
    } else {
      this.setState({ value });
      onChangeText(value);
    }
  };

  render() {
    const {
      height,
      width,
      kind,
      status,
      disabled,
      style,
      inputStyle,
      shadow,
      iconPosition,
      iconName,
      iconType,
      animation,
      duration,
      delay,
      direction,
      easing,
      iterationCount,
      transition,
      onAnimationBegin,
      onAnimationEnd,
      useNativeDriver,
    } = this.props;

    let inputStatus;
    let inputText;
    let colorIcon;

    if (status) {
      switch (status) {
        case 'normal':
          inputStatus = !shadow ? styles.inputNormalBorder : styles.inputNormalShadow;
          inputText = styles.inputNormalText;
          colorIcon = theme.$INPUT_NORMAL_COLOR;
          break;
        case 'valid':
          inputStatus = !shadow ? styles.inputValidBorder : styles.inputValidShadow;
          inputText = styles.inputValidText;
          colorIcon = theme.$INPUT_VALID_COLOR;
          break;
        case 'error':
          inputStatus = !shadow ? styles.inputErrorBorder : styles.inputErrorShadow;
          inputText = styles.inputErrorText;
          colorIcon = theme.$INPUT_ERROR_COLOR;
          break;
        case 'warn':
          inputStatus = !shadow ? styles.inputWarnBorder : styles.inputWarnShadow;
          inputText = styles.inputWarnText;
          colorIcon = theme.$INPUT_WARN_COLOR;
          break;

        default:
          break;
      }
    }

    const animatableProps = {
      animation,
      duration,
      delay,
      direction,
      easing,
      iterationCount,
      transition,
      onAnimationBegin,
      onAnimationEnd,
      useNativeDriver,
    };

    let leftIcon;
    let rightIcon;
    if (iconName && iconType) {
      const icon = (
        <Icon
          size={height / 1.5}
          name={iconName}
          iconType={iconType}
          color={colorIcon}
          style={styles.icon}
        />
      );
      leftIcon = iconPosition === 'left' && icon;
      rightIcon = iconPosition === 'right' && icon;
    }

    const inputStyles = [
      styles.baseInput,
      styles.inputBaseText,
      styles.input,
      inputText,
      { height, width },
      inputStyle,
    ];

    const inputContainerStyles = [
      styles.container,
      styles.baseInput,
      disabled ? styles.inputDisabled : {},
      inputStatus,
      shadow ? styles.inputShadow : {},
      kind === 'rounded' ? styles.inputRounded : styles.inputSquared,
      style,
    ];

    return (
      <Animatable.View {...animatableProps} style={inputContainerStyles}>
        {leftIcon}
        <TextInput
          {...this.props}
          underlineColorAndroid="rgba(0,0,0,0)"
          style={inputStyles}
          editable={!disabled}
          onChangeText={value => this.onChangeText(value)}
          value={this.state.value}
        />
        {rightIcon}
      </Animatable.View>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(['normal', 'valid', 'error', 'warn']),
  kind: PropTypes.oneOf(['rounded', 'squared']),
  shadow: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChangeText: PropTypes.func,
  animation: PropTypes.string,
  animatedGradient: PropTypes.bool,
  speedAnimatedGradient: PropTypes.number,
  pointsAnimatedGradient: PropTypes.object,
  duration: PropTypes.number,
  delay: PropTypes.number,
  direction: PropTypes.string,
  easing: PropTypes.string,
  iterationCount: PropTypes.number,
  transition: PropTypes.string,
  onAnimationBegin: PropTypes.func,
  onAnimationEnd: PropTypes.func,
  useNativeDriver: PropTypes.bool,
};

Input.defaultProps = {
  height: theme.$INPUT_HEIGHT,
  value: '',
  disabled: false,
  status: 'normal',
  kind: 'rounded',
  onChangeText: () => {},
  shadow: true,
};

export default Input;
