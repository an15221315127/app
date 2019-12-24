import {createBottomTabNavigator} from "react-navigation-tabs";

/**
 * 获取页面组件
 */

import User from "../../views/UserScreen";
import Home from "../../views/HomeScreen";
/**
 * 引入底部icon
 */
import userIcon from "../../views/UserScreen/tab";
import homeIcon from "../../views/HomeScreen/tab";

/**
 *
 * 创建底部导航组件视图
 */
const BottomTabs = createBottomTabNavigator({
        Home:{
            screen:Home,
            navigationOptions:{
                title:'首页',
                tabBarIcon:({focused})=>{
                   return homeIcon(focused);
                }
            }
        },
        User:{
            screen:User,
            navigationOptions:{
                title:'首页',
                tabBarIcon:({focused})=>{
                    return userIcon(focused)
                }
            }
        },
},{
        tabBarOptions:{
            activeTintColor:'red',
            inactiveTintColor:'#333333',
            showIcon:true,
        }
    }
)
export default BottomTabs;
