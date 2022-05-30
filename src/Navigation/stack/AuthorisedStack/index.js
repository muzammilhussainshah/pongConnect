import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { Home, OtherProfile, Profile, GameData, Event, EventDetails, ShowTaxi, AwardMovie, DailyMission, DailyMissionDetails } from '../../../Screens';

const Stack = createStackNavigator();

const AuthorisedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // initialRouteName="ShowTaxi"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="OtherProfile"
        component={OtherProfile}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="GameData"
        component={GameData}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Event"
        component={Event}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetails}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ShowTaxi"
        component={ShowTaxi}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="AwardMovie"
        component={AwardMovie}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="DailyMission"
        component={DailyMission}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="DailyMissionDetails"
        component={DailyMissionDetails}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthorisedStack;
