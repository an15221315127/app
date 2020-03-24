

import { createStackNavigator } from 'react-navigation-stack';

/**
 * 引入页面组件
 */
import Main from "./Bottom";
import Detail from "@/Screen/Home/Detail";
import Login from "@/Screen/User/Login";
import Register from "@/Screen/User/Register";

/**
 * 创建根视图组件
 */
export default createStackNavigator({
    Main:{
        screen:Main,
        navigationOptions:{
            headerBackTitle:' '
        }
    },
    Login:{
      screen:Login,
        navigationOptions:{
          header:null,
            headerBackTitle:' '
        }
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
    initialRouteName:'Main',
    mode:'card',
})




