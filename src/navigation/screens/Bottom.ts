import {createBottomTabNavigator} from "react-navigation-tabs";
import {tab} from "@/components/tabBar";


/**
 * 获取页面组件
 */
import User from "@/views/User";
import Home from "@/views/Home";


const homeIcon = {
    url:require('../../assets/icon/index.png'),
    activeUrl:require('../../assets/icon/index1.png')
}
const userIcon = {
    url:require('../../assets/icon/user.png'),
    activeUrl:require('../../assets/icon/user1.png') ,
}
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
                    return tab(focused,homeIcon.url,homeIcon.activeUrl);
                },

            }
        },
        User:{
            screen:User,
            navigationOptions:{
                tabBarLabel:'我的',
                tabBarIcon:({focused})=>{
                    return tab(focused,userIcon.url,userIcon.activeUrl);
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

