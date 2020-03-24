import React,{Component} from 'react';
import { TouchableOpacity, SafeAreaView,View,Text ,Image,ImageBackground} from 'react-native';
import { inject, observer } from "mobx-react";
import Swiper from 'react-native-swiper';
import {style} from "./style";
import {Index} from "@/api";
import px from "@/util/adaptation";
import {Longlist} from "beeshell/dist/components/Longlist";
export let navigaton:any; // 初始化一个导航器，用于外部导航使用
@inject('user')
@observer // 使你这个类具有可观察性
class Home extends Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            banner:[],// banner图
            coin:[], // 各类币种信息
            index:1,// 轮播图起始下标
            lineList:[],// 当前电力数组
        }
        navigaton = props.navigation
    }

    componentDidMount(): void {
        Index().then((res:any)=>{
            const {data} = res;
            const {banner,coin} = data;
            coin.forEach((r:any)=>{
                if(r.quote.percent_change_24h > 0){ // 拼接数据
                    r.color = '#FB5144'
                    r.bol = '+' + r.quote.percent_change_24h
                }else {
                    r.color = '#38D158'
                    r.bol =  r.quote.percent_change_24h
                }
            })
            this.setState({
                banner,
                coin,
            })
        }).catch(err=>{
            console.log(JSON.stringify(err))
        })

    }
    _longlist:any
    render(): React.ReactElement<any,string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {banner,coin,index,lineList} = this.state;
        return <View style={style.Screen}>
            <SafeAreaView style={style.Screen}>
                {/*头部*/}
                <View style={style.header}>
                    <ImageBackground style={style.Electricity} source={require('@/assets/images/Electricity/Battery.png')} >
                        {
                            lineList.map((item:any)=>{
                                <View style={item.name}></View>
                            })
                        }
                    </ImageBackground>
                    <Text style={style.text}>Surplus electricity:</Text>
                    <Text style={style.text2}>100 kw·h</Text>
                </View>
                {/*轮播图*/}
                <View style={style.container}>
                    <Swiper
                        removeClippedSubviews={false} //这个很主要啊，解决白屏问题
                        autoplay={true}
                        index={index}
                        paginationStyle={style.paginationStyle}
                        dotStyle={style.dotStyle}
                        activeDotStyle={style.activeDotStyle}
                        onIndexChanged={(index:number)=>{
                            this.setState({
                                index
                            })
                        }}
                    >
                        {
                            banner.map((r:any,i:number)=>{
                                return <TouchableOpacity onPress={()=>{
                                    // navigate('Detail',{...r})
                                }} key={i} style={style.wrapper}>
                                    <Image source={{uri:r.img}}  style={style.wrapper} />
                                </TouchableOpacity>
                            })
                        }
                    </Swiper>
                </View>
                {/*分类栏*/}
                <View style={style.navView}>
                    <TouchableOpacity>
                        <ImageBackground  style={style.nav} source={require('@/assets/images/home/nav1.png')}>
                            <Text style={style.nav_tit}>
                                Hashpower market
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground style={style.nav} source={require('@/assets/images/home/nav2.png')}>
                            <Text style={style.nav_tit}>
                                Hashpower
                                renting
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={style.navView}>
                    <TouchableOpacity>
                        <ImageBackground style={style.nav} source={require('@/assets/images/home/tab3.png')}>
                            <Text style={style.nav_tit}>
                                Hashpower
                                market
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground style={style.nav} source={require('@/assets/images/home/tab4.png')}>
                            <Text style={style.nav_tit}>
                                Hashpower
                                renting
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity>
                    <ImageBackground style={style.bottom} source={require('@/assets/images/home/nav3.png')}>
                        <Text style={style.nav_tit}>Miner Products</Text>
                        <Text style={style.nav_mess}>
                            There is a discount for group purchase
                            of mining machines
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={style.navView}>
                    <View style={style.line}/>
                    <Text style={style.title}>Markets</Text>
                </View>
                <View style={{...style.navView,justifyContent:'space-between',paddingRight:px(30),marginTop:px(34),borderBottomColor:'#E4E4E4',borderBottomWidth:px(2),paddingBottom:px(15)}}>
                    <Text style={style.td}>Name</Text>
                    <Text style={style.td}>Price</Text>
                    <Text style={style.td}>Change%</Text>
                </View>
                {/*长数据显示*/}
                <Longlist
                    ref={(c) => {
                        this._longlist = c
                    }}
                    total={coin.length}
                    data={coin}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{...style.longList,...style.border}}>
                                <View style={{...style.longList,...style.item}}>
                                    <Image style={style.icon} source={{uri:item.icon}}></Image>
                                    <View >
                                        <Text style={{...style.text1,marginBottom:px(8)}}>{item.symbol} <Text style={style.small}>/ USD</Text></Text>
                                        <Text style={style.small}>24H Volume</Text>
                                    </View>
                                </View>
                                <View style={style.item}>
                                    <Text style={{...style.text1,marginBottom:px(9)}}>{item.quote.price.toFixed(4)}</Text>
                                    <Text style={{fontSize:px(22)}}>{item.quote.volume_24h.toFixed(4)}</Text>
                                </View>
                                <Text style={{...style.btn,backgroundColor:item.color}}>{item.bol}%</Text>
                            </View>

                        )
                    }}
                    onEndReached={() => {}}
                    onRefresh={() => {}}
                />
            </SafeAreaView>
        </View>
    }
}

export default Home;
