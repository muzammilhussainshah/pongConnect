import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Home, PostDetail, Login, SignUp } from '../Screens';
import { store } from '../Store/store';

LogBox.ignoreAllLogs(true);

const AppNavigation = () => {
  const AppStack = createNativeStackNavigator();
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <StatusBar hidden={true} /> */}
        <StatusBar translucent backgroundColor="transparent" />

        <AppStack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: 'transparent' },
            animation: 'fade_from_bottom',
            headerShown: false,
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitleAllowFontScaling: true,
            gestureDirection: 'horizontal',
            gestureEnabled: true,
          }}
          // screenOptions={{
          //   headerShown: false,
          //   headerTransparent: true,
          //   headerBackTitleVisible: false,
          //   headerTitleAllowFontScaling: true,
          //   gestureDirection: 'horizontal',
          //   gestureEnabled: true,
          // }}
          initialRouteName={'Login'}>
          <AppStack.Screen
            // options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
            name="Login" component={Login} />
          <AppStack.Screen
            // options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
            name="SignUp" component={SignUp} />
          <AppStack.Screen
            name="PostDetail"
            component={PostDetail}

            // options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerTitle: 'Post Detail' }}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default AppNavigation;
