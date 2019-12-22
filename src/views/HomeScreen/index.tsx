import React from "react";
import {Text,SafeAreaView,ScrollView} from "react-native";
import {login} from "../../api";
import { inject } from "mobx-react";

@inject('user')
class Home extends React.Component<any, any>{

    /**
     * 全局储存里的token
     * @param props
     */
    constructor(props:any) {
        super(props);
        console.log('token:',props.user.token)
    }

    componentDidMount(): void {
        /**
         * 接口封装
         */
        login({code:666}).then(res=>{

            console.log(res);
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <SafeAreaView>
            <ScrollView>
                <Text>你好，这里是Home组件</Text>
            </ScrollView>
        </SafeAreaView>
    }
}

export default Home;
