import React from 'react';
import { TouchableOpacity, View, Animated } from 'react-native';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';

import Icon from '../Icon';
import { colors } from '../../config/theme';
import { Text } from '../Typography';

import styles from './styles';

class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      positionAnimated: new Animated.Value(0),
      showAlert: true,
    };
  }

  componentDidMount() {
    this.showAlert();
  }

  showAlert = () => {
    const { showAlert } = this.state;

    // Lottie Play
    this.animation.play(0, 120);

    Animated.timing(this.state.positionAnimated, {
      toValue: showAlert ? 1 : 0,
      duration: 600,
    }).start(showAlert ? this.hideAlert() : null);
  };

  hideAlert = () => {
    setTimeout(() => {
      this.setState({ showAlert: false });
      this.showAlert();
    }, 4000);
  };

  buttonClose = () => {
    Animated.timing(this.state.positionAnimated, {
      toValue: 0,
      duration: 600,
    }).start();
  };

  render() {
    const { positionAnimated } = this.state;

    const alertStyle = [
      styles.container,
      styles.alertBase,
      styles.alertSuccess,
      styles.alertShadow,
    ];

    return (
      <Animated.View
        style={[
          alertStyle,
          {
            transform: [
              {
                translateY: positionAnimated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, -50],
                }),
              },
            ],
          },
        ]}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.iconSection}>
            {/* <Icon size={60} name="check" iconType="Entypo" color={colors.$PRIMARY_COLOR} /> */}
            <View style={{ width: 60, height: 60 }}>
              <LottieView
                ref={(animation) => {
                  this.animation = animation;
                }}
                source={require('./animations/animation-check.json')}
              />
            </View>
          </View>

          <View style={styles.sectionText}>
            <Text style={styles.title}>Titulo</Text>
            <Text style={styles.subtitle}>Titul asdsdo sdfsdf sdfsdfsd dfsdf dsdf sdf</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            padding: 8,
          }}
          onPress={() => this.buttonClose()}
          activeOpacity={0.8}
        >
          <Icon
            size={20}
            name="md-close-circle"
            iconType="Ionicons"
            color={colors.$SEVENTH_COLOR}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Alert.propTypes = {
  showAlert: PropTypes.bool,
};

Alert.defaultProps = {
  showAlert: true,
};

export default Alert;
