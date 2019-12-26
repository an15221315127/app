import React,{Component} from 'react';
import { TouchableOpacity, SafeAreaView,View,Text ,Image} from 'react-native';
import { inject, observer } from "mobx-react";
import Swiper from 'react-native-swiper';
import {styles} from "./style";
import { Longlist,Tab } from 'beeshell';
import HreoList from "../../assets/hreo";

@inject('user')
@observer // 使你这个类具有可观察性
class Home extends Component<any, any>{


    constructor(props:any) {
        super(props);
        this.state = {
            value:'',
            index:1,
            oldList:[],
            List:[],
            banner:[],
            type_List:[ //type：1为战士，2为刺客，3为法师，4为射手5为辅助
                {
                    value: 1,
                    label: '战士'
                },
                {
                    value: 2,
                    label: '刺客'
                },
                {
                    value: 3,
                    label: '法师'
                },
                {
                    value: 4,
                    label: '射手'
                },
                {
                    value: 5,
                    label: '辅助'
                }
            ],
        }
    }
    componentDidMount(): void {
            this.setState({
                List:HreoList,
                oldList:JSON.parse(JSON.stringify(HreoList))
            })
    }
    // 选择
    private change(item:any,index:number){
        const {oldList} = this.state;
        let arr = [];
        for (let i in oldList){
            let hero = oldList[i].type
            for (let j in hero){
                if(hero[j] == item.value){
                       arr.push(oldList[i])
                }
            }
        }
        this.setState({
            List:arr,
            index:index+1
        })
    }
    _longlist:any;
    render(): React.ReactElement<any,string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {List,oldList,type_List,index} = this.state;
        const {navigate} = this.props.navigation;
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
                        oldList.map((r:any,i:number)=>{
                        return <TouchableOpacity onPress={()=>{
                            navigate('Detail',{...r})
                        }} key={i} style={styles.wrapper}>
                            <Image source={r.url}  style={styles.wrapper} />
                        </TouchableOpacity>
                    })
                    }
                </Swiper>
            </View>
            <Tab
                style={styles.tabList}
                dataItemContainerStyle={styles.tabOne}
                activeColor={'#7A378B'}
                value={index}
                scrollable={true}
                data={type_List}
                onChange={(item:any,index:number)=>{
                    this.change(item,index);

                }
                }

            />
            <Text style={styles.hero_tit}>英雄列表</Text>
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
                        <TouchableOpacity onPress={()=>{
                            navigate('Detail',{...item})
                        }} style={styles.list}>
                            <Image style={styles.one} source={item.url}></Image>
                            <Text style={styles.tit}>{item.tit}</Text>
                        </TouchableOpacity>
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
