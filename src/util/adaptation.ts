import {Dimensions, Platform, PixelRatio} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

/**
 * @author 安国栋
 * @param size
 * @return 当前窗口于设计图的比例缩放后的真实尺寸
 */
export default function px(size: number) {
  if (PixelRatio.get() >= 3 && Platform.OS === 'ios' && size === 1) {
    return size;
  }
  return (deviceWidth / 750) * size;
}
