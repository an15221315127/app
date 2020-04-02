'use strict';
import {Image} from 'react-native';
import {scaleSizeH, scaleSizeW,setSpText} from '@/util/adaptation';
import React from 'react';
import {StyleSheet} from 'react-native';

/**
 * 底部栏icon创建
 * @param focus
 * @param url
 * @param acturl
 */
export function tab(focus: boolean, url: any, acturl: any) {
  const uri = focus ? url : acturl;
  return <Image style={styles.tab} source={uri} />;
}

const styles = StyleSheet.create({
  tab: {
    width: setSpText(40),
    height: setSpText(40),
    paddingTop: setSpText(10),
  },
});
