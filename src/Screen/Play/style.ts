import px from '@/util/adaptation';
import {StyleSheet, Platform, Dimensions} from 'react-native';
const statusHeight = Platform.OS == 'android' ? 0 : px(57);
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: '100%',
    height,
  },
  slide1: {
    backgroundColor: '#000000',
    opacity: 0.8,
    height,
    display: 'flex',
    flexDirection: 'column',
  },

  rightIconList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: px(30),
    marginLeft: 'auto',
    marginTop: px(26) + statusHeight,
  },
  headIcon: {
    width: px(32),
    height: px(32),
  },

  horn: {
    width: px(72),
    height: px(60),
    borderBottomLeftRadius: px(30),
    borderTopLeftRadius: px(30),
    backgroundColor: '#000000',
    opacity: 0.2,
    position: 'absolute',
    top: px(143),
    right: 0,
  },
  videoStatus: {
    width: px(119),
    height: px(119),
    marginTop: px(492),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  icon: {
    width: px(36),
    height: px(30),
    position: 'absolute',
    top: px(157),
    right: px(12),
  },
  open: {
    width: px(16),
    height: px(200),
    position: 'absolute',
    top: px(566),
  },
  avatar: {
    position: 'absolute',
    right: px(31),
    bottom: px(379),
  },
  controller: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 20,
    paddingBottom: px(41),
    backgroundColor: '#000000',
    opacity: 0.84,
    width: '100%',
    minHeight: px(316),
    paddingLeft: px(30),
  },
  head: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  comment: {
    width: px(88),
    height: px(36),
    borderWidth: px(2),
    borderColor: '#FF4646',
    borderRadius: px(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: px(8),
  },
});
