import {createBottomTabNavigator} from "react-navigation-tabs";

import Home from "../../views/HomeScreen";
import User from "../../views/UserScreen";


/**
 *
 * 创建底部导航组件视图
 */
const bottomTabs = createBottomTabNavigator({
    Home:{
        screen:Home,
    },
    User:{
        screen:User
    }
},{
    navigationOptions:{
        header:null
    }
})


export default bottomTabs;
