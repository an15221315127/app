import {StyleSheet} from 'react-native';
import {ScaleText, ScaleSize} from '@/util/adaptation';

export default StyleSheet.create({
  screen: {
    backgroundColor: '#000000',
    height: '100%',
    width: '100%',
    opacity: 0.8,
  },
  headerSearch: {
    height: ScaleSize(60),
    width: '100%',
    fontSize: ScaleText(28),
    backgroundColor: '#333333',
  },
  plate: {
    width: ScaleSize(690),
    marginTop: ScaleSize(20),
    marginBottom: ScaleSize(8),
    height: ScaleSize(224),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: ScaleSize(30),
    marginRight: ScaleSize(30),
  },
  plateText: {
    fontSize: ScaleText(28),
    color: '#FFFFFF',
    marginTop: ScaleSize(24),
    textAlign: 'center',
  },
  plateItem: {
    width: ScaleSize(224),
    height: ScaleSize(224),
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#333333',
    height: ScaleSize(50),
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: ScaleText(24),
    lineHeight: ScaleSize(50),
  },
  statusText2: {
    color: '#FFFFFF',
    fontSize: ScaleText(26),
    lineHeight: ScaleSize(50),
  },
  first: {
    marginLeft: ScaleSize(30),
    marginRight: ScaleSize(29),
  },
  second: {
    marginRight: ScaleSize(21),
  },
  third: {
    color: '#00D623',
  },
  appList: {
    width: ScaleSize(690),
    marginLeft: ScaleSize(30),
    marginRight: ScaleSize(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 0,
    height: ScaleSize(148),
    alignContent: 'flex-start',
  },
  application: {
    width: ScaleSize(340),
    height: ScaleSize(140),
    marginBottom: ScaleSize(8),
    position: 'relative',
  },
  appText: {
    fontSize: ScaleText(26),
    color: '#FFFFFF',
    marginTop: ScaleSize(41),
    marginBottom: ScaleSize(16),
    marginLeft: ScaleSize(20),
  },
  appMessage: {
    fontSize: ScaleText(20),
    color: '#FFFFFF',
    marginLeft: ScaleSize(20),
  },
  star: {
    width: ScaleText(24),
    height: ScaleText(24),
    position: 'absolute',
    right: ScaleSize(18),
    top: ScaleSize(18),
  },
  select: {
    width: ScaleText(30),
    height: ScaleText(30),
    position: 'absolute',
    right: ScaleSize(19),
    bottom: ScaleSize(18),
  },
});
