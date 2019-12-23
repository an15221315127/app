

import { createStackNavigator } from 'react-navigation-stack';

/**
 * 引入页面组件
 */
import BottomTabs from "../bottomScreen";
import Detail from "../../views/DetailScreen";

const AppScreen = createStackNavigator({
    Main:{
        screen:BottomTabs,
    },
    Detail:{
        screen:Detail,
    }

},{
    initialRouteName:'Main',
})
export default AppScreen;



