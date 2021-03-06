import React from 'react';
import RootScreen from '@/navigation';
import {Provider} from 'mobx-react';
import store from '@/store';
import {configure} from 'mobx';
import 'react-native-gesture-handler';
configure({
  enforceActions: 'always',
});
/**
 * 代码千万行，注释第一行，
 * 编程不规范，同事两行泪
 * @constructor
 */
export default function App() {
  return (
    <Provider {...store}>
      <RootScreen />
    </Provider>
  );
}
