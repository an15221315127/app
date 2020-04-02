import React from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import {Input} from 'react-native-elements';
import {ScaleSize, ScaleText} from '@/util/adaptation';

import {Avatar, Button} from 'react-native-elements';
import Video from 'react-native-video';
import Swiper from 'react-native-swiper';
import {Progress} from 'beeshell/dist/components/Progress';
import styles from './style';
import {NumToTime} from '@/util/util';
@inject('user')
@observer
export default class Play extends React.Component<any, any> {
  state = {
    mess: '',
    currentTime: 0,
    duration: 100,
    pageX: 0,
    adress1:
      'https://ip1740445045.mobgslb.tbcache.com/67746F50E68347156BE2D2D6C/03000801005895D3DE54D8000000011A3F3119-EDA2-CCC5-516E-3AE26D003076.mp4?ccode=050F&duration=82&expire=18000&psid=fdaba3e10bb38b6bfe53425273cb48e2&ups_client_netip=b4af0146&ups_ts=1585552774&ups_userid=&utid=i4QDF62UfFICAbSvAUb%2BwR68&vid=XMjEwNzU1NDk2MA%3D%3D&vkey=B599435c730536d222c711fa28a5f8e25&eo=0&bc=2&dre=u21&si=42&dst=1&ali_redirect_domain=ykugc.cp31.ott.cibntv.net&ali_redirect_ex_ftag=4356a9f3db7422be2507e43e2ee8d514cafc5dd260cf03c7&ali_redirect_ex_tmining_ts=1585552773&ali_redirect_ex_tmining_expire=3600&ali_redirect_ex_hot=100',
    avatar:
      'https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJIsvPcVfz6HIAhruSRRTvouSUUiakLX8KbDH2PHzOb0J5zt3852KRy1kdIeJGFp8icfgsOkXKq14xg/132',
    ImageList: [
      {
        name: '男神',
        uri: require('@/assets/photo/pic_01.png'),
      },
      {
        name: '男神',
        uri: require('@/assets/photo/pic_02.png'),
      },
      {
        name: '男神',
        uri: require('@/assets/photo/pic_03.png'),
      },
    ],
    currentBackgroundImage: '',
    currentIndex: 0,
    isShow: true,
    isplay: true,
    isNeedShow: false,
  };
  navigation: any; // 导航器
  constructor(props: any) {
    super(props);
    this.navigation = props.navigation;
  }
  player: any;
  onProgress(e: any) {
    let currentTime = parseInt(e.currentTime);
    this.setState({
      currentTime,
    });
  }
  onLoad(e: any) {
    let {currentTime, duration} = e;
    this.setState({
      duration,
      currentTime,
    });
  }
  componentDidMount(): void {
    setTimeout(() => {
      this.setState({
        isShow: false,
      });
    }, 2000);
  }

  touchStart(e: any) {
    const {pageX} = e.nativeEvent;
    this.setState({
      pageX,
    });
  }
  touchMove(e: any) {
    const {pageX} = e.nativeEvent;
    if (this.state.pageX > 0 && pageX - this.state.pageX > 50) {
      this.setState({
        isShow: true,
      });
      setTimeout(() => {
        this.setState({
          isShow: false,
        });
      }, 3000);
      console.log('home',this.navigation)
      this.navigation.navigate('Home');
    }
  }

