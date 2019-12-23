import React from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import {login} from '../../api';
import { inject, observer } from "mobx-react";


/**
 * @inject必须要带@  并且传的参数是你相应的state
 */
@inject('user')
@observer // 使你这个类具有可观察性
class Home extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        const {user} = this.props;
        console.log(user.userInfo)
    }
    componentDidMount(): void {
        /**
         * 接口封装 来进行调用login这个接口进行测试
         */
        login({code:666}).then(res=>{
            console.log(res)
        })
    }
    gonext(){
        const {navigate} = this.props.navigation;
        navigate('Detail',{title:'你好'})
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <SafeAreaView>
            <ScrollView>
                <Text onPress={this.gonext.bind(this)}>你好，这里是Home组件</Text>
            </ScrollView>
        </SafeAreaView>
    }
}

export default Home;
