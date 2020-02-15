

import { createStackNavigator } from 'react-navigation-stack';

/**
 * 引入页面组件
 */
import {BottomTabs} from "./Bottom";
import Detail from "@/views/Home/Detail";
import Login from "@/views/User/Login";
import Register from "@/views/User/Register";

/**
 * 创建根视图组件
 */
const AppScreen = createStackNavigator({
    Main:{
        screen:BottomTabs,
        navigationOptions:{
            headerBackTitle:'返回'
        }
    },
    Login:{
      screen:Login
    },
    Register:{
        screen:Register
    },
    Detail:{
        screen:Detail,
        navigationOptions:({navigation})=> {
            const {tit} = navigation.state.params;
            return {
                title:tit,
            }
        }

    }

},{
    initialRouteName:'Login',
    mode:'card',
})




export default AppScreen;



