import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import {Input} from 'react-native-elements';
import px from '@/util/adaptation';
import {Avatar, Button} from 'react-native-elements';
import Video from 'react-native-video';
import styles from './style';
@inject('user')
@observer
export default class Play extends React.Component<any, any> {
  state = {
    mess: '',
    pageX: 0,
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
    currentIndex: 2,
    isShow: true,
    isplay: true,
    isNeedShow: false,
  };
  navigation: any; // 导航器
  constructor(props: any) {
    super(props);
    this.navigation = props.navigation;
  }
  componentDidMount(): void {
    const {ImageList, currentIndex} = this.state;
    this.setState({
      currentBackgroundImage: ImageList[currentIndex].uri,
    });
    setTimeout(() => {
      this.setState({
        isShow: false,
      });
    }, 3000);
  }

  toucnStart(e: any) {
    const {pageX} = e.nativeEvent;
    if (pageX < 188) {
      this.setState({
        pageX,
      });
    } else {
      this.setState({
        pageX: 0,
      });
    }
  }
  touchEnd(e: any) {
    // console.log('移动结束', e.nativeEvent.pageX);
    const {pageX} = e.nativeEvent;
    if (this.state.pageX > 0 && pageX - this.state.pageX > 100) {
      this.setState({
        isShow: true,
      });
      setTimeout(() => {
        this.setState({
          isShow: false,
        });
      }, 3000);
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
      avatar,
      currentBackgroundImage,
      isShow,
      isplay,
      isNeedShow,
    } = this.state;

    return (
      <ImageBackground
        style={{
          flex: 1,
          position: 'relative',
          backfaceVisibility: 'visible',
        }}
        // @ts-ignore
        source={currentBackgroundImage}>
        <View style={styles.rightIconList}>
          <Image
            style={styles.headIcon}
            source={require('@/assets/photo/air.png')}
          />
          <Image
            style={{
              ...styles.headIcon,
              marginLeft: px(34),
              marginRight: px(34),
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
          style={{...styles.open, left: isShow ? px(7) : px(-20)}}
          source={require('@/assets/photo/open.png')}
        />
        <Avatar
          containerStyle={styles.avatar}
          size={px(72)}
          rounded
          source={{uri: avatar}}
        />
        <View style={styles.controller}>
          <View style={{...styles.head, marginTop: px(14)}}>
            <Text
              style={{fontSize: px(30), color: '#3594EE', marginRight: px(15)}}>
              原创
            </Text>
            <Text style={{fontSize: px(26), color: '#FFFFFF'}}>天空之城</Text>
            <Image
              style={{
                width: px(40),
                height: px(36),
                marginRight: px(26),
                alignSelf: 'flex-end',
                marginLeft: 'auto',
              }}
              source={require('@/assets/photo/icon_like.png')}
            />
            <Image
              style={{
                width: px(40),
                height: px(40),
                marginRight: px(30),
              }}
              source={require('@/assets/photo/icon_share.png')}
            />
          </View>
          <View style={{...styles.head, marginTop: px(26)}}>
            <Avatar
              containerStyle={{marginRight: px(24)}}
              rounded
              source={{uri: avatar}}
            />
            <View style={styles.comment}>
              <Image
                style={{width: px(17), height: px(20), marginLeft: px(10)}}
                source={require('@/assets/photo/icon_fire.png')}
              />
              <Text style={{fontSize: px(24), color: '#FF4646'}}>神评</Text>
            </View>
            <Text
              numberOfLines={1}
              style={{width: px(435), fontSize: px(26), color: '#FFFFFF'}}>
              往上滚动展示留言页往上滚动展示页帅哒哒哒哒
            </Text>
            <Image
              style={{
                width: px(30),
                height: px(6),
                marginRight: px(30),
                marginLeft: 'auto',
              }}
              source={require('@/assets/photo/icon_more.png')}
            />
          </View>
          <View style={{...styles.head, marginTop: px(26)}}>
            <Avatar
              containerStyle={{marginRight: px(24)}}
              rounded
              source={{uri: avatar}}
            />
            <Text
              numberOfLines={1}
              style={{width: px(435), fontSize: px(26), color: '#FFFFFF'}}>
              往上滚动展示留言页往上滚动展示页帅哒哒哒哒
            </Text>
            <Image
              style={{
                width: px(30),
                height: px(6),
                marginRight: px(30),
                marginLeft: 'auto',
              }}
              source={require('@/assets/photo/icon_more.png')}
            />
          </View>
          <View style={{...styles.head, marginTop: px(21)}}>
            <KeyboardAvoidingView style={styles.head} behavior="height">
              <Input
                containerStyle={{
                  width: px(536),
                  height: px(60),
                  borderColor: '#666666',
                  borderWidth: px(2),
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingBottom: 0,
                }}
                leftIcon={
                  <Image
                    style={{
                      width: px(40),
                      height: px(31),
                      marginLeft: px(14),
                      marginRight: px(18),
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
                style={{width: px(120), height: px(60), padding: 0}}
                titleStyle={{fontSize: px(30)}}
                buttonStyle={{
                  padding: 0,
                  height: px(60),
                  marginLeft: px(34),
                }}
              />
            </KeyboardAvoidingView>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
