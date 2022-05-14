import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './drawerContent';
import AuthorisedStack from '../stack/AuthorisedStack';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTransparent: false,
      }}
      drawerStyle={{
        width: '100%',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: 'red',
      }}
      overlayColor={30}
      sceneContainerStyle={{opacity: 20, shadowOpacity: 70}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="AuthorisedStack" component={AuthorisedStack} />
    </Drawer.Navigator>
  );
}
