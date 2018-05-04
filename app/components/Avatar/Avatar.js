import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity, Image, View } from 'react-native';

import Icon from '../Icon';

import styles from './styles';
import { theme } from '../../config/theme';

class Avatar extends React.Component {
  render() {
    const {
      onPress,
      onPressIn,
      onPressOut,
      onLongPress,
      disabled,
      activeOpacity,
      size,
      colorAvatar,
      circle,
      disabledStyle,
      style,
      iconName,
      iconType,
      source,
      styleImage,
      shadow,
      animation,
      duration,
      delay,
      direction,
      easing,
      iterationCount,
      transition,
      onAnimationBegin,
      colorsGradient,
      onAnimationEnd,
      useNativeDriver,
    } = this.props;

    const touchableProps = {
      onPress,
      onPressIn,
      onPressOut,
      onLongPress,
    };

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

    const avatarStyles = [
      { width: size, height: size },
      circle ? { borderRadius: size / 2 } : {},
      styles.baseAvatar,
      style,
    ];

    const avatarImageStyles = [styles.innerContainer, styleImage];

    const childrenIconImage = () => {
      if (source) {
        return <Image style={avatarImageStyles} source={source} />;
      }
      return <Icon size={size / 1.5} name={iconName} iconType={iconType} />;
    };

    const innerContainer = () => (
      <TouchableOpacity
        {...touchableProps}
        disabled={disabled}
        activeOpacity={activeOpacity}
        style={avatarStyles}
      >
        {childrenIconImage()}
      </TouchableOpacity>
    );

    const container = () => {
      if (colorsGradient) {
        return (
          <LinearGradient
            colors={colorsGradient}
            style={[{ borderRadius: size / 2 }]}
          >
            {innerContainer()}
          </LinearGradient>
        );
      }
      return (
        <View
          style={[
            { borderRadius: size / 2, backgroundColor: colorAvatar },
          ]}
        >
          {innerContainer()}
        </View>
      );
    };

    return (
      <Animatable.View
        style={[styles.container, shadow ? styles.avatarShadow : {}, disabled ? disabledStyle : {}]}
        {...animatableProps}
      >
        {container()}
      </Animatable.View>
    );
  }
}

Avatar.propTypes = {
  circle: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  onLongPress: PropTypes.func,
  shadow: PropTypes.bool,
  border: PropTypes.bool,
  source: PropTypes.object,
  size: PropTypes.number,
  rating: PropTypes.string,
  iconName: PropTypes.string,
  colorsGradient: PropTypes.array,
  colorAvatar: PropTypes.string,
  iconType: PropTypes.string,
  default: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
  styleImage: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
  disabledStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
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

Avatar.defaultProps = {
  shadow: true,
  border: true,
  colorAvatar: theme.$AVATAR_COLOR,
  speedAnimatedGradient: 2000,
  iconName: 'md-person',
  iconType: 'Ionicons',
  circle: true,
  size: theme.$AVATAR_SIZE,
  activeOpacity: 0.8,
};

export default Avatar;
