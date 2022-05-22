// import React, {useEffect} from 'react';
// import {View, Text} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';

// export default function App() {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   );
// }

import React from "react";
import { LogBox, View } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/Store/store';

import Navigation from "./src/Navigation/index";

export default function App() {
  // LogBox.ignoreLogs(['Warning: ...']);
  // LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </Provider>
  );
}

