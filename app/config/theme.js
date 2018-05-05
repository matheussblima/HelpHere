import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const colors = {
  $PRIMARY_COLOR: "#25A328",
  $SECOND_COLOR: "#279EAE",
  $FIFTH_COLOR: "#eff0f5",
  $SIXTH_COLOR: "#191919",
  $ERROR_COLOR: "#e03126",
  $WARN_COLOR: "#ff8c2f",
  $GRADIENT_ANIMATED_COLOR: ["#25a328", "#86ff89", "#279eae", "#279eae"]
};

const theme = {
  // ** BUTTON **
  $BUTTON_FONT_COLOR: "#fff",
  $BUTTON_ROUNDED_RADIUS: 23,
  $BUTTON_ROUNDED_HEIGHT: 45,
  $BUTTON_ROUNDED_FONT_SIZE: 14,
  $BUTTON_SQUARED_RADIUS: 5,
  $BUTTON_SQUARED_HEIGHT: 45,
  $BUTTON_SQUARED_FONT_SIZE: 14,
  $BUTTON_STATE_SUCCESS: colors.$PRIMARY_COLOR,
  $BUTTON_STATE_DANGER: colors.$WARN_COLOR,
  $BUTTON_STATE_PRIMARY: colors.$SECOND_COLOR,
  $BUTTON_SHADOW_COLOR: colors.$SIXTH_COLOR,
  $BUTTON_SHADOW_OPACITY: 0.3,
  $BUTTON_SHADOW_OFFSET_WIDTH: 0,
  $BUTTON_SHADOW_OFFSET_HEIGHT: 3,
  $BUTTON_SHADOW_RADIUS: 5,

  // ** ICON **
  $BUTTON_ICON_SIZE: 25,
  $BUTTON_ICON_COLOR: "#fff",

  // ** TEXT **
  $FONT_COLOR: "#333",
  $FONT_SIZE: 14,
  $FONT_WEIGHT: "normal",
  $FONT_STYLE: "normal",
  $PADDING_VERTICAL: 10,
  $TEXT_ALIGN: "left",
  // H1
  $FONT_SIZE_H1: 28,
  // H2
  $FONT_SIZE_H2: 22,
  // H3
  $FONT_SIZE_H3: 20,
  // H4
  $FONT_SIZE_H4: 17,
  // H5
  $FONT_SIZE_H5: 15,
  // H6
  $FONT_SIZE_H6: 13,

  // ** SECTION_ROUNDED_BOTTOM **
  $SECTION_ROUNDED_BOTTOM_WIDTH: width,
  $SECTION_ROUNDED_BOTTOM_COLOR: colors.$PRIMARY_COLOR,

  // ** CONTAINER **
  $CONTAINER_COLOR: colors.$FIFTH_COLOR,
  $CONTAINER_HEIGHT: height,

  // ** CONTENT **
  $CONTENT_COLOR: colors.$FIFTH_COLOR,
  $CONTENT_MARGIN_HORIZONTAL: 16,

  // ** AVATAR **
  $AVATAR_SIZE: 130,
  $AVATAR_COLOR: colors.$SECOND_COLOR,
  $AVATAR_SHADOW_COLOR: colors.$SIXTH_COLOR,
  $AVATAR_SHADOW_OPACITY: 0.3,
  $AVATAR_SHADOW_OFFSET_WIDTH: 0,
  $AVATAR_SHADOW_OFFSET_HEIGHT: 3,
  $AVATAR_SHADOW_RADIUS: 5,

  // ** INPUT **
  $INPUT_HEIGHT: 45,
  $INPUT_BACKGROUND: "#FFF",
  $INPUT_ICON_SIZE: 20,
  $INPUT_VALID_ICON: "md-checkmark",
  $INPUT_WARN_ICON: "md-alert",
  $INPUT_ERROR_ICON: "md-close",
  $INPUT_NORMAL_COLOR: colors.$SIXTH_COLOR,
  $INPUT_VALID_COLOR: colors.$PRIMARY_COLOR,
  $INPUT_WARN_COLOR: colors.$WARN_COLOR,
  $INPUT_ERROR_COLOR: colors.$ERROR_COLOR,
  $INPUT_SQUARED_RADIUS: 5,
  $INPUT_ROUNDED_RADIUS: 23,
  $INPUT_SHADOW_COLOR: colors.$SIXTH_COLOR,
  $INPUT_SHADOW_OPACITY: 0.3,
  $INPUT_SHADOW_OFFSET_WIDTH: 0,
  $INPUT_SHADOW_OFFSET_HEIGHT: 3,
  $INPUT_SHADOW_RADIUS: 5,

  // ** SWITCH **
  $SWITCH_FONT_COLOR: colors.$PRIMARY_COLOR,
  $SWITCH_FONT_SIZE: 16
};

export { theme, colors };
