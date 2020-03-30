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
import {scaleSizeW, scaleSizeH, setSpText} from '@/util/adaptation';
import {Avatar, Button} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import styles from './style';
@inject('user')
@observer
export default class Photo extends React.Component<any, any> {
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
    currentIndex: 0,
    isShow: true,
    list: [1, 2, 3],
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
  touchMove(e: any) {
    // console.log('移动结束', e.nativeEvent.pageX);
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
      this.navigation.navigate('Home');
    }
  }

  changeImage(
    item:
      | {name: string; uri: any}
      | {name: string; uri: any}
      | {name: string; uri: any},
  ) {
    this.setState({
      currentBackgroundImage: item.uri,
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
      ImageList,
      avatar,
      currentBackgroundImage,
      isShow,
      list,
    } = this.state;

    return (
      <Swiper horizontal={false} showsPagination={false} showsButtons={false}>
        {list.map(_ => {
          return (
            <View
              style={styles.container}
              onTouchStart={this.toucnStart.bind(this)}
              onTouchMove={this.touchMove.bind(this)}>
              <View style={styles.slide1}>
                <View style={styles.header}>
                  <Text style={styles.headTit}>#一个标题话题</Text>
                  <View style={styles.rightIconList}>
                    <Image
                      style={styles.headIcon}
                      source={require('@/assets/photo/air.png')}
                    />
                    <Image
                      style={{
                        ...styles.headIcon,
                        marginLeft: scaleSizeW(34),
                        marginRight: scaleSizeW(34),
                      }}
                      source={require('@/assets/photo/quit.png')}
                    />
                  </View>
                </View>
                <View style={styles.contentText}>
                  <Text style={styles.texts} numberOfLines={4}>
                    关关和鸣的雎鸠，栖息在河中的小洲。贤良美好的女子，是
                    君子好的配偶。参差不齐的荇菜，忽左忽右把它摘取。贤良
                    美好的女子，日日夜夜都想追求她。追求却没法得到，日日
                    夜夜总思念她。绵绵不断的思念，叫人翻来...
                  </Text>
                  <View
                    style={{
                      ...styles.head,
                      position: 'absolute',
                      top: scaleSizeH(100),
                      left: scaleSizeW(530),
                    }}>
                    <Text style={styles.showMore}>展开全文</Text>
                    <Image
                      style={{
                        width: setSpText(24),
                        height: setSpText(13),
                        backgroundColor: 'transparent',
                      }}
                      source={require('@/assets/photo/down.png')}
                    />
                  </View>
                </View>
                <Text style={styles.starPeople}>@易烊千玺 @罗云熙 @罗云熙</Text>
                <ImageBackground
                  style={{
                    flex: 1,
                    position: 'relative',
                    backfaceVisibility: 'visible',
                  }}
                  // @ts-ignore
                  source={currentBackgroundImage}>
                  <View style={styles.horn} />
                  <Image
                    style={styles.icon}
                    source={require('@/assets/photo/icon_horn.png')}
                  />

                  {/*左边开启条*/}
                  <Image
                    style={{
                      ...styles.open,
                      left: isShow ? scaleSizeW(7) : scaleSizeW(-20),
                    }}
                    source={require('@/assets/photo/open.png')}
                  />
                  <View style={styles.photoList}>
                    {ImageList.map((item, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() => this.changeImage(item)}
                          key={index}>
                          <Image
                            style={{
                              width: setSpText(56),
                              height: setSpText(56),
                              marginRight: scaleSizeW(8),
                            }}
                            source={item.uri}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <Avatar
                    containerStyle={styles.avatar}
                    size={setSpText(72)}
                    rounded
                    source={{uri: avatar}}
                  />
                  <View style={styles.controller}>
                    <View style={{...styles.head, marginTop: scaleSizeH(14)}}>
                      <Image
                        style={{
                          width: setSpText(18),
                          height: setSpText(26),
                          marginRight: scaleSizeW(21),
                        }}
                        source={require('@/assets/photo/location.png')}
                      />
                      <Text style={{fontSize: setSpText(26), color: '#FFFFFF'}}>
                        天空之城
                      </Text>
                      <Image
                        style={{
                          width: setSpText(40),
                          height: setSpText(36),
                          marginRight: scaleSizeW(26),
                          alignSelf: 'flex-end',
                          marginLeft: 'auto',
                        }}
                        source={require('@/assets/photo/icon_like.png')}
                      />
                      <Image
                        style={{
                          width: setSpText(40),
                          height: setSpText(40),
                          marginRight: scaleSizeW(30),
                        }}
                        source={require('@/assets/photo/icon_share.png')}
                      />
                    </View>
                    <View style={{...styles.head, marginTop: scaleSizeH(26)}}>
                      <Avatar
                        containerStyle={{marginRight: scaleSizeW(24)}}
                        rounded
                        source={{uri: avatar}}
                      />
                      <View style={styles.comment}>
                        <Image
                          style={{
                            width: setSpText(17),
                            height: setSpText(20),
                            marginLeft: scaleSizeW(10),
                          }}
                          source={require('@/assets/photo/icon_fire.png')}
                        />
                        <Text
                          style={{fontSize: setSpText(24), color: '#FF4646'}}>
                          神评
                        </Text>
                      </View>
                      <Text
                        numberOfLines={1}
                        style={{
                          width: scaleSizeW(435),
                          fontSize: setSpText(26),
                          color: '#FFFFFF',
                        }}>
                        往上滚动展示留言页往上滚动展示页帅哒哒哒哒
                      </Text>
                      <Image
                        style={{
                          width: setSpText(30),
                          height: setSpText(6),
                          marginRight: scaleSizeW(30),
                          marginLeft: 'auto',
                        }}
                        source={require('@/assets/photo/icon_more.png')}
                      />
                    </View>
                    <View style={{...styles.head, marginTop: scaleSizeH(26)}}>
                      <Avatar
                        containerStyle={{marginRight: scaleSizeW(24)}}
                        rounded
                        source={{uri: avatar}}
                      />
                      <Text
                        numberOfLines={1}
                        style={{
                          width: scaleSizeW(435),
                          fontSize: setSpText(26),
                          color: '#FFFFFF',
                        }}>
                        往上滚动展示留言页往上滚动展示页帅哒哒哒哒
                      </Text>
                      <Image
                        style={{
                          width: setSpText(30),
                          height: setSpText(6),
                          marginRight: scaleSizeW(30),
                          marginLeft: 'auto',
                        }}
                        source={require('@/assets/photo/icon_more.png')}
                      />
                    </View>
                    <View style={{...styles.head, marginTop: scaleSizeH(21)}}>
                      <KeyboardAvoidingView
                        style={styles.head}
                        behavior="height">
                        <Input
                          containerStyle={{
                            width: scaleSizeW(536),
                            height: scaleSizeH(60),
                            borderColor: '#666666',
                            borderWidth: scaleSizeW(2),
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            paddingBottom: 0,
                          }}
                          leftIcon={
                            <Image
                              style={{
                                width: setSpText(40),
                                height: setSpText(31),
                                marginLeft: scaleSizeW(14),
                                marginRight: scaleSizeW(18),
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
                            width: scaleSizeW(120),
                            height: scaleSizeH(60),
                            padding: 0,
                          }}
                          titleStyle={{fontSize: setSpText(30)}}
                          buttonStyle={{
                            padding: 0,
                            height: scaleSizeH(60),
                            marginLeft: scaleSizeW(34),
                          }}
                        />
                      </KeyboardAvoidingView>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          );
        })}
      </Swiper>
    );
  }
}
