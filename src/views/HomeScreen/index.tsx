import React from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import {login} from '../../api';

class Home extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        // console.log(props)
    }
    componentDidMount(): void {
        /**
         * 接口封装
         */
        // login({code:666}).then(res=>{
        //
        //
        // })
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
