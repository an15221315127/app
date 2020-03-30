import React, {Component} from 'react';
import {
  AsyncStorage,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Longlist} from 'beeshell';
import {setSpText,scaleSizeH,scaleSizeW} from "@/util/adaptation";
import {Avatar} from 'react-native-elements';
import {Input} from 'beeshell/dist/components/Input';
import styles from './style';
import {applicationList} from '@/Screen/Home/list';
import {inject, observer} from 'mobx-react';

export var navigaton: any; // 初始化一个导航器，用于外部导航使用
@inject('user')
@observer // 使你这个类具有可观察性
export default class Home extends Component<any, any> {
  state = {
    avatar:
      'https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJIsvPcVfz6HIAhruSRRTvouSUUiakLX8KbDH2PHzOb0J5zt3852KRy1kdIeJGFp8icfgsOkXKq14xg/132',
    applicationList: [],
    appList2: [
      {
        backgroundImage: require('@/assets/home/jokes.png'),
        state: 0,
        like: 0,
        name: '小段子',
        message: '隔壁的整蛊专家',
      },
      {
        backgroundImage: require('@/assets/home/test.png'),
        state: 0,
        like: 0,
        name: '小测试',
        message: '今日[双鱼座]',
      },
    ],
    isshowController: false,
    currentName: '',
    startIndex: 0,
  };
  confrim() {
    this.setState({
      isshowController: false,
    });
    const {startIndex, applicationList} = this.state;
    const {screen} = applicationList[startIndex];
    if (screen) {
      AsyncStorage.setItem('showFirstScreen', screen);
    }
    AsyncStorage.setItem('startIndex', String(startIndex));
  }
  constructor(props: any) {
    super(props);
    AsyncStorage.getItem('startIndex').then(res => {
      this.setState({
        startIndex: Number(res),
      });
    });
  }
  componentDidMount(): void {
    this.setState({
      applicationList: applicationList,
    });
  }

  changeMainBackground(item: any, index: number) {
    if (this.state.isshowController) {
      this.setState({
        currentName: item.name,
        startIndex: index,
      });
    } else {
      if (item.screen) {
        this.props.navigation.navigate(item.screen);
      }
    }
  }

