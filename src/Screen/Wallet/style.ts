import {Dimensions, StyleSheet} from "react-native";
import React from "react";
import px from "@/util/adaptation";
const deviceheight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    screen:{
        width:'100%',
        height: '100%',
    },
    backgroundVideo: {
        width:'100%',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        height:deviceheight-px(6),
        backgroundColor:'black'
    },
    progress:{
        width:'100%',
        height:px(6),
        backgroundColor: '#67D9B8',
    },
    progressView:{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width:'100%',
        height:px(6),
    }
})
