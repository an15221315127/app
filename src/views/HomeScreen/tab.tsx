import { Image } from "react-native";
import px from "../../../util/size";
import React from "react";

/**
 * 底部icon home组件
 * @param focus
 */
 function homeIcon(focus:boolean) {
    if(focus){
        return  <Image style={{width:px(40),height:px(40),paddingTop:px(10)}} source={require('../../assets/icon/index.png')}></Image>
    }else{
        return  <Image style={{width:px(40),height:px(40),paddingTop:px(10)}} source={require('../../assets/icon/index1.png')}></Image>
    }
}
export default homeIcon;
