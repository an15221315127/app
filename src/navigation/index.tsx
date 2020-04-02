import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
/**
 * 引入页面组件
 */
import Photo from '@/Screen/Photo';
import Home from '@/Screen/Home';
import Play from '@/Screen/Play';
/**
 * 创建根视图组件
 */
import {AsyncStorage} from 'react-native';
let initScreen: string = 'Photo';
AsyncStorage.getItem('showFirstScreen').then(res => {
  if (res != null) {
    initScreen = res;
  }
});

const Stack = createStackNavigator();
export default function RootScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal-inverted',
        }}
        headerMode={'none'}
        initialRouteName={initScreen}>
        <Stack.Screen
          name="Photo"
          component={Photo}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Play"
          component={Play}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
