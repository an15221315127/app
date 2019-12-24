import React from 'react';
import px from "../../../util/size";
import {SafeAreaView, ScrollView} from 'react-native';
import { inject, observer } from "mobx-react";

/**
 * 引入接口
 */
import {login} from '../../api';
/**
 *
 * 引入第三方ui库的组件
 */
import { Button } from 'beeshell/dist/components/Button';
import { NavigationBar } from 'beeshell/dist/components/NavigationBar';
import { Radio } from 'beeshell/dist/components/Radio';

/**
 * @inject必须要带@  并且传的参数是你相应的state
 */
@inject('user')
@observer // 使你这个类具有可观察性
class Home extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            value:null
        }
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
    render(): React.ReactElement<any,string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const title = '你好';
        return <SafeAreaView>
            <ScrollView>
                <NavigationBar
                    title='你好世界'
                    onPressBack={this.gonext.bind(this)}
                    onPressForward={() => {
                    }}
                />
                <Radio
                    value={this.state.value}
                    onChange={(value:any) => {
                        this.setState({
                            value
                        })
                    }}>

                    <Radio.Item label='选项一' value={1} />
                    <Radio.Item label='选项二' value={2} />
                    <Radio.Item label='选项三' value={3} />
                </Radio>
                <Button type="success" textStyle={{textAlign:'center'}} style={{marginTop:px(100)}}  size="lg" onPress={this.gonext.bind(this)} textColorInverse={false}>去详情</Button>
            </ScrollView>
        </SafeAreaView>
    }
}

export default Home;
