import { Image } from "react-native";
import px from "../../../util/size";
import React from "react";

/**
 * 底部icon home组件
 * @param focus
 */
function userIcon(focus:boolean) {
    if(focus){
        return  <Image style={{width:px(40),height:px(40),paddingTop:px(10)}} source={require('../../assets/icon/user.png')}></Image>
    }else{
        return  <Image style={{width:px(40),height:px(40),paddingTop:px(10)}} source={require('../../assets/icon/user1.png')}></Image>
    }
}
export default userIcon;
