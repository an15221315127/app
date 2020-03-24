import React from 'react';
import RootScreen from '@/navigation';
import {Provider} from 'mobx-react';
import store from "@/store";
import {configure} from 'mobx';

configure(
  {
      enforceActions:'always'
  }
);

export default function App() {
    return <Provider {...store}>
        <RootScreen/>
    </Provider>
}

