import {createAppContainer} from 'react-navigation';
import AppScreen from './StackNavigator';
/**
 * 将根组件放置在视图层暴露出来
 */
const RootScreen = createAppContainer(AppScreen);
export default RootScreen;
