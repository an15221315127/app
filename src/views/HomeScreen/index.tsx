import React from 'react';
import px from "../../../util/size";
import {SafeAreaView, ScrollView,Text } from 'react-native';
import { inject, observer } from "mobx-react";

/**
 *
 * 引入第三方ui库的组件
 */
import { Button } from 'beeshell/dist/components/Button';
import styles from "./style";
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


    render(): React.ReactElement<any,string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <SafeAreaView style={styles.Screen}>
            <ScrollView style={styles.Screen}>
                    <Text>这是home页面</Text>
            </ScrollView>
        </SafeAreaView>
    }
}


export default Home;
