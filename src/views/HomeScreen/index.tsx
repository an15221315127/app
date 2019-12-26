import React,{Component} from 'react';
import { ImageBackground, SafeAreaView,View,Text ,Image} from 'react-native';
import { inject, observer } from "mobx-react";
import Swiper from 'react-native-swiper';
import {styles} from "./style";
import { Longlist } from 'beeshell';

@inject('user')
@observer // 使你这个类具有可观察性
class Home extends Component<any, any>{


    constructor(props:any) {
        super(props);
        this.state = {
            value:'',
            index:1,
            List:[],
        }
    }
    componentDidMount(): void {
         this.setState({
             List:[{
                 id:0,
                 tit:'死亡之风',
                 url:require('../../assets/icon/Heros/yasuo.jpeg')
             },
                 {
                     id:1,
                     tit:'影流之主',
                     url:require('../../assets/icon/Heros/jie.jpeg')
                 },
                 {
                     id:2,
                     tit:'至高之拳',
                     url:require('../../assets/icon/Heros/mangseng.jpeg')
                 },
                 {
                     id:3,
                     tit:'放逐之刃',
                     url:require('../../assets/icon/Heros/ruiwen.jpeg')
                 },
                 {
                     id:4,
                     tit:'沙漠皇帝',
                     url:require('../../assets/icon/Heros/shahuang.jpeg')
                 },]
         })

    }
    _longlist:any;
    render(): React.ReactElement<any,string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {List} = this.state;

        return <SafeAreaView style={styles.Screen}>
            {/*轮播图*/}
            <View style={styles.wrapper}>
                <Swiper
                    removeClippedSubviews={false} //这个很主要啊，解决白屏问题
                    horizontal ={true}
                    autoplay={true}
                    showsButtons={true}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    {
                        List.map((r:any)=>{
                        return <ImageBackground source={r.url} key={r.id} style={styles.wrapper}></ImageBackground>
                    })
                    }
                </Swiper>
            </View>
            {/*列表*/}
            <Longlist
                ref={(c:any) => {
                    this._longlist = c
                }}
                numColumns={2}
                initialNumToRender={4}
                columnWrapperStyle={styles.List}
                total={5}
                data={List}
                renderItem={({ item }:any) => {
                    return (
                        <View style={styles.list}>
                            <Image style={styles.one} source={item.url}></Image>
                            <Text style={styles.tit}>{item.tit}</Text>
                        </View>
                    )
                }}
                onRefresh={()=>{
                    return new Promise((resolve)=>{
                        this._longlist.flatList.scrollToIndex({
                            index: 0,
                            animated:true
                        })
                        setTimeout(()=>{
                            resolve();
                        },2000)

                    })

                }}

            />

        </SafeAreaView>
    }
}

export default Home;
