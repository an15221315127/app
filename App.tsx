/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {store} from "./src/store";
import {Provider} from 'mobx-react';
import RootView from "./src/navigation";
class App extends React.Component<any, any>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <>
            <Provider {...store}>
                <RootView />
            </Provider>

        </>
    }
}



export default App;
