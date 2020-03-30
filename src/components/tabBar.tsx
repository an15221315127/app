'use strict';
import {Image} from 'react-native';
import {scaleSizeH, scaleSizeW} from '@/util/adaptation';
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
    width: scaleSizeW(40),
    height: scaleSizeH(40),
    paddingTop: scaleSizeH(10),
  },
});
