import {StyleSheet} from 'react-native';
import {scaleSizeH,setSpText,scaleSizeW} from "@/util/adaptation";

export default StyleSheet.create({
  screen: {
    backgroundColor: '#000000',
    height: '100%',
    width: '100%',
    opacity: 0.8,
  },
  headerSearch: {
    height: scaleSizeH(60),
    width: '100%',
    fontSize: setSpText(28),
    backgroundColor: '#333333',
  },
  plate: {
    width: scaleSizeW(690),
    marginTop: scaleSizeH(20),
    marginBottom: scaleSizeH(8),
    height: scaleSizeH(224),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scaleSizeW(30),
    marginRight: scaleSizeW(30),
  },
  plateText: {
    fontSize: setSpText(28),
    color: '#FFFFFF',
    marginTop: scaleSizeH(24),
    textAlign: 'center',
  },
  plateItem: {
    width: scaleSizeW(224),
    height: scaleSizeW(224),
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#333333',
    height: scaleSizeH(50),
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: setSpText(24),
    lineHeight: scaleSizeH(50),
  },
  statusText2: {
    color: '#FFFFFF',
    fontSize: setSpText(26),
    lineHeight: scaleSizeH(50),
  },
  first: {
    marginLeft: scaleSizeW(30),
    marginRight: scaleSizeW(29),
  },
  second: {
    marginRight: scaleSizeW(21),
  },
  third: {
    color: '#00D623',
  },
  appList: {
    width: scaleSizeW(690),
    marginLeft: scaleSizeW(30),
    marginRight: scaleSizeW(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 0,
    height: scaleSizeH(148),
    alignContent: 'flex-start',
  },
  application: {
    width: scaleSizeW(340),
    height: scaleSizeH(140),
    marginBottom: scaleSizeH(8),
    position: 'relative',
  },
  appText: {
    fontSize: setSpText(26),
    color: '#FFFFFF',
    marginTop: scaleSizeH(41),
    marginBottom: scaleSizeH(16),
    marginLeft: scaleSizeW(20),
  },
  appMessage: {
    fontSize: setSpText(20),
    color: '#FFFFFF',
    marginLeft: scaleSizeW(20),
  },
  star: {
    width: setSpText(24),
    height: setSpText(24),
    position: 'absolute',
    right: scaleSizeW(18),
    top: scaleSizeH(18),
  },
  select: {
    width: setSpText(30),
    height: setSpText(30),
    position: 'absolute',
    right: scaleSizeW(19),
    bottom: scaleSizeH(18),
  },
});
