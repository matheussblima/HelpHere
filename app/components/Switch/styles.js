import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  baseText: {
    alignSelf: "center",
    color: "$SWITCH_FONT_COLOR",
    fontSize: "$SWITCH_FONT_SIZE",
    paddingHorizontal: 8,
    fontWeight: "600"
  }
});
