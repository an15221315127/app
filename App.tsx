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
class App extends React.Component<any, any>{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Provider {...store}>
            <RootScreen />
        </Provider>
    }
}
export default App;
