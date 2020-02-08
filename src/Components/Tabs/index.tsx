"use strict";
import { Image } from "react-native";
import px from "../../util/size";
import React from "react";

/**
 * 底部tabsIcon
 * @param focus
 * @param url
 * @param acturl
 */
export const tab = (focus:boolean,url:any,acturl:any)=>{
    if(focus){
       return <Image style={{width:px(40),height:px(40),paddingTop:px(10)}} source={url}></Image>
    }
    return <Image style={{width:px(40),height:px(40),paddingTop:px(10)}} source={acturl}></Image>
}
