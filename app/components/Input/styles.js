import EStylesSheet from 'react-native-extended-stylesheet';

import { theme } from '../../config/theme';

export default EStylesSheet.create({
  baseInput: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
  },
  inputBaseText: {
    fontSize: 17,
    fontWeight: '600',
  },
  inputDisabled: { opacity: 0.2 },
  inputNormalBorder: {
    borderWidth: 1,
    borderColor: '#FFF',
    borderStyle: 'solid',
  },
  inputNormalShadow: {
    shadowColor: '$INPUT_SHADOW_COLOR',
  },
  inputNormalText: {
    color: '$INPUT_NORMAL_COLOR',
  },
  inputValidBorder: {
    borderWidth: 1,
    borderColor: '$INPUT_VALID_COLOR',
    borderStyle: 'solid',
  },
  inputValidShadow: {
    shadowColor: '$INPUT_VALID_COLOR',
  },
  inputValidText: {
    color: '$INPUT_VALID_COLOR',
  },
  inputErrorBorder: {
    borderWidth: 1,
    borderColor: '$INPUT_ERROR_COLOR',
    borderStyle: 'solid',
  },
  inputErrorText: {
    color: '$INPUT_ERROR_COLOR',
  },
  inputErrorShadow: {
    shadowColor: '$INPUT_ERROR_COLOR',
  },
  inputWarnBorder: {
    borderWidth: 1,
    borderColor: '$INPUT_WARN_COLOR',
    borderStyle: 'solid',
  },
  inputWarnText: {
    color: '$INPUT_WARN_COLOR',
  },
  inputWarnShadow: {
    shadowColor: '$INPUT_WARN_COLOR',
  },
  inputSquared: {
    backgroundColor: '$INPUT_BACKGROUND',
    borderRadius: '$INPUT_SQUARED_RADIUS',
  },
  inputRounded: {
    backgroundColor: '$INPUT_BACKGROUND',
    borderRadius: '$INPUT_ROUNDED_RADIUS',
  },
  inputShadow: {
    shadowOffset: {
      width: theme.$INPUT_SHADOW_OFFSET_WIDTH,
      height: theme.$INPUT_SHADOW_OFFSET_HEIGHT,
    },
    shadowRadius: '$INPUT_SHADOW_RADIUS',
    shadowOpacity: '$INPUT_SHADOW_OPACITY',
    elevation: 2,
  },
  input: {
    flex: 1,
    textAlign: 'center',
    borderColor: 'transparent',
  },
  icon: {
    backgroundColor: 'transparent',
  },
});
