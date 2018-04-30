import EStylesSheet from 'react-native-extended-stylesheet';

import { theme } from '../../config/theme';

export default EStylesSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  baseAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarShadow: {
    shadowColor: '$AVATAR_SHADOW_COLOR',
    shadowOffset: {
      width: theme.$AVATAR_SHADOW_OFFSET_WIDTH,
      height: theme.$AVATAR_SHADOW_OFFSET_HEIGHT,
    },
    shadowRadius: '$AVATAR_SHADOW_RADIUS',
    shadowOpacity: '$AVATAR_SHADOW_OPACITY',
    elevation: 2,
  },
});