  changeStatus() {
    this.setState({
      isplay: !this.state.isplay,
      isNeedShow: true,
    });
    if (this.state.isNeedShow && !this.state.isplay) {
      setTimeout(() => {
        this.setState({
          isNeedShow: false,
        });
      }, 1000);
    }
  }
  changeIndex(index: number) {
    this.setState({
      currentIndex: index,
      currentTime: 0,
    });
  }
  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    const {
      adress1,
      currentIndex,
      avatar,
      isShow,
      isplay,
      isNeedShow,
      ImageList,
      currentTime,
      duration,
    } = this.state;
    return (
      <Swiper
        onIndexChanged={index => this.changeIndex(index)}
        onTouchStart={(e: any) => this.touchStart(e)}
        onTouchMove={(e: any) => this.touchMove(e)}
        horizontal={false}
        showsPagination={false}
        showsButtons={false}>
        {ImageList.map((item: any, index) => {
          return (
            <View
              key={index}
              style={{
                flex: 1,
                position: 'relative',
                backfaceVisibility: 'visible',
              }}>
              <TouchableWithoutFeedback onPress={() => this.changeStatus()}>
                <Video
                  useTextureView={false}
                  reportBandwidth={true}
                  progressUpdateInterval={1000}
                  maxBitRate={2000000}
                  disableFocus={true}
                  onLoad={e => this.onLoad(e)}
                  source={{uri: adress1}} // Can be a URL or a local file.
                  ref={ref => {
                    this.player = ref;
                  }}
                  posterResizeMode={'stretch'}
                  paused={
                    isplay === true && currentIndex == index ? false : true
                  }
                  onProgress={e => this.onProgress(e)}
                  style={styles.backgroundVideo}
                />
              </TouchableWithoutFeedback>

              <View style={styles.progressView}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: ScaleText(24),
                    marginBottom: ScaleText(30),
                    marginLeft: ScaleText(31),
                  }}>
                  {currentTime > 0 ? NumToTime(currentTime) : '00:00'}
                </Text>
                <Progress
                  easing={true}
                  percent={currentTime}
                  duration={duration}
                  barStyle={styles.progress}
                />
              </View>

              <View style={styles.rightIconList}>
                <Image
                  style={styles.headIcon}
                  source={require('@/assets/photo/air.png')}
                />
                <Image
                  style={{
                    ...styles.headIcon,
                    marginLeft: ScaleSize(34),
                  }}
                  source={require('@/assets/photo/quit.png')}
                />
              </View>
              <View style={styles.horn} />
              <Image
                style={styles.icon}
                source={require('@/assets/photo/icon_horn.png')}
              />
              {isNeedShow && (
                <TouchableOpacity onPress={() => this.changeStatus()}>
                  <Image
                    style={styles.videoStatus}
                    source={
                      !isplay
                        ? require('@/assets/play/icon_v_play.png')
                        : require('@/assets/play/icon_v_pause.png')
                    }
                  />
                </TouchableOpacity>
              )}
              {/*左边开启条*/}
              <Image
                style={{
                  ...styles.open,
                  left: isShow ? ScaleSize(7) : ScaleSize(-20),
                }}
                source={require('@/assets/photo/open.png')}
              />
              <Avatar
                containerStyle={styles.avatar}
                size={ScaleText(72)}
                rounded
                source={{uri: avatar}}
              />
              <View style={styles.controller}>
                <View style={{...styles.head, marginTop: ScaleSize(14)}}>
                  <Text
                    style={{
                      fontSize: ScaleText(30),
                      color: '#3594EE',
                      marginRight: ScaleSize(15),
                    }}>
                    原创
                  </Text>
                  <Text style={{fontSize: ScaleText(26), color: '#FFFFFF'}}>
                    天空之城
                  </Text>
                  <Image
                    style={{
                      width: ScaleText(40),
                      height: ScaleText(36),
                      marginRight: ScaleSize(26),
                      alignSelf: 'flex-end',
                      marginLeft: 'auto',
                    }}
                    source={require('@/assets/photo/icon_like.png')}
                  />
                  <Image
                    style={{
                      width: ScaleText(40),
                      height: ScaleText(40),
                      marginRight: ScaleSize(30),
                    }}
                    source={require('@/assets/photo/icon_share.png')}
                  />
                </View>
                <View style={{...styles.head, marginTop: ScaleSize(26)}}>
                  <Avatar
                    containerStyle={{marginRight: ScaleSize(24)}}
                    rounded
                    source={{uri: avatar}}
                  />
                  <View style={styles.comment}>
                    <Image
                      style={{
                        width: ScaleText(17),
                        height: ScaleText(20),
                        marginLeft: ScaleSize(10),
                      }}
                      source={require('@/assets/photo/icon_fire.png')}
                    />
                    <Text style={{fontSize: ScaleText(24), color: '#FF4646'}}>
                      神评
                    </Text>
                  </View>
                  <Text
                    numberOfLines={1}
                    style={{
                      width: ScaleSize(435),
                      fontSize: ScaleText(26),
                      color: '#FFFFFF',
                    }}>
                    往上滚动展示留言页往上滚动展示页帅哒哒哒哒
                  </Text>
                  <Image
                    style={{
                      width: ScaleText(30),
                      height: ScaleText(6),
                      marginRight: ScaleSize(30),
                      marginLeft: 'auto',
                    }}
                    source={require('@/assets/photo/icon_more.png')}
                  />
                </View>
                <View style={{...styles.head, marginTop: ScaleSize(26)}}>
                  <Avatar
                    containerStyle={{marginRight: ScaleSize(24)}}
                    rounded
                    source={{uri: avatar}}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      width: ScaleSize(435),
                      fontSize: ScaleText(26),
                      color: '#FFFFFF',
                    }}>
                    往上滚动展示留言页
                  </Text>
                  <Image
                    style={{
                      width: ScaleText(30),
                      height: ScaleText(6),
                      marginRight: ScaleSize(30),
                      marginLeft: 'auto',
                    }}
                    source={require('@/assets/photo/icon_more.png')}
                  />
                </View>
                <View style={{...styles.head, marginTop: ScaleSize(21)}}>
                  <KeyboardAvoidingView style={styles.head} behavior="height">
                    <Input
                      containerStyle={{
                        width: ScaleSize(536),
                        height: ScaleSize(60),
                        borderColor: '#666666',
                        borderWidth: ScaleSize(2),
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        paddingBottom: 0,
                      }}
                      leftIcon={
                        <Image
                          style={{
                            width: ScaleText(40),
                            height: ScaleText(31),
                            marginLeft: ScaleSize(14),
                            marginRight: ScaleSize(18),
                          }}
                          source={require('@/assets/photo/icon_mess.png')}
                        />
                      }
                      placeholder="来说点什么吧~"
                      value={this.state.mess}
                      onChangeText={e => {
                        this.setState({
                          mess: e,
                        });
                      }}
                    />
                    <Button
                      title="发送"
                      type="outline"
                      style={{
                        width: ScaleSize(120),
                        height: ScaleSize(60),
                        padding: 0,
                      }}
                      titleStyle={{fontSize: ScaleText(30)}}
                      buttonStyle={{
                        padding: 0,
                        height: ScaleSize(60),
                        marginLeft: ScaleSize(34),
                      }}
                    />
                  </KeyboardAvoidingView>
                </View>
              </View>
            </View>
          );
        })}
      </Swiper>
    );
  }
}
