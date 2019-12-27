import {createBottomTabNavigator} from "react-navigation-tabs";
import {tab} from "../../Components/Tabs";


/**
 * 获取页面组件
 */
import User from "../../Screens/UserScreen";
import Home from "../../Screens/HomeScreen";
/**
 *
 * 创建底部导航组件视图
 */
const BottomTabs = createBottomTabNavigator({
        Home:{
            screen:Home,
            navigationOptions:{
                tabBarLabel:'首页',
                tabBarIcon:({focused})=>{
                    return tab(focused,require('../../assets/icon/index.png'),require('../../assets/icon/index1.png'));
                },

            }
        },
        User:{
            screen:User,
            navigationOptions:{
                tabBarLabel:'我的',
                tabBarIcon:({focused})=>{
                    return tab(focused,require('../../assets/icon/user.png'),require('../../assets/icon/user1.png'));
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


export default BottomTabs;
