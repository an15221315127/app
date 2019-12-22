import {createAppContainer} from "react-navigation";
import ModalNavigator from "./stackScreen";


/**
 * 创建根路由
 */
const RootView = createAppContainer(ModalNavigator);
export default RootView;
