import EStylesSheet from 'react-native-extended-stylesheet';

import { theme } from '../../config/theme';

export default EStylesSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    elevation: 1,
    bottom: 0,
    width: '100%',
    padding: 8,
    height: '100%',
  },
  alertBase: {
    height: 100,
    borderRadius: 10,
  },
  alertSuccess: {
    backgroundColor: '$ALERT_VALID_COLOR',
  },
  alertError: {
    backgroundColor: '$ALERT_ERROR_COLOR',
  },
  alertWarn: {
    backgroundColor: '$ALERT_WARN_COLOR',
  },
  sectionText: {
    flex: 2,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    bottom: '-0.4rem',
    fontWeight: '600',
    color: '$ALERT_COLOR_TITLE',
  },
  subtitle: {
    top: '-0.4rem',
    color: '$ALERT_COLOR_SUBTITLE',
  },
  iconSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertShadow: {
    shadowColor: '$ALERT_SHADOW_COLOR',
    shadowOffset: {
      width: theme.$ALERT_SHADOW_OFFSET_WIDTH,
      height: theme.$ALERT_SHADOW_OFFSET_HEIGHT,
    },
    shadowRadius: '$ALERT_SHADOW_RADIUS',
    shadowOpacity: '$ALERT_SHADOW_OPACITY',
    elevation: 2,
  },
});
