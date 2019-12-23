import {createBottomTabNavigator} from "react-navigation-tabs";


import User from "../../views/UserScreen";
import Home from "../../views/HomeScreen";


/**
 *
 * 创建底部导航组件视图
 */
const BottomTabs = createBottomTabNavigator({
        Home:{
            screen:Home,
        },
        User:{
            screen:User
        },
},{
    navigationOptions:{
        header:null
    }
})
export default BottomTabs;
