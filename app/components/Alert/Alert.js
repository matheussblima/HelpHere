import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { View } from 'react-native';

import Icon from '../Icon';
import { colors } from '../../config/theme';
import { Text } from '../Typography';

import styles from './styles';

class Alert extends React.Component {
  render() {
    const alertStyle = [
      styles.container,
      styles.alertBase,
      styles.alertSuccess,
      styles.alertShadow,
    ];

    return (
      <Animatable.View style={alertStyle} animation="slideInUp">
        <View style={styles.iconSection}>
          <Icon size={60} name="check" iconType="Entypo" color={colors.$PRIMARY_COLOR} />
        </View>
        <View style={styles.sectionText}>
          <Text style={styles.title}>Titulo</Text>
          <Text style={styles.subtitle}>Titul asdsdo sdfsdf sdfsdfsd dfsdf dsdf sdf</Text>
        </View>
      </Animatable.View>
    );
  }
}

Alert.propTypes = {};

export default Alert;