  showController() {
    const {applicationList, startIndex} = this.state;
    this.setState({
      // @ts-ignore
      currentName: applicationList[startIndex].name,
      isshowController: true,
    });
  }
  onEndReached() {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        this.setState({
          applicationList: [...this.state.applicationList, ...applicationList],
        });
        resolve();
      }, 1000);
    });
  }
  onRefresh() {
    return new Promise((resolve: any) => {
      this.setState({
        applicationList: [],
      });
      setTimeout(() => {
        this.setState({
          applicationList: [...applicationList, ...applicationList],
        });
        resolve();
      }, 1000);
    });
  }
  _longlist: any;
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
      applicationList,
      appList2,
      isshowController,
      currentName,
      startIndex,
    } = this.state;

    return (
      <SafeAreaView style={styles.screen}>
        <View>
          <Input
            style={styles.headerSearch}
            textAlign="center"
            placeholder={'搜一搜'}
          />
        </View>

        <View style={styles.plate}>
          <ImageBackground style={styles.plateItem} source={{uri: avatar}}>
            <Avatar
              containerStyle={{marginLeft: scaleSizeW(52), marginTop: scaleSizeH(15)}}
              size={setSpText(120)}
              rounded
              source={{uri: avatar}}
            />
            <Text style={styles.plateText}>资料</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.plateItem}
            source={require('@/assets/home/plate2.png')}>
            <Image
              style={{
                marginLeft: scaleSizeW(52),
                marginTop: 15,
                backgroundColor: 'transparent',
                width: setSpText(120),
                height: setSpText(120),
              }}
              source={require('@/assets/home/plate2_icon.png')}
            />
            <Text style={styles.plateText}>互动</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.plateItem}
            source={require('@/assets/home/plate3.png')}>
            <Image
              style={{
                marginLeft: scaleSizeW(52),
                marginTop: 15,
                backgroundColor: 'transparent',
                width: setSpText(120),
                height: setSpText(120),
              }}
              source={require('@/assets/home/plate3_icon.png')}
            />
            <Text style={styles.plateText}>官方</Text>
          </ImageBackground>
        </View>
        {isshowController && (
          <View style={styles.status}>
            <Text style={{...styles.statusText, ...styles.first}}>
              主页显示
            </Text>
            <Text style={{...styles.statusText, ...styles.second}}>
              {currentName}
            </Text>
            <Text
              // @ts-ignore
              onPress={this.changeMainBackground.bind(this)}
              style={{...styles.statusText, ...styles.third}}>
              更换
            </Text>
            <Text
              style={{
                ...styles.statusText2,
                marginLeft: scaleSizeW(79),
                marginRight: scaleSizeW(33),
              }}>
              将
              <Text style={{...styles.statusText2, color: '#27B2F3'}}>
                {currentName}
              </Text>
              钉在主页
            </Text>
            <Text
              onPress={() => this.confrim()}
              style={{
                ...styles.statusText,
                color: '#00D623',
                marginRight: scaleSizeW(8),
              }}>
              确认
            </Text>
            <Text style={{...styles.statusText}}>|</Text>
            <Text
              onPress={() =>
                this.setState({
                  isshowController: false,
                })
              }
              style={{
                ...styles.statusText,
                color: '#8E8E8E',
                marginLeft: scaleSizeW(8),
              }}>
              取消
            </Text>
          </View>
        )}
        <Image
          style={{
            width: setSpText(24),
            height: setSpText(24),
            marginLeft: scaleSizeW(30),
            marginBottom: scaleSizeH(14),
            marginTop: scaleSizeH(14),
          }}
          source={require('@/assets/home/star.png')}
        />
        {/*功能模块展示*/}
        <Longlist
          columnWrapperStyle={styles.appList}
          numColumns={2}
          initialNumToRender={10}
          refreshing={true}
          renderFooter={(loading: boolean) => {
            return (
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: scaleSizeW(32),
                  textAlign: 'center',
                }}>
                {loading ? '正在加载' : '暂无更多'}
              </Text>
            );
          }}
          ref={(c: any) => {
            this._longlist = c;
          }}
          onEndReachedThreshold={100}
          total={24}
          data={applicationList}
          onEndReached={() => this.onEndReached()}
          onRefresh={() => this.onRefresh()}
          renderItem={({item, index}: any) => {
            return (
              <TouchableHighlight
                key={index}
                onPress={() => this.changeMainBackground(item, index)}
                onLongPress={this.showController.bind(this)}>
                <ImageBackground
                  style={styles.application}
                  source={item.backgroundImage}
                  key={index}>
                  {item.name && <Text style={styles.appText}>{item.name}</Text>}
                  {item.message && (
                    <Text style={styles.appMessage}>{item.message}</Text>
                  )}
                  <Image
                    style={styles.star}
                    source={
                      item.like == 1
                        ? require('@/assets/home/star.png')
                        : require('@/assets/home/star2.png')
                    }
                  />
                  {isshowController && index == startIndex && (
                    <Image
                      style={styles.select}
                      source={require('@/assets/home/gou.png')}
                    />
                  )}
                </ImageBackground>
              </TouchableHighlight>
            );
          }}
        />
        <Image
          style={{
            width: setSpText(14),
            height: setSpText(19),
            marginLeft: scaleSizeW(30),
            marginTop: scaleSizeH(14),
            marginBottom: scaleSizeH(14),
          }}
          source={require('@/assets/home/close.png')}
        />
        {/*功能模块展示*/}
        <View style={styles.appList}>
          {appList2.map((item: any, index: number) => {
            return (
              <ImageBackground
                style={styles.application}
                source={item.backgroundImage}
                key={index}>
                {item.name && <Text style={styles.appText}>{item.name}</Text>}
                {item.message && (
                  <Text style={styles.appMessage}>{item.message}</Text>
                )}
                <Image
                  style={styles.star}
                  source={
                    item.like == 1
                      ? require('@/assets/home/star.png')
                      : require('@/assets/home/star2.png')
                  }
                />
                {item.state == 1 && (
                  <Image
                    style={styles.select}
                    source={require('@/assets/home/gou.png')}
                  />
                )}
              </ImageBackground>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}
