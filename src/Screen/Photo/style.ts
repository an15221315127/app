import {scaleSizeH,scaleSizeW,setSpText} from "@/util/adaptation";
import {StyleSheet, Platform, Dimensions} from 'react-native';
const statusHeight = Platform.OS == 'android' ? 0 : scaleSizeH(57);
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  slide1: {
    backgroundColor: '#000000',
    opacity: 0.8,
    paddingTop: statusHeight + scaleSizeH(26),
    height,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: scaleSizeH(32),
  },
  rightIconList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  headIcon: {
    width: setSpText(32),
    height: setSpText(32),
  },
  headTit: {
    color: '#fff',
    fontSize: setSpText(30),
    fontWeight: 'bold',
    marginLeft: scaleSizeW(31),
  },
  contentText: {
    width: scaleSizeW(690),
    marginLeft: scaleSizeW(31),
    marginTop: scaleSizeH(17),
    marginRight: scaleSizeW(30),
    marginBottom: scaleSizeH(15),
  },
  texts: {
    fontSize: setSpText(26),
    color: '#FFFFFF',
  },
  starPeople: {
    fontSize: setSpText(26),
    color: '#FF460B',
    marginLeft: scaleSizeW(31),
    marginBottom: scaleSizeW(17),
  },
  showMore: {
    color: '#36A8FF',
    fontSize: setSpText(26),
  },
  horn: {
    width: scaleSizeW(72),
    height: scaleSizeH(60),
    borderBottomLeftRadius: scaleSizeW(30),
    borderTopLeftRadius: scaleSizeW(30),
    backgroundColor: '#000000',
    opacity: 0.2,
    position: 'absolute',
    top: scaleSizeH(30),
    right: 0,
  },
  icon: {
    width: setSpText(36),
    height: setSpText(30),
    position: 'absolute',
    top: scaleSizeH(44),
    right: scaleSizeW(12),
  },
  open: {
    width: setSpText(16),
    height: setSpText(200),
    position: 'absolute',
    top: scaleSizeH(259),
  },
  photoList: {
    width: '100%',
    height: scaleSizeH(56),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: scaleSizeW(30),
    bottom: scaleSizeH(349),
    borderRadius: scaleSizeW(4),
  },
  avatar: {
    position: 'absolute',
    right: scaleSizeW(31),
    bottom: scaleSizeH(343),
  },
  controller: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 20,
    backgroundColor: '#000000',
    opacity: 0.84,
    width: '100%',
    minHeight: scaleSizeH(316),
    paddingLeft: scaleSizeW(30),
  },
  head: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  comment: {
    width: scaleSizeW(88),
    height: scaleSizeH(36),
    borderWidth: scaleSizeW(2),
    borderColor: '#FF4646',
    borderRadius: scaleSizeW(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: scaleSizeW(8),
  },
});
