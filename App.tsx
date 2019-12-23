import React from 'react';

import RootScreen from './src/navigation';
import {Provider} from 'mobx-react';
import store from "./src/store";



class App extends React.Component<any, any>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Provider {...store}>
            <RootScreen />
        </Provider>
    }
}
export default App;
