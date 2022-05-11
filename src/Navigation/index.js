import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {Home, PostDetail, Login, SignUp} from '../Screens';
import {store} from '../Store/store';

LogBox.ignoreAllLogs(true);

const AppNavigation = () => {
  const AppStack = createNativeStackNavigator();
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: 'transparent'},
            animation: 'simple_push',
            headerShown: false,
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitleAllowFontScaling: true,
            gestureDirection: 'horizontal',
            gestureEnabled: true,
          }}
          initialRouteName={'Login'}>
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="SignUp" component={SignUp} />
          <AppStack.Screen
            name="PostDetail"
            component={PostDetail}
            options={{headerTitle: 'Post Detail'}}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default AppNavigation;
