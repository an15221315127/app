

import { createStackNavigator } from 'react-navigation-stack';

/**
 * 引入页面组件
 */
import BottomTabs from "../bottomScreen";
import Detail from "../../views/DetailScreen";
import Login from "../../views/Login";
import Register from "../../views/Register";
const AppScreen = createStackNavigator({
    Main:{
        screen:BottomTabs,
    },
    Login:{
      screen:Login
    },
    Register:{
        screen:Register
    },
    Detail:{
        screen:Detail,

    }

},{
    initialRouteName:'Login',
    defaultNavigationOptions:{
        header:null,
    }
})
export default AppScreen;



