import {createBottomTabNavigator} from "react-navigation-tabs";
import {tab} from "../../components/tabBar";


/**
 * 获取页面组件
 */
import User from "@/views/User";
import Home from "@/views/Home";
/**
 *
 * 创建底部导航组件视图
 */
export const BottomTabs = createBottomTabNavigator({
        Home:{
            screen:Home,
            navigationOptions:{
                tabBarLabel:'首页',
                tabBarIcon:({focused})=>{
                    return tab(focused,require('../../assets/icon/index.png'),
                        require('../../assets/icon/index1.png'));
                },

            }
        },
        User:{
            screen:User,
            navigationOptions:{
                tabBarLabel:'我的',
                tabBarIcon:({focused})=>{
                    return tab(focused,require('../../assets/icon/user.png'),
                        require('../../assets/icon/user1.png'));
                }
            }
        },
},{
        tabBarOptions:{
            activeTintColor:'red',
            inactiveTintColor:'#333333',
            showIcon:true,
        },
    navigationOptions:{
            header:null
    }

    }
)

