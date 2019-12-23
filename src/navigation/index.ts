import {createAppContainer} from 'react-navigation';
import AppScreen from './stackScreen';
/**
 * 创建根路由
 */
const RootScreen = createAppContainer(AppScreen);
export default RootScreen;
