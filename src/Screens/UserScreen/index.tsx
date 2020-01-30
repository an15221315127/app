import React from "react";
import { ImageBackground, SafeAreaView, ScrollView,Text,View } from "react-native";
import styles from "./style";
import px from "../../util/Proportion";
import {Clipboard} from "react-native";

class User extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
        this.state = {
            qq:2890815038
        }

    }

    /**
     * 复制我的qq
     */
    private copy(){
        Clipboard.setString(this.state.qq.toString());
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {qq} = this.state;
        return <SafeAreaView>
            <ScrollView style={styles.scroll}>
                <View style={styles.header}>
                    <ImageBackground style={{width:px(80),height:px(80),borderRadius:px(40),overflow:'hidden'}} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJIsvPcVfz6HIAhruSRRTvouSUUiakLX8KbDH2PHzOb0J5zt3852KRy1kdIeJGFp8icfgsOkXKq14xg/132'}}/>
                    <Text style={styles.text}>作者：安国栋</Text>
                    <Text onPress={this.copy.bind(this)} style={styles.text}>QQ：{qq}</Text>
                    <Text style={styles.text}>作者简介：</Text>
                    <Text style={styles.text}>本人是一位半道出家的前端工程师，react native是我接触的第二个可以做app的框架，也是本着学习的心态搭建了这个基础模版，希望有帮助到初学者。此项目中集成了mobx状态管理，react-navigation路由导航，beeshell UI库，以及typescript来进行维护项目。希望有缘人能借助我的基础模版开发自己的项目。麻雀虽小，五脏俱全。</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    }

}


export default User;
