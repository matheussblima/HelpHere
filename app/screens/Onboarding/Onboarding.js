import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import strings from "../../config/strings";
import styles from "./styles";
import {
  Container,
  Content,
  SectionRoundedBottom,
  Logo,
  H1,
  H4,
  Button
} from "../../components";
import { colors } from "../../config/theme";

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        {/* HEADER */}
        <SectionRoundedBottom
          animated
          colorsGradient={colors.$GRADIENT_ANIMATED_COLOR}
          speed={2000}
          style={styles.header}
        >
          <Logo animation="fadeIn" />
        </SectionRoundedBottom>
        {/* CONTENT */}
        <Content style={styles.content}>
          {/* SECTION WELCOME */}
          <View style={styles.sectionWelcome}>
            <H1
              style={styles.titleWelcome}
              fontWeight="bold"
              animation="fadeInDown"
            >
              {strings.welcome}
            </H1>
            <H4 style={styles.subTitleWelcome} italic animation="zoomIn">
              {strings.findProfessionals}
            </H4>
          </View>
          {/* SECTION BUTTONS */}
          <View style={styles.sectionButton}>
            <Button kind="rounded" animation="fadeInRight">
              {strings.startNow}
            </Button>
            <Button
              animation="fadeInLeft"
              style={styles.buttonEntrar}
              textStyle={styles.buttonTextEntrar}
              type="naked"
              shadow={false}
              onPress={() => navigation.navigate("Login")}
            >
              {strings.login}
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

Onboarding.propTypes = {
  navigation: PropTypes.object
};

export default Onboarding;
