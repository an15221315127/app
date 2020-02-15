"use strict";
import { Image } from "react-native";
import px from "@/util/adaptation";
import React from "react";
import {StyleSheet} from "react-native";

/**
 * 底部栏icon切换
 * @param focus
 * @param url
 * @param acturl
 */
export function tab(focus:boolean,url:any,acturl:any){
    const uri = focus ? url : acturl;
    return <Image style={styles.tab} source={uri}></Image>
}

const styles = StyleSheet.create({
    tab:{
        width:px(40),
        height:px(40),
        paddingTop:px(10)
    }
})
