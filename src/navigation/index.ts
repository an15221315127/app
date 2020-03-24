import {createAppContainer} from 'react-navigation';
import AppScreen from './modules/Stack';

/**
 * 将根组件放置在视图层暴露出来
 */

export default createAppContainer(AppScreen);

