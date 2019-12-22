import {createStackNavigator} from "react-navigation-stack";

/**
 * 引入页面组件
 */
import bottomTabs from "../bottomScreen";

const ModalNavigator = createStackNavigator({
   Main:{
       screen:bottomTabs,

   }
},{
    initialRouteName:'Main',

})

export default ModalNavigator;



