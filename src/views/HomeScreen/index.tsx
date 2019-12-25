import React from 'react';
import { ImageBackground, SafeAreaView, View, Text } from 'react-native';
import { inject, observer } from "mobx-react";
import Swiper from 'react-native-swiper';
/**
 *
 * 引入第三方ui库的组件
 */
import {styles} from "./style";
import index from "../../../util/size";
/**
 * @inject必须要带@  并且传的参数是你相应的state
 */
const List = [
    {
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
    },
];
@inject('user')
@observer // 使你这个类具有可观察性
class Home extends React.Component<any, any>{


    constructor(props:any) {
        super(props);
        this.state = {
            value:null,
            index:1
        }
    }



    render(): React.ReactElement<any,string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {index} = this.state;
        return <SafeAreaView style={styles.Screen}>
            <View style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    height={styles.wrapper.height}
                    showsButtons={true}
                    removeClippedSubviews={false} //这个很主要啊，解决白屏问题
                    autoplay={true}
                    autoplayTimeout={2.5}
                    horizontal ={true}
                    index={index}

                    onIndexChanged={(index:number)=>{
                        this.setState({index})
                    }}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    {
                        List.map((r,i)=>{
                            return <ImageBackground style={styles.wrapper} key={i} source={r.url}>
                                <Text>{r.tit}</Text>
                            </ImageBackground>

                        })
                    }


                </Swiper>
            </View>
        </SafeAreaView>
    }
}


export default Home;
