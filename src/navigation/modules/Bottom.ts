import {createBottomTabNavigator} from "react-navigation-tabs";
import {tab} from "@/components/tabBar";


/**
 * 获取页面组件
 */
import User from "@/Screen/User";
import Home from "@/Screen/Home";
import Wallet from "@/Screen/Wallet";

const homeIcon = {
    url:require('@/assets/images/tabs/home.png'),
    activeUrl:require('@/assets/images/tabs/activity_home.png')
}
const walletIcon = {
    url:require('@/assets/images/tabs/wallet.png'),
    activeUrl:require('@/assets/images/tabs/activity_wallet.png') ,
}
const userIcon = {
    url:require('@/assets/images/tabs/myself.png'),
    activeUrl:require('@/assets/images/tabs/activity_myself.png') ,
}
/**
 *
 * 创建底部导航组件视图
 */
export default createBottomTabNavigator({
        Home:{
            screen:Home,
            navigationOptions:{
                tabBarLabel:'首页',
                tabBarIcon:({focused})=>{
                    return tab(focused,homeIcon.activeUrl,homeIcon.url);
                },

            }
        },
        Wallet:{
            screen:Wallet,
            navigationOptions:{
                tabBarLabel:'钱包',
                tabBarIcon:({focused})=>{
                    return tab(focused,walletIcon.activeUrl,walletIcon.url);
                }
            }
        },
        User:{
            screen:User,
            navigationOptions:{
                tabBarLabel:'我的',
                tabBarIcon:({focused})=>{
                    return tab(focused,userIcon.activeUrl,userIcon.url);
                }
            }
        }
},{
        tabBarOptions:{
            activeTintColor:'#15172C',
            inactiveTintColor:'#2A2A2A',
            showIcon:true,
        },
    navigationOptions:{
            header:null
    }

    }
)


