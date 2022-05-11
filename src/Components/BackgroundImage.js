import React from 'react';
import {ImageBackground} from 'react-native';
const backgroundImage = require('../Assets/background.png');

export default function BackgroundImage({children}) {
  return (
    <ImageBackground
      source={backgroundImage}
      imageStyle={{flex: 1}}
      style={[{flex: 1}]}>
      {children}
    </ImageBackground>
  );
}
